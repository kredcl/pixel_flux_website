import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// Explicitly use Node runtime to ensure compatibility
export const runtime = 'nodejs';

export async function GET() {
    return NextResponse.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV,
        hasKey: !!process.env.RESEND_API_KEY
    });
}
