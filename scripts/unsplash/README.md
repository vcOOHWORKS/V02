# Unsplash photo scripts

Used to choose the website's stock photos. The live site does not need the API key:
photos are stored in `src/content/unsplash-photos.json` and hotlinked from Unsplash's CDN.

1. Put your Access Key in `.env.local` (git-ignored): `UNSPLASH_ACCESS_KEY=...`
2. Search and build contact sheets (one request per slot; demo keys allow 50/hour):
   `set -a && . ./.env.local && set +a && node scripts/unsplash/search.mjs /tmp/unsplash`
   Open the `sheet*.html` files to review candidates.
3. Edit the `picks` in `select.mjs` (slot → candidate number, crop position, alt text), then:
   `node scripts/unsplash/select.mjs /tmp/unsplash src/content/unsplash-photos.json`
   This also notifies Unsplash of each use, as their API guidelines require.

Rules: credit every photographer (the `/credits` page does this automatically), never use
stock photos as before/after results or as portraits of named doctors.
