// Password gate for the whole site, run by Vercel Routing Middleware before any file is served.
// The password can be changed by setting SITE_PASSWORD in the Vercel project's environment
// variables. Without it, the gate falls back to PASSWORD_SHA256 below (a hash, so the
// password itself isn't written in this public repo).
const PASSWORD_SHA256 = 'ed6f2060379b3b2192ea06e51b6e771f0ef931e9efc702f767da99869d4e67f7';
const COOKIE = 'site_gate';
const UNLOCK_PATH = '/__unlock';
const ONE_YEAR = 60 * 60 * 24 * 365;

export const config = { matcher: '/:path*' };

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function envPassword() {
  return typeof process !== 'undefined' && process.env ? process.env.SITE_PASSWORD || '' : '';
}

async function expectedHash() {
  const env = envPassword();
  return env ? sha256(env) : PASSWORD_SHA256;
}

// The cookie changes whenever the password does, so changing it signs everyone out.
async function cookieValue() {
  return sha256('site-gate:v1:' + (await expectedHash()));
}

function readCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  const match = header.split(/;\s*/).find(c => c.startsWith(name + '='));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : '';
}

// Only same-site paths are allowed as the post-unlock destination.
function safeNext(value) {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') ? value : '/';
}

export default async function middleware(request) {
  const url = new URL(request.url);

  if (url.pathname === UNLOCK_PATH && request.method === 'POST') {
    const form = await request.formData();
    const next = safeNext(form.get('next'));
    if ((await sha256(String(form.get('password') || ''))) === (await expectedHash())) {
      return new Response(null, {
        status: 303,
        headers: {
          location: next,
          'set-cookie': `${COOKIE}=${await cookieValue()}; Path=/; Max-Age=${ONE_YEAR}; HttpOnly; Secure; SameSite=Lax`,
        },
      });
    }
    return gate(next, true);
  }

  if (readCookie(request, COOKIE) === (await cookieValue())) return; // unlocked: serve the site

  return gate(url.pathname + url.search, false);
}

function gate(next, wrong) {
  return new Response(page(next, wrong), {
    status: wrong ? 401 : 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex',
    },
  });
}

const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function page(next, wrong) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex">
<title>Guy — Senior Product Designer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{--bg:#FFFFFF;--surface-2:#F4F4F5;--ink:#0E0E10;--ink-2:#66666E;--line:#ECECEF;--accent:#3B5BFD;--warn:#B26A12;
  --sans:"Geist","Inter",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color-scheme:light}
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;height:100%}
body{font-family:var(--sans);color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased;
  background-image:radial-gradient(60% 50% at 20% 0%,#C9DCFF 0%,transparent 70%),radial-gradient(50% 45% at 90% 10%,#DDD2FF 0%,transparent 70%),radial-gradient(60% 50% at 60% 100%,#FFDCCB66 0%,transparent 70%);
  display:grid;place-items:center;padding:24px 16px}
main{width:100%;max-width:400px}
h1{font-size:clamp(1.75rem,5vw,2.25rem);font-weight:500;letter-spacing:-.03em;line-height:1.1;margin:0 0 12px}
p{margin:0 0 28px;color:var(--ink-2);font-size:1rem;line-height:1.5}
form{display:flex;gap:8px}
input{flex:1;min-width:0;font:inherit;font-size:1rem;color:var(--ink);background:rgba(255,255,255,.85);border:1px solid var(--line);
  border-radius:999px;padding:12px 18px;outline:none;letter-spacing:.2em;transition:border-color .2s,box-shadow .2s}
input::placeholder{letter-spacing:normal;color:#A0A0A8}
input:focus{border-color:var(--ink);box-shadow:0 0 0 3px rgba(14,14,16,.08)}
button{font:inherit;font-size:.9375rem;font-weight:500;border:0;border-radius:999px;padding:12px 22px;background:var(--ink);color:#fff;cursor:pointer}
button:hover{background:#2a2a2e}
.err{margin:12px 0 0 18px;color:var(--warn);font-size:.875rem}
${wrong ? 'input{border-color:var(--warn)}' : ''}
</style>
</head>
<body>
<main>
  <h1>Hi, I'm Guy.</h1>
  <p>This portfolio is password protected. Enter the password to view my work.</p>
  <form method="post" action="${UNLOCK_PATH}">
    <input type="hidden" name="next" value="${esc(next)}">
    <input type="password" name="password" inputmode="numeric" autocomplete="current-password" placeholder="Password" aria-label="Password" required autofocus>
    <button type="submit">Unlock</button>
  </form>
  ${wrong ? '<div class="err" role="alert">That password isn\'t right. Try again.</div>' : ''}
</main>
</body>
</html>`;
}
