import { NextResponse } from 'next/server';

// Simple API route to test security headers
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Security headers test endpoint',
      timestamp: new Date().toISOString(),
      headers: 'Check response headers in browser dev tools'
    },
    { 
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      }
    }
  );
}
