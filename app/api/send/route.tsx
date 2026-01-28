import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure it's treated as a dynamic lambda

export async function POST(request: Request) {
    const diagnostics = {
        hasKey: false,
        keyPrefix: 'N/A',
        configError: null as string | null,
    };

    try {
        // Safe check for API Key
        const apiKey = process.env.RESEND_API_KEY;
        diagnostics.hasKey = !!apiKey;
        diagnostics.keyPrefix = apiKey ? apiKey.substring(0, 4) + '...' : 'MISSING';

        if (!apiKey) {
            return NextResponse.json({
                error: 'Configuration Error: RESEND_API_KEY is missing via process.env',
                debugInfo: diagnostics
            }, { status: 500 });
        }

        // Initialize Resend INSIDE the try/catch to catch any generic initialization errors
        let resend;
        try {
            resend = new Resend(apiKey);
        } catch (initError) {
            return NextResponse.json({
                error: 'Failed to initialize Resend client',
                details: initError instanceof Error ? initError.message : String(initError),
                debugInfo: diagnostics
            }, { status: 500 });
        }

        const body = await request.json();
        const { name, email, message } = body;

        const data = await resend.emails.send({
            from: 'Pixel Flux Website <noreply@pixelfluxcreative.com>',
            to: ['info@pixelfluxcreative.com'],
            subject: `Nuevo contacto de: ${name}`,
            react: <EmailTemplate firstName={name} email={email} message={message} />,
            replyTo: email,
        });

        if (data.error) {
            return NextResponse.json({
                error: data.error,
                debugInfo: diagnostics
            }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Unknown unexpected error',
            debugInfo: diagnostics
        }, { status: 500 });
    }
}
