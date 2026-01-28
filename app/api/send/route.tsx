import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; // FORCE Node.js runtime to convert 500s into actual errors

export async function POST(request: Request) {
    console.log('API Route started v10'); // Attempt to log to server console
    const diagnostics = {
        hasKey: false,
        keyPrefix: 'N/A',
        mode: 'v10-no-imports-runtime'
    };


    try {
        const apiKey = process.env.RESEND_API_KEY;
        diagnostics.hasKey = !!apiKey;
        diagnostics.keyPrefix = apiKey ? apiKey.substring(0, 4) + '...' : 'MISSING';

        if (!apiKey) {
            return NextResponse.json({
                error: 'Configuration Error: RESEND_API_KEY is missing',
                debugInfo: diagnostics
            }, { status: 500 });
        }

        const body = await request.json();
        const { name, email, message } = body;

        // Construct simple HTML email content
        const htmlContent = `
            <div style="font-family: sans-serif; padding: 20px;">
                <h1>Nuevo contacto de: ${name}</h1>
                <p><strong>Email:</strong> ${email}</p>
                <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
                    <p><strong>Mensaje:</strong></p>
                    <p>${message}</p>
                </div>
            </div>
        `;

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                from: 'Pixel Flux Website <noreply@pixelfluxcreative.com>',
                to: ['info@pixelfluxcreative.com'],
                subject: `Nuevo contacto de: ${name}`,
                html: htmlContent,
                reply_to: email,
            })
        });

        if (!res.ok) {
            const errorText = await res.text();
            let errorData;
            try {
                errorData = JSON.parse(errorText);
            } catch (e) {
                errorData = errorText;
            }

            return NextResponse.json({
                error: 'Resend API Error',
                details: errorData,
                debugInfo: diagnostics
            }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Unknown unexpected error',
            debugInfo: diagnostics
        }, { status: 500 });
    }
}
