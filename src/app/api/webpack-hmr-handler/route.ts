export async function GET() {
  // Suppress webpack HMR 404 errors for Turbopack
  return new Response('', { 
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    },
  });
}
