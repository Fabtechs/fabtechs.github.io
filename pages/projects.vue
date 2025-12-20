<script setup lang="ts">
import PageHero from "~/components/sections/PageHero.vue";
import ProjectsShowcase from "~/components/sections/ProjectsShowcase.vue";
import CtaBanner from "~/components/sections/CtaBanner.vue";
import { projects } from "~/data/siteContent";
</script>

<template>
  <PageHero
    title="Project gallery"
    tagline="Industrial fabrication, erection, and roofing scopes delivered across Gujarat's high-compliance hubs."
  />

  <ProjectsShowcase
    :items="projects"
    title="Projects anchored in safety, tolerances, and velocity."
    description="Hover over the gallery to explore marquee scopes completed for pharma, chemical, renewable, and infrastructure clients."
  />

  <CtaBanner
    title="Need a partner for your next shutdown or greenfield build?"
    description="Share RFQs, BOQs, or concept sketches. We respond with methods, resource plans, and commercial clarity."
    :primary="{ label: 'Submit scope', to: '/contact' }"
    :secondary="{ label: 'Review clients', to: '/testimonials' }"
  />
</template>
