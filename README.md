# Isha Jawalkar – The Data Engineering Lab (Portfolio)

A React + Vite portfolio website. Everything you will want to edit lives in `src/data/`.

## 1. Run it on your computer

1. Install Node.js (LTS version) from https://nodejs.org
2. Open a terminal inside this folder (`isha-portfolio`) and run:

```bash
npm install
npm run dev
```

3. Open the address it prints (usually http://localhost:5173).

To test the production version: `npm run build` then `npm run preview`.

## 2. Edit your content (no coding needed)

| What | File |
|---|---|
| Name, headline, links, resume switch, photo, story, experience, certificates | `src/data/profile.js` |
| Projects (case studies, status, screenshots) | `src/data/projects.js` |
| Skills, learning roadmap, pipeline text | `src/data/learning.js` |
| Blog posts (text, dates, cover images) | `src/data/blogs.js` |

**Add your photo:** put it in `public/images/isha.jpg`, then in `profile.js` set `photo: '/images/isha.jpg'`.

**Add your resume:** save the PDF as `public/resume/Isha-Jawalkar-Resume.pdf`, then in `profile.js` set `available: true`. The Connect page turns into a download button.

**Certificates, hackathons and achievements:** open `src/data/profile.js` and find `certCategories`. Put the image in `public/certificates/`, then add an item to the right category (Certifications, Learning badges, Internships, Hackathons, Achievements). Job simulations now live under Certifications with `title`, `issuer`, `image: '/certificates/yourfile.png'` and `alt`. Clicking the card on the site opens the full image.

**Add project screenshots:** put images in `public/images/projects/` and list them in `projects.js`, e.g. `screenshots: [{ src: '/images/projects/map.png', alt: 'DrainMind map view' }]`.

**Blog cover images:** put them in `public/images/blog/` and set `cover: '/images/blog/file.jpg'`. **Blog dates:** the dates are draft dates, so change them to your real publication dates.

**YouTube video:** in `profile.js`, set `youtube: 'https://youtube.com/...'`.

## 3. Publish with GitHub + Vercel

This creates a NEW repository, so it does not overwrite DrainMind or anything else.

1. On github.com click **New repository**. Name it e.g. `isha-portfolio`. Leave it empty.
2. In the terminal, inside this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/jawalkarisha-commits/isha-portfolio.git
git push -u origin main
```

3. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, choose `isha-portfolio`, and press **Deploy**. Vercel detects Vite automatically (`vercel.json` already handles page refreshes on sub-pages).
4. Every later `git push` updates the live site.

## 4. Structure

```
src/
  data/        all content
  components/  Layout, Pipeline, ProjectCase, etc.
  pages/       Home, About, Projects, LearningLab, Blogs, BlogPost, Connect
  styles/      global.css (colours are variables at the top)
public/        images, certificates, resume
```
