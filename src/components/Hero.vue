<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile, heroImages, marquee } from '../data/site.js'
import Icon from './Icon.vue'

/* Background slideshow */
const slide = ref(0)
let timer
onMounted(() => {
  timer = setInterval(() => {
    slide.value = (slide.value + 1) % heroImages.length
  }, 5000)
})
onUnmounted(() => clearInterval(timer))

/* Rotating role word */
const roleIndex = ref(0)
let roleTimer
onMounted(() => {
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % profile.roles.length
  }, 2600)
})
onUnmounted(() => clearInterval(roleTimer))

/* Live camera timecode HH:MM:SS:FF at 24fps — the "we're recording" feel */
const timecode = ref('00:00:00:00')
let frame = 0
let tcTimer
const pad = (n) => String(n).padStart(2, '0')
onMounted(() => {
  tcTimer = setInterval(() => {
    frame++
    const ff = frame % 24
    const totalSec = Math.floor(frame / 24)
    const ss = totalSec % 60
    const mm = Math.floor(totalSec / 60) % 60
    const hh = Math.floor(totalSec / 3600)
    timecode.value = `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`
  }, 1000 / 24)
})
onUnmounted(() => clearInterval(tcTimer))
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
      <div class="hero-scan"></div>
    </div>

    <!-- Cinematic letterbox bar -->
    <div class="bar bar-bottom"></div>

    <!-- Viewfinder corner brackets -->
    <span class="vf vf-tl"></span>
    <span class="vf vf-tr"></span>
    <span class="vf vf-bl"></span>
    <span class="vf vf-br"></span>

    <!-- Camera HUD -->
    <div class="hud hud-tl"><span class="rec-dot"></span> REC</div>
    <div class="hud hud-tr">{{ timecode }}</div>
    <div class="hud hud-bl">4K · 24 FPS</div>
    <div class="hud hud-br">ISO 800 · f/1.8</div>
    <div class="reticle" aria-hidden="true"><span></span></div>

    <div class="container hero-inner">
      <p class="eyebrow" v-reveal>{{ profile.tagline }}</p>

      <h1 class="hero-title">
        <span class="sr-only"
          >Oluwadara Onanuga — Creative Director, Cinematographer &amp; Video Editor. </span
        >
        <span aria-hidden="true" class="ht-lines">
          <span class="ht-line"><span class="ht-word">Stories that</span></span>
          <span class="ht-line"
            ><span class="ht-word text-gradient">move people.</span></span
          >
        </span>
      </h1>

      <div class="hero-role" v-reveal:up="{ delay: 260 }">
        <span class="hero-role-label">I work as a</span>
        <span class="hero-role-words">
          <Transition name="roll" mode="out-in">
            <span :key="roleIndex" class="hero-role-word">{{
              profile.roles[roleIndex]
            }}</span>
          </Transition>
        </span>
      </div>

      <p class="lead hero-lead" v-reveal:up="{ delay: 340 }">
        {{ profile.intro }}
      </p>

      <div class="hero-actions" v-reveal:up="{ delay: 420 }">
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
  /* Extra top padding keeps the content clear of the fixed menu */
  padding-block: clamp(170px, 22vh, 240px) 90px;
}

/* ---- Background ---- */
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.08);
  transition: opacity 1.6s var(--ease), transform 7s linear;
  filter: grayscale(0.35) contrast(1.05);
}
.hero-slide.active { opacity: 1; transform: scale(1); }
.hero-scrim {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      120% 90% at 22% 30%,
      rgba(11, 11, 14, 0.5),
      rgba(11, 11, 14, 0.9) 72%
    ),
    linear-gradient(180deg, rgba(11, 11, 14, 0.72), rgba(11, 11, 14, 0.62) 40%, var(--bg));
}
/* Fine scanlines for a monitor / footage feel */
.hero-scan {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.5;
  background: repeating-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.025) 0px,
    rgba(255, 255, 255, 0.025) 1px,
    transparent 2px,
    transparent 4px
  );
  mix-blend-mode: overlay;
}

/* ---- Letterbox bars ---- */
.bar {
  position: absolute;
  left: 0;
  right: 0;
  height: 46px;
  background: #000;
  z-index: 4;
}
.bar-bottom { bottom: 0; transform: translateY(100%); animation: barIn 1s var(--ease) 0.15s forwards; }
@keyframes barIn { to { transform: translateY(0); } }

