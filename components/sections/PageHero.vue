<script setup lang="ts">
defineProps<{ title: string; tagline?: string }>();
</script>

<template>
  <section class="page-hero">
    <div class="shell">
      <div class="banner">
        <span class="hero-eyebrow">Fabtechs Enterprises</span>
        <h1>{{ title }}</h1>
        <p v-if="tagline" class="muted">{{ tagline }}</p>
      </div>
    </div>
  </section>
</template>
