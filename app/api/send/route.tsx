import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    // Debug logging
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key check:', apiKey ? `Present (starts with ${apiKey.substring(0, 4)}...)` : 'Missing or empty');

    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not defined');
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
            console.error('Resend API returned error:', data.error);
            return NextResponse.json(data); // Resend might return { error: ... } even on "success" call structure sometimes, best to pass it through if it has an error object.
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
