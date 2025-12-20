<script setup lang="ts">
defineProps<{ logos: string[] }>();
</script>

<template>
  <section class="section-gap">
    <div class="shell">
      <div class="section-heading">
        <span>Clients</span>
        <h2>
          Trusted by industrial leaders across South Gujarat
        </h2>
      </div>
      <div class="partner-grid">
        <img
          v-for="logo in logos"
          :key="logo"
          :src="logo"
          alt="Partner logo"
          class="partner-logo"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
