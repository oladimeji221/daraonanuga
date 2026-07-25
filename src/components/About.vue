<script setup>
import { profile, stats, aboutImages } from '../data/site.js'
import Icon from './Icon.vue'
</script>

<template>
  <section id="about" class="section about">
    <div class="container about-grid">
      <!-- Images -->
      <div class="about-media" v-reveal:left>
        <figure class="about-img-primary">
          <img :src="aboutImages.primary" alt="Oluwadara Onanuga at work" loading="lazy" />
        </figure>
        <!-- <figure class="about-img-secondary">
          <img :src="aboutImages.secondary" alt="On set" loading="lazy" />
        </figure> -->
        <div class="about-badge">
          <span class="about-badge-num">6+</span>
          <span class="about-badge-txt">years<br />in frame</span>
        </div>
      </div>

      <!-- Copy -->
      <div class="about-copy">
        <p class="eyebrow" v-reveal>About me</p>
        <h2 class="section-title" v-reveal:up>
          I turn moments into<br /><span class="text-gradient">cinematic memory.</span>
        </h2>
        <p class="lead" v-reveal:up="{ delay: 120 }">{{ profile.about }}</p>

        <div class="about-sign" v-reveal:up="{ delay: 200 }">
          <span class="sign-name">{{ profile.name }}</span>
          <span class="sign-role">{{ profile.tagline }}</span>
        </div>

        <a
          class="btn btn-ghost about-cv"
          :href="profile.cv"
          target="_blank"
          rel="noopener"
          v-reveal:up="{ delay: 260 }"
        >
          <Icon name="arrowDown" :size="18" /> Download full portfolio
        </a>
      </div>
    </div>

    <!-- Stats -->
    <div class="container">
      <div class="stats" v-reveal:up>
        <div class="stat" v-for="(s, i) in stats" :key="i">
          <span class="stat-value text-gradient">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: center;
}

/* Media collage */
.about-media {
  position: relative;
  padding-bottom: 40px;
}
.about-img-primary {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--line);
  aspect-ratio: 4 / 5;
}
.about-img-primary img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--ease);
}
.about-media:hover .about-img-primary img { transform: scale(1.05); }
.about-img-secondary {
  position: absolute;
  right: -18px;
  bottom: 0;
  width: 46%;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius);
  overflow: hidden;
  border: 4px solid var(--bg);
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.9);
}
.about-img-secondary img { width: 100%; height: 100%; object-fit: cover; }
.about-badge {
  position: absolute;
  top: 22px;
  left: -18px;
  background: linear-gradient(120deg, var(--gold-soft), var(--gold));
  color: #0b0b0e;
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 18px 40px -18px rgba(255, 255, 255, 0.3);
}
.about-badge-num { font-family: var(--font-display); font-weight: 800; font-size: 1.9rem; }
.about-badge-txt { font-size: 0.66rem; line-height: 1.2; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; }

.about-sign { margin: 32px 0 28px; display: flex; flex-direction: column; }
.sign-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--gold);
}
.sign-role { font-size: 0.82rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted-2); }

/* Stats */
.stats {
  margin-top: clamp(56px, 8vw, 100px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 42px;
  background: linear-gradient(180deg, var(--surface), var(--bg-2));
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.stat { display: flex; flex-direction: column; gap: 6px; }
.stat-value { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3rem); line-height: 1; }
.stat-label { font-size: 0.86rem; color: var(--muted); }

@media (max-width: 860px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-media { max-width: 460px; margin-inline: auto; }
  .stats { grid-template-columns: repeat(2, 1fr); padding: 30px; }
}
</style>
