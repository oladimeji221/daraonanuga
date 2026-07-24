<script setup>
import { ref, computed } from 'vue'
import { photos } from '../data/site.js'
import Icon from './Icon.vue'

const emit = defineEmits(['open'])

const cats = ['All', ...new Set(photos.map((p) => p.cat))]
const active = ref('All')

const filtered = computed(() =>
  active.value === 'All' ? photos : photos.filter((p) => p.cat === active.value)
)

function open(photo) {
  const list = filtered.value
  emit('open', {
    items: list.map((p) => ({ src: p.full, title: p.title, cat: p.cat })),
    index: list.indexOf(photo)
  })
}
</script>

<template>
  <section id="work" class="section work">
    <div class="container">
      <div class="head">
        <div>
          <p class="eyebrow" v-reveal>Selected work</p>
          <h2 class="section-title" v-reveal:up>
            The <span class="text-gradient">Portfolio</span>
          </h2>
        </div>
        <p class="lead" v-reveal:up="{ delay: 100 }">
          On-set moments, events and portraits — a look at the frames behind the films.
        </p>
      </div>

      <div class="filters" v-reveal>
        <button
          v-for="c in cats"
          :key="c"
          class="filter"
          :class="{ active: active === c }"
          @click="active = c"
        >
          {{ c }}
        </button>
      </div>

      <div class="masonry">
        <TransitionGroup name="tile">
          <figure
            v-for="(p, i) in filtered"
            :key="p.file"
            class="tile"
            :class="p.size"
            @click="open(p)"
            v-reveal:zoom="{ delay: (i % 6) * 60 }"
          >
            <img :src="p.thumb" :alt="p.title" loading="lazy" />
            <figcaption>
              <div>
                <span class="tile-cat">{{ p.cat }}</span>
                <span class="tile-title">{{ p.title }}</span>
              </div>
              <span class="tile-icon"><Icon name="arrow" :size="18" /></span>
            </figcaption>
          </figure>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 34px;
}
.head .lead { max-width: 42ch; }

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 34px;
}
.filter {
  padding: 9px 20px;
  border-radius: 100px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.35s var(--ease);
}
.filter:hover { color: var(--text); border-color: var(--muted-2); }
.filter.active {
  background: linear-gradient(120deg, var(--gold-soft), var(--gold));
  color: #0b0b0e;
  border-color: transparent;
  font-weight: 500;
}

/* Masonry via CSS columns keeps varied heights natural */
.masonry {
  columns: 3;
  column-gap: 18px;
}
.tile {
  position: relative;
  break-inside: avoid;
  margin-bottom: 18px;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--line);
}
.tile img {
  width: 100%;
  display: block;
  transition: transform 0.9s var(--ease), filter 0.6s var(--ease);
  filter: grayscale(0.15);
}
.tile:hover img { transform: scale(1.07); filter: grayscale(0); }
.tile figcaption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 22px 18px 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  background: linear-gradient(0deg, rgba(6, 6, 8, 0.9), transparent);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s var(--ease), transform 0.45s var(--ease);
}
.tile:hover figcaption { opacity: 1; transform: none; }
.tile-cat {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 3px;
}
.tile-title { font-family: var(--font-display); font-weight: 700; font-size: 1.12rem; }
.tile-icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--gold);
  color: #0b0b0e;
  flex: none;
  transform: rotate(-45deg);
}

/* Transition when filtering */
.tile-enter-active,
.tile-leave-active { transition: all 0.5s var(--ease); }
.tile-enter-from,
.tile-leave-to { opacity: 0; transform: scale(0.9); }
.tile-leave-active { position: absolute; }

@media (max-width: 900px) { .masonry { columns: 2; } }
@media (max-width: 560px) { .masonry { columns: 1; } }
</style>
