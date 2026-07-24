<script setup>
import { videos } from '../data/site.js'
import Icon from './Icon.vue'

const emit = defineEmits(['play'])

function onClick(v) {
  if (v.type !== 'placeholder' && v.src) emit('play', v)
}
</script>

<template>
  <section id="videos" class="section videobank">
    <div class="container">
      <div class="head">
        <p class="eyebrow" v-reveal>Motion</p>
        <h2 class="section-title" v-reveal:up>
          The <span class="text-gradient">Video Bank</span>
        </h2>
        <p class="lead" v-reveal:up="{ delay: 100 }">
          A collection of films, trailers and documentaries — storytelling built to stir
          emotion. Full reels landing here soon.
        </p>
      </div>

      <div class="vgrid">
        <article
          v-for="(v, i) in videos"
          :key="v.title"
          class="vcard"
          :class="{ soon: v.type === 'placeholder' }"
          @click="onClick(v)"
          v-reveal:up="{ delay: (i % 3) * 90 }"
        >
          <div class="vposter" :style="{ backgroundImage: `url(${v.poster})` }">
            <span class="vplay"><Icon name="play" :size="26" /></span>
            <span v-if="v.type === 'placeholder'" class="vsoon">Coming soon</span>
          </div>
          <div class="vmeta">
            <span class="vcat">{{ v.category }}</span>
            <h3 class="vtitle">{{ v.title }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { max-width: 640px; margin-bottom: clamp(38px, 5vw, 60px); }
.vgrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.vcard { cursor: pointer; }
.vcard.soon { cursor: default; }
.vposter {
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-lg);
  background-size: cover;
  background-position: center;
  border: 1px solid var(--line);
  overflow: hidden;
  display: grid;
  place-items: center;
}
.vposter::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 11, 14, 0.15), rgba(11, 11, 14, 0.7));
  transition: background 0.5s var(--ease);
}
.vcard:hover .vposter::after { background: rgba(11, 11, 14, 0.35); }
.vplay {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  color: #0b0b0e;
  background: linear-gradient(120deg, var(--gold-soft), var(--gold));
  box-shadow: 0 12px 34px -10px rgba(255, 255, 255, 0.28);
  transition: transform 0.5s var(--ease);
}
.vplay::before {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  animation: pulse 2.4s ease-out infinite;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
.vcard:hover .vplay { transform: scale(1.08); }
.vsoon {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 100px;
  background: rgba(11, 11, 14, 0.6);
  border: 1px solid var(--line);
  color: var(--muted);
  backdrop-filter: blur(6px);
}
.vmeta { padding: 18px 4px 0; }
.vcat {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}
.vtitle { font-size: 1.2rem; margin-top: 6px; }

@media (max-width: 900px) { .vgrid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .vgrid { grid-template-columns: 1fr; } }
</style>
