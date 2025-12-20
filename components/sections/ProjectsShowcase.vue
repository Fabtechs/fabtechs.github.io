<script setup lang="ts">
import type { ProjectItem } from "~/data/siteContent";

type Props = {
  items: ProjectItem[];
  title?: string;
  description?: string;
  cta?: { label: string; to: string };
};

withDefaults(defineProps<Props>(), {
  title: undefined,
  description: undefined,
  cta: undefined,
});
</script>

<template>
  <section class="section-gap">
    <div class="shell">
      <div
        v-if="title"
        class="section-heading"
        style="
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        "
      >
        <div>
          <span>Projects</span>
          <h2>{{ title }}</h2>
          <p
            v-if="description"
            class="muted"
            style="margin-top: 0.5rem; max-width: 640px"
          >
            {{ description }}
          </p>
        </div>
        <NuxtLink v-if="cta" class="ghost-link" :to="cta.to">{{
          cta.label
        }}</NuxtLink>
      </div>

      <div class="project-grid">
        <article
          v-for="project in items"
          :key="project.id"
          class="project-card"
        >
          <figure>
            <img :src="project.image" :alt="project.title" loading="lazy" />
            <figcaption>
              <h3>{{ project.title }}</h3>
              <p>{{ project.location }}</p>
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
