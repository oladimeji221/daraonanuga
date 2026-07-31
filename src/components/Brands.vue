<script setup>
import { ref } from 'vue'
import { brands } from '../data/site.js'

// Track which logos failed to load so we can show the name instead.
// (Logos are being added later into public/images/brand/.)
const missing = ref({})
function onError(slug) {
  missing.value = { ...missing.value, [slug]: true }
}
</script>

<template>
  <section id="brands" class="section brands">
    <div class="container">
      <div class="head">
        <p class="eyebrow" v-reveal>Trusted by</p>
        <h2 class="section-title" v-reveal:up>
          <span class="text-gradient">Brands</span>
        </h2>
        <p class="lead" v-reveal:up="{ delay: 100 }">
          Airlines, agencies, festivals and tourism boards I've directed, shot and
          edited for across four countries.
        </p>
      </div>

      <div class="bgrid">
        <div
          v-for="(b, i) in brands"
          :key="b.slug"
          class="bcard"
          v-reveal:up="{ delay: (i % 5) * 70 }"
        >
          <img
            v-if="!missing[b.slug]"
            class="blogo"
            :src="b.logo"
            :alt="b.name"
            loading="lazy"
            @error="onError(b.slug)"
          />
          <span v-else class="bname">{{ b.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { max-width: 640px; margin-bottom: clamp(38px, 5vw, 60px); }
.bgrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}
.bcard {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  padding: 12px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  transition: border-color 0.4s var(--ease), transform 0.4s var(--ease),
    background 0.4s var(--ease);
}
.bcard:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.02);
}
.blogo {
  width: 100%;
  height: 100%;
  max-height: 100px;
  object-fit: contain;
  filter: none;
  opacity: 1;
  transition: filter 0.4s var(--ease), opacity 0.4s var(--ease);
}
.bcard:hover .blogo {
  filter: none;
  opacity: 1;
}
.bname {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.3;
  text-align: center;
  color: var(--muted);
  transition: color 0.4s var(--ease);
}
.bcard:hover .bname { color: var(--text); }

@media (max-width: 900px) {
  .bgrid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .bgrid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .bcard { padding: 8px; }
  .blogo { max-height: 84px; }
  .bname { font-size: 0.82rem; }
}
</style>
