<script setup lang="ts">
import PageHero from "~/components/sections/PageHero.vue";
import ProcessTimeline from "~/components/sections/ProcessTimeline.vue";
import PartnerMarquee from "~/components/sections/PartnerMarquee.vue";
import {
  aboutHighlights,
  workflowSteps,
  stats,
  partners,
  siteBrand,
} from "~/data/siteContent";
</script>

<template>
  <PageHero
    title="About Fabtechs Enterprises"
    tagline="Precision-driven fabrication, erection, and surface engineering for regulated industries."
  />

  <section class="section-gap">
    <div class="shell split-layout">
      <div class="panel">
        <h2
          style="
            font-family: &quot;Space Grotesk&quot;, sans-serif;
            margin-bottom: 1rem;
          "
        >
          We build assets that keep production online.
        </h2>
        <p class="muted" style="margin-bottom: 1rem">
          Since inception, Fabtechs Enterprises has supported pharma, chemical,
          renewable, and infrastructure leaders with heavy structure
          fabrication, site erection, and envelope upgrades. Our engineers,
          fabricators, and surface specialists orchestrate each stage with
          safety-first discipline.
        </p>
        <p class="muted">
          By combining in-house fabrication capabilities with agile field teams,
          we maintain strict tolerances, accelerate schedules, and simplify
          commissioning. Every engagement is backed by transparent
          communication, QAP documentation, and insured, trained resources.
        </p>
      </div>
      <div class="panel">
        <h3
          style="
            font-family: &quot;Space Grotesk&quot;, sans-serif;
            margin-bottom: 1rem;
          "
        >
          What sets us apart
        </h3>
        <div class="highlight-list">
          <article
            v-for="item in aboutHighlights"
            :key="item.title"
            class="highlight-item"
          >
            <h4>{{ item.title }}</h4>
            <p class="muted">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="section-gap">
    <div class="shell">
      <div class="section-heading">
        <span>Impact</span>
        <h2>Outcomes engineered for industrial performance.</h2>
      </div>
      <div class="stats-grid">
        <article v-for="stat in stats" :key="stat.label" class="stat-card">
          <strong>{{ stat.value }}</strong>
          <p>{{ stat.label }}</p>
        </article>
      </div>
      <p class="muted" style="margin-top: 1.5rem; max-width: 720px">
        From Ankleshwar to Dahej, Fabtechs keeps pharma blocks, specialty
        chemical plants, and renewable facilities on-line with proactive
        coordination, punch-list closure, and resilient detailing.
      </p>
    </div>
  </section>

  <ProcessTimeline :steps="workflowSteps" />

  <PartnerMarquee :logos="partners" />

  <section class="section-gap">
    <div class="shell">
      <div class="cta">
        <h3>
          Work with a single partner for fabrication, erection, and finishing.
        </h3>
        <p>
          Call us at {{ siteBrand.phone }} or email {{ siteBrand.email }} for a
          project walk-through.
        </p>
        <div class="hero-actions" style="justify-content: center">
          <NuxtLink class="btn" to="/contact">Plan a project</NuxtLink>
          <a class="ghost-link" :href="siteBrand.quoteMail">Email estimating</a>
        </div>
      </div>
    </div>
  </section>
</template>
