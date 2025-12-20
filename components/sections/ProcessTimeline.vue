<script setup lang="ts">
import type { WorkflowStep } from "~/data/siteContent";

defineProps<{ steps: WorkflowStep[] }>();
</script>

<template>
  <section class="section-gap">
    <div class="shell">
      <div class="section-heading">
        <span>Method</span>
        <h2>How Fabtechs takes projects from brief to handover.</h2>
      </div>
      <div class="timeline">
        <div class="timeline-list">
          <article v-for="step in steps" :key="step.id" class="timeline-step">
            <span>{{ step.id.toString().padStart(2, "0") }}</span>
            <h3>{{ step.title }}</h3>
            <p class="muted">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
