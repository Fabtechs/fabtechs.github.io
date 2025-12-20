<script setup lang="ts">
import HeroSection from "~/components/sections/HeroSection.vue";
import ServiceHighlights from "~/components/sections/ServiceHighlights.vue";
import ProcessTimeline from "~/components/sections/ProcessTimeline.vue";
import ProjectsShowcase from "~/components/sections/ProjectsShowcase.vue";
import PartnerMarquee from "~/components/sections/PartnerMarquee.vue";
import CtaBanner from "~/components/sections/CtaBanner.vue";
import {
  heroSlides,
  serviceAreas,
  workflowSteps,
  projects,
  partners,
  aboutHighlights,
  stats,
  siteBrand,
} from "~/data/siteContent";
</script>

<template>
  <HeroSection :slides="heroSlides" />

  <section class="section-gap">
    <div class="shell split-layout">
      <div class="panel">
        <div class="section-heading" style="margin-bottom: 1.5rem">
          <span>About Fabtechs</span>
          <h2>Engineering excellence in fabrication & erection</h2>
        </div>
        <p class="muted" style="margin-bottom: 1.5rem">
          Fabtechs Enterprises blends precision fabrication, disciplined erection crews, and coating expertise to deliver dependable industrial assets across Gujarat's most demanding pharma and chemical hubs
        </p>
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
      <div class="panel">
        <div class="section-heading" style="margin-bottom: 1rem">
          <span>Impact</span>
          <h2>Disciplined delivery backed by measurable outcomes</h2>
        </div>
        <div class="stats-grid">
          <article v-for="stat in stats" :key="stat.label" class="stat-card">
            <strong>{{ stat.value }}</strong>
            <p>{{ stat.label }}</p>
          </article>
        </div>
        <p class="muted" style="margin-top: 1.5rem">
          Clients such as Sun Pharma, Neogen Chemicals, Borosil Renewables, and MRF Tyres trust Fabtechs for reliable schedules, clean sites, and precise tolerances
        </p>
      </div>
    </div>
  </section>

  <ServiceHighlights :services="serviceAreas" />

  <ProcessTimeline :steps="workflowSteps" />

  <ProjectsShowcase
    :items="projects.slice(0, 6)"
    title="Discover marquee installations built for regulated industries"
    description="A sample of fabrication, erection, and roofing scopes delivered across Ankleshwar, Panoli, Jhagadia, and Dahej"
    :cta="{ label: 'View full gallery', to: '/projects' }"
  />

  <CtaBanner
    title="Need a fabrication & erection partner that owns the schedule?"
    description="Share your project brief and we will return with method statements, timelines, and a transparent commercial proposal"
    :primary="{ label: 'Book a discovery call', to: '/contact' }"
    :secondary="{ label: 'Download capability deck', to: '/projects' }"
  />

  <PartnerMarquee :logos="partners" />
</template>
