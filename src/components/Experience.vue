<script setup>
import { experience, courses } from '../data/site.js'
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container exp-grid">
      <!-- Timeline -->
      <div class="exp-main">
        <p class="eyebrow" v-reveal>The journey</p>
        <h2 class="section-title" v-reveal:up>
          Selected <span class="text-gradient">experience</span>
        </h2>

        <div class="timeline">
          <div
            v-for="(e, i) in experience"
            :key="i"
            class="tl-item"
            v-reveal:up="{ delay: i * 60 }"
          >
            <span class="tl-dot"></span>
            <div class="tl-head">
              <h3 class="tl-role">{{ e.role }}</h3>
              <span class="tl-period">{{ e.period }}</span>
            </div>
            <span class="tl-org">{{ e.org }}</span>
            <p class="tl-detail">{{ e.detail }}</p>
          </div>
        </div>
      </div>

      <!-- Courses / training -->
      <aside class="exp-side" v-reveal:right>
        <h3 class="side-title">Training</h3>
        <p class="side-sub">Storytelling & film education</p>
        <ul class="courses">
          <li v-for="(c, i) in courses" :key="i" class="course">
            <span class="course-year">{{ c.year }}</span>
            <div>
              <span class="course-title">{{ c.title }}</span>
              <span class="course-org">{{ c.org }}</span>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.exp-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;
}

.timeline {
  margin-top: 40px;
  position: relative;
  padding-left: 26px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 6px;
  bottom: 6px;
  width: 1px;
  background: linear-gradient(180deg, var(--gold), var(--line));
}
.tl-item { position: relative; padding-bottom: 34px; }
.tl-item:last-child { padding-bottom: 0; }
.tl-dot {
  position: absolute;
  left: -26px;
  top: 6px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.15);
}
.tl-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.tl-role { font-size: 1.24rem; }
.tl-period {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: var(--gold);
  white-space: nowrap;
}
.tl-org {
  display: block;
  font-size: 0.94rem;
  color: var(--muted);
  margin: 4px 0 10px;
}
.tl-detail { color: var(--muted-2); font-size: 0.94rem; max-width: 54ch; }

/* Side panel */
.exp-side {
  position: sticky;
  top: 100px;
  padding: 34px 30px;
  background: linear-gradient(180deg, var(--surface), var(--bg-2));
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.side-title { font-size: 1.5rem; }
.side-sub { color: var(--muted-2); font-size: 0.86rem; margin-bottom: 22px; }
.courses { list-style: none; display: flex; flex-direction: column; gap: 4px; }
.course {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid var(--line);
}
.course:first-child { border-top: 0; }
.course-year { font-family: var(--font-display); font-weight: 700; color: var(--gold); font-size: 0.9rem; padding-top: 2px; }
.course-title { display: block; font-weight: 400; }
.course-org { display: block; font-size: 0.84rem; color: var(--muted-2); }

@media (max-width: 860px) {
  .exp-grid { grid-template-columns: 1fr; }
  .exp-side { position: static; }
}
</style>
