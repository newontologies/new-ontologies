# New Ontologies

A portfolio blog for original, long-form company research. Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com).

## Setup (one-time)

### 1. Install prerequisites

- [Node.js](https://nodejs.org) — download the LTS version and install it
- [Git](https://git-scm.com) — likely already on your Mac. Test by opening Terminal and typing `git --version`

### 2. Create accounts

- [GitHub](https://github.com) — sign up for a free account
- [Vercel](https://vercel.com) — sign up with your GitHub account

### 3. Push this project to GitHub

Option A — using GitHub's web interface (easiest):
1. Go to github.com → click "+" → "New repository"
2. Name it `new-ontologies`, keep it public or private, click "Create"
3. Upload all the project files by dragging them into the browser

Option B — using Terminal:
```bash
cd new-ontologies
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOURUSERNAME/new-ontologies.git
git push -u origin main
```

### 4. Deploy on Vercel

1. Go to vercel.com → "Add New Project"
2. Import your `new-ontologies` GitHub repo
3. Vercel auto-detects Astro — just click "Deploy"
4. Your site is live at `new-ontologies.vercel.app`

### 5. Custom domain (optional)

1. Buy a domain (Namecheap or Cloudflare, ~$10/yr)
2. In Vercel → your project → Settings → Domains → add your domain
3. Vercel gives you DNS records to add at your registrar
4. Done in ~15 minutes

## Writing a new post

1. Create a new file in `src/pages/posts/` named like `my-article.md`
2. Add this at the top of the file:

```markdown
---
layout: ../../layouts/Post.astro
title: "Your Title Here"
subtitle: "A one-line description."
date: 2026-03-10
tag: Category
---

Your writing goes here. Regular paragraphs, **bold**, *italic*, [links](https://example.com).

## Section Heading

More writing.

> A blockquote for emphasis.
```

3. Push to GitHub (drag-drop the file on the web, or `git add . && git commit -m "new post" && git push`)
4. Vercel auto-deploys in ~30 seconds

## Markdown cheat sheet

| What you want       | What you type                    |
|---------------------|----------------------------------|
| Bold                | `**bold text**`                  |
| Italic              | `*italic text*`                  |
| Link                | `[text](https://url.com)`       |
| Image               | `![alt text](image-url.jpg)`    |
| Section heading     | `## Heading`                     |
| Sub-heading         | `### Sub-heading`                |
| Blockquote          | `> quoted text`                  |
| Horizontal rule     | `---`                            |
| Bullet list         | `- item`                         |
| Numbered list       | `1. item`                        |

## Local development (optional)

If you want to preview changes before pushing:

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`. Changes appear instantly in the browser.

## Customization

- **Site name / bio**: Edit `src/layouts/Base.astro` and `src/pages/about.astro`
- **Substack link**: Find `yourusername.substack.com` in `Base.astro` and `about.astro`, replace with your real URL
- **Colors**: Edit CSS variables at the top of `src/styles/global.css`
- **Accent color**: Change `--accent: #D4A017` to any hex color
