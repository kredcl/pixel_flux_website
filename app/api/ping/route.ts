import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json({
        message: 'pong',
        time: Date.now(),
        env: process.env.NODE_ENV,
        // Security: Only showing KEYS, not values
        availableEnvKeys: Object.keys(process.env).filter(key => !key.includes('KEY') && !key.includes('SECRET')),
        hasResendKey: !!process.env.RESEND_API_KEY
    });
}
