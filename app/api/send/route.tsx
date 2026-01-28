import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

function logToFile(message: string) {
    const logPath = path.join(process.cwd(), 'debug-contact.log');
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
        fs.appendFileSync(logPath, logMessage);
        console.log(message); // Keep console log just in case
    } catch (err) {
        console.error('Failed to write to log file:', err);
    }
}

export async function POST(request: Request) {
    // Debug logging
    const apiKey = process.env.RESEND_API_KEY;
    logToFile(`API Key check: ${apiKey ? `Present (starts with ${apiKey.substring(0, 4)}...)` : 'Missing or empty'}`);

    try {
        const body = await request.json();
        const { name, email, message } = body;

        logToFile(`Attempting to send email from: ${email}`);

        if (!process.env.RESEND_API_KEY) {
            logToFile('RESEND_API_KEY is not defined');
            return NextResponse.json({ error: 'Server misconfiguration: Missing API Key' }, { status: 500 });
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
            return NextResponse.json(data);
        }

        logToFile('Email sent successfully via Resend API');
        return NextResponse.json(data);
    } catch (error) {
        logToFile(`Error processing contact form: ${JSON.stringify(error)}`);
        return NextResponse.json({ error }, { status: 500 });
    }
}
