<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
  index: { type: Number, default: 0 }
})
const emit = defineEmits(['close', 'update:index'])

const current = computed(() => props.items[props.index] || {})

function next() {
  emit('update:index', (props.index + 1) % props.items.length)
}
function prev() {
  emit('update:index', (props.index - 1 + props.items.length) % props.items.length)
}
function onKey(e) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}
onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div class="lb" @click.self="emit('close')">
      <button class="lb-close" @click="emit('close')" aria-label="Close">✕</button>
      <button class="lb-nav prev" @click="prev" aria-label="Previous">
        <Icon name="arrow" :size="26" style="transform: rotate(180deg)" />
      </button>

      <figure class="lb-figure">
        <Transition name="fade" mode="out-in">
          <img :key="current.src" :src="current.src" :alt="current.title" />
        </Transition>
        <figcaption>
          <span class="lb-cat">{{ current.cat }}</span>
          <span class="lb-title">{{ current.title }}</span>
          <span class="lb-count">{{ index + 1 }} / {{ items.length }}</span>
        </figcaption>
      </figure>

      <button class="lb-nav next" @click="next" aria-label="Next">
        <Icon name="arrow" :size="26" />
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.lb {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(6, 6, 8, 0.94);
  backdrop-filter: blur(10px);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 40px;
  animation: lbin 0.35s var(--ease);
}
@keyframes lbin { from { opacity: 0; } to { opacity: 1; } }
.lb-figure {
  max-width: 100%;
  max-height: 86vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.lb-figure img {
  max-width: 100%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.9);
}
figcaption {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--muted);
}
.lb-cat { color: var(--gold); font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; }
.lb-title { font-family: var(--font-display); font-weight: 700; color: var(--text); }
.lb-count { font-size: 0.82rem; color: var(--muted-2); }
.lb-close {
  position: absolute;
  top: 22px;
  right: 26px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s var(--ease);
}
.lb-close:hover { background: var(--gold); color: #000; border-color: transparent; }
.lb-nav {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.3s var(--ease);
  flex: none;
}
.lb-nav:hover { background: var(--gold); color: #000; border-color: transparent; }

.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s var(--ease); }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

@media (max-width: 700px) {
  .lb { padding: 16px; gap: 6px; }
  .lb-nav { width: 44px; height: 44px; }
  figcaption { flex-direction: column; gap: 4px; text-align: center; }
}
</style>
