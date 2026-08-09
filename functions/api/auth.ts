export async function onRequestGet(context: any) {
  const clientId = context.env.GITHUB_CLIENT_ID;
  
  if (!clientId) {
    return new Response(JSON.stringify({ error: "Missing GITHUB_CLIENT_ID environment variable" }), { status: 500 });
  }
  
  // Redirect to GitHub's OAuth authorization page
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
  
  return Response.redirect(githubAuthUrl, 302);
}
