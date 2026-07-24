<script setup>
import { profile, socials } from '../data/site.js'

const year = new Date().getFullYear()

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="container footer-top">
      <a href="#home" class="foot-brand" @click.prevent="toTop">
        <img class="foot-logo" :src="'images/logo.png'" alt="Oluwadara Onanuga" />
        <span>Oluwadara Onanuga</span>
      </a>
      <nav class="foot-links">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.href"
          target="_blank"
          rel="noopener"
          >{{ s.name }}</a
        >
      </nav>
    </div>
    <hr class="divider" />
    <div class="container footer-bottom">
      <p>© {{ year }} {{ profile.name }}. Crafted frame by frame.</p>
      <button class="to-top" @click="toTop">Back to top ↑</button>
    </div>
  </footer>
</template>

<style scoped>
.footer { padding: 60px 0 40px; }
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.foot-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
}
.foot-logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: invert(1);
}
.foot-links { display: flex; gap: 22px; flex-wrap: wrap; }
.foot-links a { color: var(--muted); font-size: 0.9rem; transition: color 0.3s var(--ease); }
.foot-links a:hover { color: var(--gold); }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
  color: var(--muted-2);
  font-size: 0.86rem;
}
.to-top {
  background: none;
  border: 0;
  color: var(--muted);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.86rem;
  transition: color 0.3s var(--ease);
}
.to-top:hover { color: var(--gold); }
</style>
