# Guy — Portfolio Website

A single-page portfolio site. Plain HTML/CSS/JS — no build step, no dependencies.

## Files
- `index.html` — the whole site
- `files/CV_Guy_Peretz_2026.pdf` — the resume behind the Resume / Open / Download buttons (replace this file to update it)
- `images/` — put image files here (reference them like `images/clalit-1.png`)

---

## Fastest way to publish (30 seconds) — Netlify Drop
1. Go to **https://app.netlify.com/drop**
2. Drag this **entire folder** onto the page
3. It's live. Netlify gives you a URL. Add a custom domain later in Site settings → Domain.

---

## The RIGHT way (version history + easy edits) — GitHub + Netlify
This gives you a full history — revert any change, anytime.

1. Create a free account at **github.com**
2. Create a new repository (e.g. `guy-portfolio`)
3. Upload this folder's contents (drag files into GitHub's "Add file → Upload files")
4. Go to **netlify.com** → "Add new site" → "Import from Git" → pick your repo
5. Deploy settings: leave blank (no build command, publish directory = root). Deploy.

From now on: edit → commit on GitHub → site auto-updates. To revert, open the repo's
commit history and restore any earlier version.

---

## Editing
- Text and layout: edit `index.html`
- Images: drop files into `images/`, then reference `<img src="images/name.png">`
- Keep images as separate files — never paste them into the HTML as base64.

---

## Live chat answers
Questions typed into the chat are answered by `api/chat.js` (a Vercel function that calls Claude) as Guy, using only the site's own text in `api/_portfolio.js` (About, resume, case studies). Each answer can add a button to the right place: a case study, the resume, About or contact.
- Set `ANTHROPIC_API_KEY` in the Vercel project's environment variables. Optional: `CHAT_MODEL` to use a different Claude model (default `claude-opus-5-5`).
- Without the key, or if a call fails, the chat uses its scripted answers instead.
- When a case study, the About text or the resume changes, update the matching part of `api/_portfolio.js` too.
