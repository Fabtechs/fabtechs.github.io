<script setup lang="ts">
import PageHero from "~/components/sections/PageHero.vue";
import PartnerMarquee from "~/components/sections/PartnerMarquee.vue";
import { testimonials, partners } from "~/data/siteContent";
</script>

<template>
  <PageHero
    title="Client stories"
    tagline="Feedback from pharma, chemical, and renewable leaders that trust Fabtechs Enterprises."
  />

  <section class="section-gap">
    <div class="shell">
      <div class="section-heading">
        <span>Voices</span>
        <h2>Reliable crews. Predictable outcomes.</h2>
      </div>
      <div class="testimonial-grid">
        <article
          v-for="item in testimonials"
          :key="item.author"
          class="testimonial-card"
        >
          <p>“{{ item.quote }}”</p>
          <h4>{{ item.author }}</h4>
          <span>{{ item.role }}</span>
        </article>
      </div>
    </div>
  </section>

  <PartnerMarquee :logos="partners" />
</template>
