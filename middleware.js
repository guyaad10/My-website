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

  // Unlocked: tell Vercel to carry on and serve the site (what next() in @vercel/functions returns).
  if (readCookie(request, COOKIE) === (await cookieValue())) return new Response(null, { headers: { 'x-middleware-next': '1' } });

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
body{font-family:var(--sans);color:var(--ink);-webkit-font-smoothing:antialiased;
  /* the site's "Boring" background: flat, with a faint 32px grid */
  background-color:#F0F5F5;background-position:center;background-size:32px 32px;
  background-image:linear-gradient(rgba(20,30,40,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(20,30,40,.045) 1px,transparent 1px);
  display:grid;place-items:center;padding:24px 16px}
main{width:100%;max-width:400px}
h1{font-size:clamp(1.75rem,5vw,2.25rem);font-weight:500;letter-spacing:-.03em;line-height:1.1;margin:0 0 12px}
p{margin:0 0 28px;color:var(--ink-2);font-size:1rem;line-height:1.5}
form{display:flex;gap:8px}
input{flex:1;min-width:0;font:inherit;font-size:1rem;color:var(--ink);background:#fff;border:1px solid rgba(20,20,40,.1);
  border-radius:999px;padding:12px 18px;outline:none;letter-spacing:.2em;transition:border-color .2s,box-shadow .2s}
input::placeholder{letter-spacing:normal;color:#A0A0A8}
input:focus{border-color:var(--ink);box-shadow:0 0 0 3px rgba(14,14,16,.08)}
button{font:inherit;font-size:.9375rem;font-weight:500;border:0;border-radius:999px;padding:12px 22px;background:var(--ink);color:#fff;cursor:pointer}
button:hover{background:#2a2a2e}
.jf{--bob:-14;position:relative;width:52px;height:52px;margin:0 0 34px;cursor:pointer}
.ghost{width:100%;height:100%;display:block;overflow:visible}
.ghost g{transform-box:view-box}
.g-body{fill:#111B21}
.g-bob{animation:jf-bob 5.2s ease-in-out infinite}
.g-squish{transform-origin:100px 200px;animation:jf-pulse 5.2s ease-in-out infinite}
.g-eyes{transition:transform .35s cubic-bezier(.2,.7,.1,1)}
.g-dots circle{fill:#F0F5F5;transform-box:fill-box;transform-origin:center;animation:jf-blink 6s infinite;transition:transform .28s,opacity .2s}
.g-smile path{fill:none;stroke:#F0F5F5;stroke-width:5.5;stroke-linecap:round;stroke-dasharray:30;stroke-dashoffset:30;opacity:0;transition:stroke-dashoffset .34s .06s,opacity .15s .06s}
.jf:hover .g-dots circle,.jf.happy .g-dots circle{animation:none;transform:translateX(-4px) scaleY(.15);opacity:0}
.jf:hover .g-smile path,.jf.happy .g-smile path{stroke-dashoffset:0;opacity:1}
.jf.hop .g-squish{animation:jf-hop .9s cubic-bezier(.3,.7,.3,1)}
.jf-shadow{position:absolute;left:50%;top:calc(100% + 10px);width:44px;height:8px;margin-left:-22px;border-radius:50%;pointer-events:none;
  background:radial-gradient(closest-side,rgba(6,14,38,.5),rgba(6,14,38,.22) 55%,rgba(6,14,38,0));animation:jf-shadow 5.2s ease-in-out infinite}
@keyframes jf-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--bob,-9) * 1px))}}
@keyframes jf-pulse{0%,38%,62%,100%{transform:scale(1,1)}46%{transform:scale(1.05,.94)}54%{transform:scale(.97,1.04)}}
@keyframes jf-blink{0%,91%,97%,100%{transform:scaleY(1)}94%{transform:scaleY(.1)}}
@keyframes jf-shadow{0%,100%{transform:scale(1,1);opacity:.95}50%{transform:scale(.6,.6);opacity:.45}}
@keyframes jf-hop{0%{transform:scale(1,1)}16%{transform:scale(1.14,.82)}40%{transform:translateY(-58px) scale(.9,1.12)}62%{transform:translateY(-58px) scale(1.02,.98) rotate(-4deg)}82%{transform:translateY(0) scale(1.1,.88)}92%{transform:scale(.97,1.03)}100%{transform:scale(1,1)}}
@media (prefers-reduced-motion:reduce){.jf *{animation:none!important}}
.err{margin:12px 0 0 18px;color:var(--warn);font-size:.875rem}
${wrong ? 'input{border-color:var(--warn)}' : ''}
</style>
</head>
<body>
<main>
  <div class="jf" aria-hidden="true"><svg class="ghost" viewBox="0 0 200 200" focusable="false"><g class="g-bob"><g class="g-squish"><path class="g-body" d="M44 0C19.6995 0 0 19.6995 0 44V184C0 192.837 7.16344 200 16 200H17C25.2843 200 32 193.284 32 185V182C32 175.373 37.3726 170 44 170C50.6274 170 56 175.373 56 182V185C56 193.284 62.7157 200 71 200H73C81.2843 200 88 193.284 88 185V182C88 175.373 93.3726 170 100 170C106.627 170 112 175.373 112 182V185C112 193.284 118.716 200 127 200H129C137.284 200 144 193.284 144 185V182C144 175.373 149.373 170 156 170C162.627 170 168 175.373 168 182V185C168 193.284 174.716 200 183 200H184C192.837 200 200 192.837 200 184V44C200 19.6995 180.301 0 156 0H44Z"/><g class="g-eyes"><g class="g-dots"><circle cx="115" cy="77" r="6"/><circle cx="172" cy="77" r="6"/></g><g class="g-smile"><path d="M99 83Q110 72 121 83"/><path d="M153 83Q164 72 175 83"/></g></g></g></g></svg><i class="jf-shadow" aria-hidden="true"></i></div>
  <h1>Hi, I'm Guy.</h1>
  <p>This portfolio is password protected. Enter the password to view my work.</p>
  <form method="post" action="${UNLOCK_PATH}">
    <input type="hidden" name="next" value="${esc(next)}">
    <input type="password" name="password" inputmode="numeric" autocomplete="current-password" placeholder="Password" aria-label="Password" required autofocus>
    <button type="submit">Unlock</button>
  </form>
  ${wrong ? '<div class="err" role="alert">That password isn\'t right. Try again.</div>' : ''}
</main>
<script>
// The same jellyfish as the home page: its eyes follow the pointer, and it hops when clicked.
const jf = document.querySelector('.jf'), eyes = jf.querySelector('.g-eyes');
addEventListener('pointermove', e => {
  const r = jf.getBoundingClientRect(), dx = e.clientX - (r.left + r.width * .7), dy = e.clientY - (r.top + r.height * .38);
  const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 260);
  eyes.style.transform = \`translate(\${(dx / d) * 13 * k}px, \${(dy / d) * 9 * k}px)\`;
}, { passive: true });
jf.addEventListener('click', () => {
  jf.classList.remove('hop'); void jf.offsetWidth; jf.classList.add('hop', 'happy');
  setTimeout(() => jf.classList.remove('hop', 'happy'), 950);
});
</script>
</body>
</html>`;
}
