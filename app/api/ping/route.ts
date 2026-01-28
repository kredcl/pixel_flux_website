import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
    return NextResponse.json({
        message: 'pong',
        time: Date.now(),
        env: process.env.NODE_ENV,
        keyCheck: !!process.env.RESEND_API_KEY
    });
}
