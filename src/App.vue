<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Expertise from './components/Expertise.vue'
import Portfolio from './components/Portfolio.vue'
import Brands from './components/Brands.vue'
import VideoBank from './components/VideoBank.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/SiteFooter.vue'
import Lightbox from './components/Lightbox.vue'

/* ---- Lightbox state ---- */
const lb = ref({ open: false, items: [], index: 0 })
function openLightbox({ items, index }) {
  lb.value = { open: true, items, index }
}

/* ---- Programmatic nav (smooth scroll from hero buttons) ---- */
function nav(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* ---- Scroll progress bar ---- */
const progress = ref(0)
function onScroll() {
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? (h.scrollTop / max) * 100 : 0
}

/* ---- Glow cursor (desktop, pointer devices only) ---- */
const cursor = ref(null)
const hasPointer =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches
function onMove(e) {
  if (cursor.value) {
    cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  if (hasPointer) window.addEventListener('mousemove', onMove, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <div class="scroll-progress" :style="{ transform: `scaleX(${progress / 100})` }"></div>
  <div v-if="hasPointer" ref="cursor" class="glow-cursor" aria-hidden="true"></div>

  <NavBar />

  <main>
    <Hero @nav="nav" />
    <About />
    <Expertise />
    <Portfolio @open="openLightbox" />
    <Brands />
    <VideoBank />
    <Experience />
    <Contact />
  </main>

  <SiteFooter />

  <Lightbox
    v-if="lb.open"
    :items="lb.items"
    :index="lb.index"
    @update:index="(i) => (lb.index = i)"
    @close="lb.open = false"
  />
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 150;
  background: linear-gradient(90deg, var(--gold-soft), var(--gold), var(--gold-deep));
  transform-origin: left;
  transform: scaleX(0);
}
.glow-cursor {
  position: fixed;
  top: -160px;
  left: -160px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 60%);
  margin: -160px 0 0 -160px;
  transition: transform 0.15s ease-out;
  mix-blend-mode: screen;
}
</style>
