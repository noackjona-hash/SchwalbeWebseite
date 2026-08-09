import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Cloudflare Pages Edge Runtime

export function GET() {
  const clientId = process.env.GITHUB_CLIENT_ID;
  
  if (!clientId) {
    return NextResponse.json({ error: "Missing GITHUB_CLIENT_ID environment variable" }, { status: 500 });
  }
  
  // Redirect to GitHub's OAuth authorization page
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
  
  return NextResponse.redirect(githubAuthUrl);
}
