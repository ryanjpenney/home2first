# Home2First Foundation — Website

Static website for the Home2First Foundation, enabling kids through the great game of
baseball. Built with HTML + Tailwind (via CDN); no build step required.

## Viewing locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8123
# then visit http://localhost:8123/index.html
```

## Maps & the Google Maps API key

The "Our home fields in East Phoenix" satellite map (homepage + `fields-map.html`) uses
the Google Maps JavaScript API. The browser API key is **referrer-restricted**, so every
domain it runs on must be whitelisted in the Google Cloud console
(**APIs & Services → Credentials → the key → Website restrictions**). Add:

- `https://<username>.github.io/*` — the live GitHub Pages site
- `http://localhost:8123/*` — local testing

Restriction changes take ~5 minutes to propagate. Until the live domain is whitelisted,
the map area shows Google's "Oops! Something went wrong" message instead of tiles.

## Photos

Image slots across the site auto-populate from the `photos/` drop folders — see
`PHOTO-GUIDE.md` for the exact filenames each slot expects.
