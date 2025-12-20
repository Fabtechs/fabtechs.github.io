<script setup lang="ts">
import type { ServiceArea } from "~/data/siteContent";

defineProps<{ services: ServiceArea[] }>();
</script>

<template>
  <section class="section-gap">
    <div class="shell">
      <div class="section-heading">
        <span>Key Fields</span>
        <h2>Best-in-class services for industrial builds.</h2>
      </div>
      <div class="card-grid">
        <article
          v-for="service in services"
          :key="service.id"
          class="service-card"
        >
          <div class="service-icon">{{ service.badge }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.blurb }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
