<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/site.js'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Video Bank', href: '#videos' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

const scrolled = ref(false)
const open = ref(false)
const active = ref('#home')

function onScroll() {
  scrolled.value = window.scrollY > 40
  // Determine active section
  let current = '#home'
  for (const l of links) {
    const el = document.querySelector(l.href)
    if (el && el.getBoundingClientRect().top <= 140) current = l.href
  }
  active.value = current
}

function go(href) {
  open.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#home" class="brand" @click.prevent="go('#home')">
        <img class="brand-logo" :src="'images/logo.png'" alt="Oluwadara Onanuga" />
        <span class="brand-text">
          <span class="brand-name">Oluwadara<span class="text-gold">.</span></span>
          <em>visual storyteller</em>
        </span>
      </a>

      <nav class="nav-links" :class="{ open }">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="nav-link"
          :class="{ active: active === l.href }"
          @click.prevent="go(l.href)"
          >{{ l.label }}</a
        >
        <a class="btn btn-gold nav-cta" :href="`mailto:${profile.email}`">Let's talk</a>
      </nav>

      <button
        class="burger"
        :class="{ open }"
        @click="open = !open"
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  padding: 18px 0;
  transition: background 0.4s var(--ease), padding 0.4s var(--ease),
    border-color 0.4s var(--ease), backdrop-filter 0.4s var(--ease);
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  padding: 10px 0;
  background: rgba(11, 11, 14, 0.72);
  backdrop-filter: blur(16px) saturate(140%);
  border-bottom-color: var(--line);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-logo {
  width: 46px;
  height: 46px;
  object-fit: contain;
  /* Logo art is black line-work on transparent — invert to white for the dark UI */
  filter: invert(1);
  transition: transform 0.4s var(--ease);
}
.brand:hover .brand-logo { transform: scale(1.06) rotate(-3deg); }
.brand-text {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.02rem;
  line-height: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.brand-text em {
  font-family: var(--font-body);
  font-style: normal;
  font-weight: 400;
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav-link {
  position: relative;
  padding: 8px 14px;
  font-size: 0.9rem;
  color: var(--muted);
  border-radius: 100px;
  transition: color 0.3s var(--ease);
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 2px;
  height: 1.5px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease);
}
.nav-link:hover { color: var(--text); }
.nav-link.active { color: var(--gold); }
.nav-link.active::after { transform: scaleX(1); }
.nav-cta {
  margin-left: 14px;
  padding: 11px 22px;
  font-size: 0.85rem;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 8px;
  z-index: 101;
}
.burger span {
  width: 26px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.35s var(--ease), opacity 0.35s var(--ease);
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 900px) {
  .burger { display: flex; }
  .nav-links {
    position: fixed;
    inset: 0 0 0 auto;
    width: min(82vw, 340px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    padding: 40px 34px;
    background: linear-gradient(180deg, var(--surface), var(--bg));
    border-left: 1px solid var(--line);
    transform: translateX(100%);
    transition: transform 0.5s var(--ease);
  }
  .nav-links.open { transform: none; }
  .nav-link { font-size: 1.4rem; padding: 10px 0; }
  .nav-link::after { left: 0; right: auto; width: 0; }
  .nav-cta { margin: 20px 0 0; }
}
</style>
