import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Suppress webpack HMR 404 errors for Turbopack
  const pathname = request.nextUrl.pathname;
  
  if (pathname.startsWith('/__webpack_hmr')) {
    return new NextResponse(null, { 
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/__webpack_hmr', '/__webpack_hmr/:path*'],
};
