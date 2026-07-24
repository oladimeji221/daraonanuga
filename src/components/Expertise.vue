<script setup>
import { services, skills } from '../data/site.js'
import Icon from './Icon.vue'
</script>

<template>
  <section id="services" class="section expertise">
    <div class="container">
      <div class="head">
        <p class="eyebrow" v-reveal>What I do</p>
        <h2 class="section-title" v-reveal:up>
          A full-stack <span class="text-gradient">visual craft</span>
        </h2>
        <p class="lead" v-reveal:up="{ delay: 100 }">
          From the first frame to the final grade — I direct, shoot, edit and design so
          your story lands with feeling.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          class="card"
          v-reveal:up="{ delay: i * 70 }"
        >
          <span class="card-icon"><Icon :name="s.icon" :size="26" /></span>
          <h3 class="card-title">{{ s.title }}</h3>
          <p class="card-text">{{ s.text }}</p>
          <span class="card-index">0{{ i + 1 }}</span>
        </article>
      </div>
    </div>

    <!-- Skills marquee -->
    <div class="skills-marquee" v-reveal>
      <div class="skills-track">
        <span v-for="(s, i) in [...skills, ...skills]" :key="i" class="skill-chip">{{ s }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { max-width: 640px; margin-bottom: clamp(40px, 6vw, 70px); }
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.card {
  position: relative;
  padding: 34px 30px 30px;
  background: linear-gradient(180deg, var(--surface), var(--bg-2));
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform 0.5s var(--ease), border-color 0.5s var(--ease),
    background 0.5s var(--ease);
}
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 0 0, rgba(255, 255, 255, 0.12), transparent 55%);
  opacity: 0;
  transition: opacity 0.5s var(--ease);
}
.card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.4);
}
.card:hover::before { opacity: 1; }
.card-icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 15px;
  color: var(--gold);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin-bottom: 22px;
  transition: transform 0.5s var(--ease);
}
.card:hover .card-icon { transform: rotate(-8deg) scale(1.06); }
.card-title { font-size: 1.3rem; margin-bottom: 10px; }
.card-text { color: var(--muted); font-size: 0.96rem; position: relative; }
.card-index {
  position: absolute;
  top: 22px;
  right: 26px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.06);
}

.skills-marquee {
  margin-top: clamp(56px, 8vw, 90px);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 20px 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}
.skills-track {
  display: inline-flex;
  gap: 16px;
  white-space: nowrap;
  animation: skmarq 32s linear infinite;
}
.skills-marquee:hover .skills-track { animation-play-state: paused; }
.skill-chip {
  flex: none;
  padding: 10px 22px;
  border: 1px solid var(--line);
  border-radius: 100px;
  font-size: 0.9rem;
  color: var(--muted);
}
@keyframes skmarq { to { transform: translateX(-50%); } }

@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