/* ---- Viewfinder corner brackets ---- */
.vf {
  position: absolute;
  width: 34px;
  height: 34px;
  z-index: 5;
  border: 2px solid rgba(255, 255, 255, 0.55);
  opacity: 0;
  animation: vfIn 0.7s var(--ease) 0.9s forwards;
}
.vf-tl { top: 108px; left: 26px; border-right: 0; border-bottom: 0; }
.vf-tr { top: 108px; right: 26px; border-left: 0; border-bottom: 0; }
.vf-bl { bottom: 62px; left: 26px; border-right: 0; border-top: 0; }
.vf-br { bottom: 62px; right: 26px; border-left: 0; border-top: 0; }
@keyframes vfIn { to { opacity: 1; } }

/* ---- Camera HUD readouts ---- */
.hud {
  position: absolute;
  z-index: 6;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.72);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: vfIn 0.7s var(--ease) 1.1s forwards;
}
.hud-tl { top: 122px; left: 74px; color: #ff4d4d; }
.hud-tr { top: 122px; right: 74px; font-size: 0.8rem; color: #fff; }
.hud-bl { bottom: 76px; left: 74px; }
.hud-br { bottom: 76px; right: 74px; }
.rec-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #ff3b3b;
  box-shadow: 0 0 10px #ff3b3b;
  animation: blink 1.4s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0.15; } }

/* Focus reticle centred, subtle breathing */
.reticle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  transform: translate(-50%, -50%);
  z-index: 5;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 4px;
  opacity: 0;
  animation: vfIn 0.7s var(--ease) 1.2s forwards, breathe 4s ease-in-out 1.2s infinite;
}
.reticle span {
  position: absolute;
  inset: 50% auto auto 50%;
  width: 14px;
  height: 14px;
  transform: translate(-50%, -50%);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}
@keyframes breathe {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.12); }
}

/* ---- Content ---- */
.hero-inner { position: relative; z-index: 3; }

.hero-title {
  font-family: var(--font-cine);
  font-weight: 400;
  margin-bottom: 26px;
  letter-spacing: 0.01em;
}
.ht-lines { display: flex; flex-direction: column; }
.ht-line { overflow: hidden; display: block; line-height: 0.92; }
.ht-word {
  display: inline-block;
  font-size: clamp(3.6rem, 13vw, 11rem);
  text-transform: uppercase;
  transform: translateY(110%);
  animation: wordUp 1.1s var(--ease) forwards;
}
.ht-line:nth-child(1) .ht-word { animation-delay: 0.5s; }
.ht-line:nth-child(2) .ht-word { animation-delay: 0.7s; }
@keyframes wordUp { to { transform: translateY(0); } }

.hero-role {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}
.hero-role-label { color: var(--muted-2); font-size: 0.95rem; }
.hero-role-words { position: relative; display: inline-block; min-width: 280px; }
.hero-role-word {
  font-family: var(--font-cine);
  font-weight: 400;
  font-size: clamp(1.7rem, 3.4vw, 2.6rem);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--gold);
  display: inline-block;
}
.hero-lead { margin-bottom: 40px; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }

/* rotating word transition */
.roll-enter-active,
.roll-leave-active { transition: all 0.5s var(--ease); }
.roll-enter-from { opacity: 0; transform: translateY(18px) rotateX(-40deg); }
.roll-leave-to { opacity: 0; transform: translateY(-18px) rotateX(40deg); }

/* ---- Marquee ---- */
.hero-marquee {
  position: relative;
  z-index: 3;
  margin-top: clamp(36px, 6vw, 76px);
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
  font-family: var(--font-cine);
  font-weight: 400;
  font-size: 1.7rem;
  letter-spacing: 0.04em;
  color: var(--muted-2);
  display: inline-flex;
  align-items: center;
  gap: 44px;
  text-transform: uppercase;
}
.marquee-item i { color: var(--gold); font-style: normal; }
@keyframes marquee { to { transform: translateX(-50%); } }

.hero-scroll {
  position: absolute;
  bottom: 58px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.64rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.hero-scroll svg { animation: bob 1.8s ease-in-out infinite; }
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

@media (max-width: 700px) {
  .bar { height: 30px; }
  .vf { width: 24px; height: 24px; }
  .vf-tl, .vf-tr { top: 88px; }
  .vf-bl, .vf-br { bottom: 46px; }
  .hud-tl, .hud-tr { top: 100px; }
  .hud-bl, .hud-br { bottom: 58px; }
  .hud-tl { left: 58px; }
  .hud-tr { right: 58px; }
  .hud-bl { left: 58px; }
  .hud-br { right: 58px; font-size: 0.6rem; }
  .reticle { display: none; }
  .hero-role-words { min-width: 210px; }
  .hero-scroll { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .bar-top, .bar-bottom { transform: translateY(0); animation: none; }
  .vf, .hud, .reticle { opacity: 1; animation: none; }
  .ht-word { transform: none; animation: none; }
  .rec-dot, .reticle { animation: none; }
}
</style>
