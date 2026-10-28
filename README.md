# PDI PRO website

Modern, responsive Next.js website for PDI PRO, based in Udaipur, Rajasthan.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Before production
1. Confirm the canonical domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `public/robots.txt`. The project currently uses `https://www.pdiproudaipur.in` as a suggested domain; replace it with your real domain if different.
2. Confirm the Google reviews link and add verified, permissioned customer quotes only. The supplied Google share link could not be fetched by the web preview, so this site links to it rather than fabricating reviews.
3. Confirm the business address and service availability details.
4. Deploy by pushing to GitHub and importing the repository into Vercel.

The enquiry form opens WhatsApp with the entered details pre-filled; it does not store submissions in a database.
# pdi-pro-website
