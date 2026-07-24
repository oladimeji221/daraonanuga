<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 }
})

// Minimal stroke-based icon set (outline, currentColor).
const paths = {
  film: 'M4 4h16v16H4zM4 8h16M4 16h16M8 4v16M16 4v16',
  scissors:
    'M6 3 20 17M6 21 20 7M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  compass: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM16 8l-2.5 5.5L8 16l2.5-5.5L16 8Z',
  sparkles: 'M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3L12 3ZM19 15l.9 2.3 2.3.9-2.3.9L19 21l-.9-2.9-2.3-.9 2.3-.9L19 15Z',
  camera:
    'M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8ZM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
  megaphone: 'M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1ZM18 8a4 4 0 0 1 0 8',
  play: 'M8 5v14l11-7L8 5Z',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  phone:
    'M6 3h3l1.5 4.5L8.5 9a11 11 0 0 0 6.5 6.5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z',
  pin: 'M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  arrowDown: 'M12 5v14M6 13l6 6 6-6',
  instagram:
    'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17.5 6.5h.01',
  youtube:
    'M22 12s0-3.5-.4-5a2.6 2.6 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.2A2.6 2.6 0 0 0 2.4 7C2 8.5 2 12 2 12s0 3.5.4 5a2.6 2.6 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.2A2.6 2.6 0 0 0 21.6 17c.4-1.5.4-5 .4-5ZM10 15l5-3-5-3v6Z',
  linkedin:
    'M6.5 8v10M6.5 5.5h.01M11 18v-5a2.5 2.5 0 0 1 5 0v5M11 18v-6M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z',
  behance:
    'M2 7h5a2.5 2.5 0 0 1 0 5H2V7ZM2 12h5.5a2.5 2.5 0 0 1 0 5H2v-5ZM15 8h6M14 14h7a3.5 3.5 0 0 0-7 0 3.5 3.5 0 0 0 4 3.4'
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || ''" />
  </svg>
</template>
