<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}

defineProps<Props>();
</script>

<template>
  <section class="section-gap">
    <div class="shell">
      <div class="cta">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="hero-actions" style="justify-content: center">
          <NuxtLink class="btn" :to="primary.to">{{ primary.label }}</NuxtLink>
          <NuxtLink v-if="secondary" class="ghost-link" :to="secondary.to">{{
            secondary.label
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
