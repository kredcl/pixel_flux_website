import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

// Keep logToFile for fallback, but main strategy is response body
function logToFile(message: string) {
    // ... existing ...
}

export async function POST(request: Request) {
    // Debug info builder
    const diagnostics = {
        hasKey: !!process.env.RESEND_API_KEY,
        keyLength: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0,
        keyPrefix: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 4) : 'NONE',
        cwd: process.cwd(),
        timestamp: new Date().toISOString()
    };

    // Log to file as well, just in case
    logToFile(`[Request] KeyPrefix: ${diagnostics.keyPrefix}`);

    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!process.env.RESEND_API_KEY) {
            logToFile('RESEND_API_KEY is not defined');
            return NextResponse.json({
                error: 'Server misconfiguration: Missing API Key',
                debugInfo: diagnostics
            }, { status: 500 });
        }

        const data = await resend.emails.send({
            from: 'Pixel Flux Website <noreply@pixelfluxcreative.com>',
            to: ['info@pixelfluxcreative.com'],
            subject: `Nuevo contacto de: ${name}`,
            react: <EmailTemplate firstName={name} email={email} message={message} />,
            replyTo: email,
        });

        if (data.error) {
            logToFile(`Resend API returned error: ${JSON.stringify(data.error)}`);
            return NextResponse.json({
                error: data.error,
                debugInfo: diagnostics
            }, { status: 500 });
        }

        logToFile('Email sent successfully via Resend API');
        return NextResponse.json(data);
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        logToFile(`Error processing contact form: ${errorMsg}`);
        return NextResponse.json({
            error: errorMsg,
            debugInfo: diagnostics
        }, { status: 500 });
    }
}
