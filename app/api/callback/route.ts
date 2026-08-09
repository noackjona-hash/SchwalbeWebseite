import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Cloudflare Pages Edge Runtime

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new NextResponse("Missing authorization code", { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse("Missing GitHub OAuth credentials in environment variables", { status: 500 });
  }

  try {
    // Exchange the authorization code for an access token
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();
    const token = data.access_token;

    if (!token) {
      return new NextResponse(`GitHub OAuth error: ${JSON.stringify(data)}`, { status: 400 });
    }

    // Decap CMS expects this specific HTML/JS response to communicate the token back to the main window
    const script = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Authenticating...</title>
        </head>
        <body>
          <p>Authorizing...</p>
          <script>
            (function() {
              const receiveMessage = (message) => {
                // Send the token back to Decap CMS
                window.opener.postMessage(
                  'authorization:github:success:{"token":"${token}","provider":"github"}',
                  message.origin
                );
                window.removeEventListener("message", receiveMessage, false);
              }
              window.addEventListener("message", receiveMessage, false);
              
              // Tell Decap CMS we are ready to receive its handshake
              window.opener.postMessage("authorizing:github", "*");
            })();
          </script>
        </body>
      </html>
    `;

    return new NextResponse(script, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    return new NextResponse(`Internal Server Error: ${(error as Error).message}`, { status: 500 });
  }
}
