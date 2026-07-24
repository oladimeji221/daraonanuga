# Oluwadara Onanuga — Portfolio

A cinematic, single-page portfolio for **Oluwadara Onanuga** — Creative Director & Visual
Storyteller. Built with **Vue 3 + Vite**.

## Run it

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:5173
npm run build    # build for production → dist/
npm run preview  # preview the production build
```

The build in `dist/` is fully static (relative paths), so you can drop it straight into
XAMPP `htdocs`, Netlify, Vercel, GitHub Pages, or any web host.

## Where to edit content

Almost everything lives in **`src/data/site.js`** — name, bio, contact details, services,
skills, experience, the photo grid and the video list. Change copy there and the whole
site updates.

## Adding the videos

Open `src/data/site.js` and find the `videos` array. Each entry currently looks like:

```js
{
  title: 'Showreel 2025',
  category: 'Cinematography',
  poster: 'images/full/dara-04.jpg',
  type: 'placeholder',   // <- shows the "Coming soon" badge
  src: ''
}
```

To make a card playable, set the `type` and `src`:

- **Uploaded file:** put the `.mp4` in `public/videos/`, then
  `type: 'file', src: 'videos/showreel.mp4'`
- **YouTube / Vimeo:** `type: 'embed', src: 'https://www.youtube.com/embed/XXXXXXXX'`

(You can also swap `poster` for a nicer still frame.) Once `type` is no longer
`'placeholder'`, the card becomes clickable — wire the player in
`src/components/VideoBank.vue` to open in the lightbox or an embedded frame.

## Photos

Your images are optimised into `public/images/full` (large) and `public/images/thumb`
(grid). To add or replace, drop new files there and reference them in `site.js`.

## Structure

```
src/
  App.vue              # layout, scroll progress, glow cursor, lightbox wiring
  data/site.js         # ← all content
  directives/reveal.js # scroll-reveal animation
  styles/global.css    # design system (colours, type, buttons)
  components/          # Hero, About, Expertise, Portfolio, VideoBank, Experience, Contact…
```
