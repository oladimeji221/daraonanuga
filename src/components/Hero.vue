<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile, heroImages, marquee } from '../data/site.js'
import Icon from './Icon.vue'

const slide = ref(0)
let timer
onMounted(() => {
  timer = setInterval(() => {
    slide.value = (slide.value + 1) % heroImages.length
  }, 5000)
})
onUnmounted(() => clearInterval(timer))

// Rotating role word
const roleIndex = ref(0)
let roleTimer
onMounted(() => {
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % profile.roles.length
  }, 2600)
})
onUnmounted(() => clearInterval(roleTimer))
</script>

<template>
  <section id="home" class="hero">
    <!-- Background slideshow -->
    <div class="hero-bg">
      <div
        v-for="(img, i) in heroImages"
        :key="img"
        class="hero-slide"
        :class="{ active: slide === i }"
        :style="{ backgroundImage: `url(${img})` }"
      />
      <div class="hero-scrim"></div>
    </div>

    <div class="container hero-inner">
      <p class="eyebrow" v-reveal>{{ profile.tagline }}</p>

      <h1 class="hero-title" v-reveal:up="{ delay: 80 }">
        <span class="sr-only"
          >Oluwadara Onanuga — Creative Director, Cinematographer &amp; Video Editor. </span
        >
        <span aria-hidden="true">Stories that<br /><span class="text-gradient">move people.</span></span>
      </h1>

      <div class="hero-role" v-reveal:up="{ delay: 180 }">
        <span class="hero-role-label">I work as a</span>
        <span class="hero-role-words">
          <Transition name="roll" mode="out-in">
            <span :key="roleIndex" class="hero-role-word">{{
              profile.roles[roleIndex]
            }}</span>
          </Transition>
        </span>
      </div>

      <p class="lead hero-lead" v-reveal:up="{ delay: 260 }">
        {{ profile.intro }}
      </p>

      <div class="hero-actions" v-reveal:up="{ delay: 340 }">
        <a href="#work" class="btn btn-gold" @click.prevent="$emit('nav', '#work')">
          View my work <Icon name="arrow" :size="18" />
        </a>
        <a href="#videos" class="btn btn-ghost" @click.prevent="$emit('nav', '#videos')">
          <Icon name="play" :size="18" /> Watch reel
        </a>
      </div>
    </div>

    <!-- Marquee strip -->
    <div class="hero-marquee">
      <div class="marquee-track">
        <span v-for="(w, i) in [...marquee, ...marquee]" :key="i" class="marquee-item">
          {{ w }} <i>✦</i>
        </span>
      </div>
    </div>

    <a href="#about" class="hero-scroll" @click.prevent="$emit('nav', '#about')">
      <span>Scroll</span>
      <Icon name="arrowDown" :size="18" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-block: 120px 90px;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.08);
  transition: opacity 1.6s var(--ease), transform 7s linear;
  filter: grayscale(0.25) contrast(1.02);
}
.hero-slide.active { opacity: 1; transform: scale(1); }
.hero-scrim {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      120% 90% at 20% 20%,
      rgba(11, 11, 14, 0.55),
      rgba(11, 11, 14, 0.9) 70%
    ),
    linear-gradient(180deg, rgba(11, 11, 14, 0.7), rgba(11, 11, 14, 0.6) 40%, var(--bg));
}

.hero-inner {
  position: relative;
  z-index: 2;
}
.hero-title {
  font-size: clamp(3rem, 9.5vw, 7.6rem);
  font-weight: 800;
  margin-bottom: 26px;
}
.hero-role {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}
.hero-role-label {
  color: var(--muted-2);
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}
.hero-role-words {
  position: relative;
  display: inline-block;
  min-width: 260px;
}
.hero-role-word {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  color: var(--gold);
  display: inline-block;
}
.hero-lead { margin-bottom: 40px; }
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* rotating word transition */
.roll-enter-active,
.roll-leave-active { transition: all 0.5s var(--ease); }
.roll-enter-from { opacity: 0; transform: translateY(18px) rotateX(-40deg); }
.roll-leave-to { opacity: 0; transform: translateY(-18px) rotateX(40deg); }

/* Marquee */
.hero-marquee {
  position: relative;
  z-index: 2;
  margin-top: clamp(40px, 7vw, 90px);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 16px 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.marquee-track {
  display: inline-flex;
  gap: 44px;
  white-space: nowrap;
  animation: marquee 26s linear infinite;
}
.marquee-item {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.01em;
  color: var(--muted-2);
  display: inline-flex;
  align-items: center;
  gap: 44px;
  text-transform: uppercase;
}
.marquee-item i { color: var(--gold); font-style: normal; }
@keyframes marquee {
  to { transform: translateX(-50%); }
}

.hero-scroll {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.hero-scroll svg { animation: bob 1.8s ease-in-out infinite; }
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

@media (max-width: 600px) {
  .hero-role-words { min-width: 200px; }
  .hero-scroll { display: none; }
}
</style>
