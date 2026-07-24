<script setup>
import { ref } from 'vue'
import { profile, socials } from '../data/site.js'
import Icon from './Icon.vue'

const form = ref({ name: '', email: '', subject: 'Project', message: '' })
const sent = ref(false)

function submit() {
  // No backend here — compose an email with the details so it works anywhere.
  const body = `Name: ${form.value.name}%0D%0AEmail: ${form.value.email}%0D%0A%0D%0A${form.value.message}`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
    form.value.subject + ' — via portfolio'
  )}&body=${body}`
  sent.value = true
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-shell">
        <!-- Left: invite -->
        <div class="contact-info">
          <p class="eyebrow" v-reveal>Get in touch</p>
          <h2 class="contact-title" v-reveal:up>
            Let's make<br /><span class="text-gradient">something cinematic.</span>
          </h2>
          <p class="lead" v-reveal:up="{ delay: 100 }">
            Have a film, event or campaign in mind? Tell me about it — I reply to every
            message.
          </p>

          <ul class="contact-list" v-reveal:up="{ delay: 180 }">
            <li>
              <span class="ci"><Icon name="mail" :size="20" /></span>
              <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            </li>
            <li>
              <span class="ci"><Icon name="phone" :size="20" /></span>
              <a :href="`tel:${profile.phone.replace(/\s/g, '')}`">{{ profile.phone }}</a>
            </li>
            <li>
              <span class="ci"><Icon name="pin" :size="20" /></span>
              <span>{{ profile.location }}</span>
            </li>
          </ul>

          <nav class="socials" v-reveal:up="{ delay: 240 }">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.href"
              class="social"
              :aria-label="s.name"
              target="_blank"
              rel="noopener"
            >
              <Icon :name="s.icon" :size="18" />
            </a>
          </nav>
        </div>

        <!-- Right: form -->
        <form class="contact-form" @submit.prevent="submit" v-reveal:right>
          <div class="field">
            <label>Your name</label>
            <input v-model="form.name" type="text" required placeholder="Jane Doe" />
          </div>
          <div class="field">
            <label>Email</label>
            <input v-model="form.email" type="email" required placeholder="jane@email.com" />
          </div>
          <div class="field">
            <label>Subject</label>
            <select v-model="form.subject">
              <option>Project</option>
              <option>Event coverage</option>
              <option>Collaboration</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field">
            <label>Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              required
              placeholder="Tell me about your vision…"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-gold form-btn">
            Send message <Icon name="arrow" :size="18" />
          </button>
          <p v-if="sent" class="form-sent">Opening your mail app… thank you!</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(36px, 5vw, 70px);
  padding: clamp(34px, 5vw, 60px);
  background: linear-gradient(180deg, var(--surface), var(--bg-2));
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.contact-title { font-size: clamp(1.9rem, 4vw, 3rem); margin-bottom: 18px; }
.contact-list {
  list-style: none;
  margin: 34px 0 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-list li { display: flex; align-items: center; gap: 14px; }
.contact-list a:hover { color: var(--gold); }
.ci {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  color: var(--gold);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex: none;
}
.socials { display: flex; gap: 10px; }
.social {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line);
  color: var(--muted);
  transition: all 0.35s var(--ease);
}
.social:hover {
  color: #0b0b0e;
  background: var(--gold);
  border-color: transparent;
  transform: translateY(-3px);
}

.contact-form { display: flex; flex-direction: column; gap: 16px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.field label {
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.field input,
.field select,
.field textarea {
  font-family: var(--font-body);
  font-size: 0.96rem;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 13px 16px;
  transition: border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
  resize: vertical;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.12);
}
.field select { appearance: none; cursor: pointer; }
.form-btn { margin-top: 6px; align-self: flex-start; }
.form-sent { color: var(--gold); font-size: 0.9rem; }

@media (max-width: 820px) { .contact-shell { grid-template-columns: 1fr; } }
</style>
