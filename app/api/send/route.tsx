import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        const data = await resend.emails.send({
            from: 'Pixel Flux Website <noreply@pixelfluxcreative.com>',
            to: ['info@pixelfluxcreative.com'],
            subject: `Nuevo contacto de: ${name}`,
            react: <EmailTemplate firstName={name} email={email} message={message} />,
            replyTo: email,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
