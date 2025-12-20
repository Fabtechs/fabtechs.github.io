<script setup lang="ts">
import { ref, computed } from "vue";
import type { ProjectItem } from "~/data/siteContent";

type Props = {
  items: ProjectItem[];
  title?: string;
  description?: string;
  cta?: { label: string; to: string };
};

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  description: undefined,
  cta: undefined,
});

const selectedIndex = ref<number | null>(null);

const currentImage = computed(() => {
  return selectedIndex.value !== null ? props.items[selectedIndex.value].image : null;
});

const openLightbox = (image: string) => {
  selectedIndex.value = props.items.findIndex(item => item.image === image);
};

const closeLightbox = () => {
  selectedIndex.value = null;
};

const nextImage = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value + 1) % props.items.length;
  }
};

const prevImage = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value - 1 + props.items.length) % props.items.length;
  }
};

const handleOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeLightbox();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "ArrowLeft") {
    prevImage();
  }
};
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
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="project-image"
              @click="openLightbox(project.image)"
            />
          </figure>
        </article>
      </div>

      <!-- Lightbox Modal -->
      <Teleport to="body">
        <div
          v-if="selectedIndex !== null"
          class="lightbox-overlay"
          @click="handleOverlayClick"
          @keydown="handleKeydown"
          tabindex="0"
          autofocus
        >
          <button
            class="lightbox-close"
            aria-label="Close lightbox"
            @click="closeLightbox"
          >
            ✕
          </button>
          <button
            class="lightbox-nav lightbox-prev"
            aria-label="Previous image"
            @click="prevImage"
          >
            ‹
          </button>
          <div class="lightbox-container" @click.stop>
            <img :src="currentImage" :alt="'Project detail'" class="lightbox-image" />
          </div>
          <button
            class="lightbox-nav lightbox-next"
            aria-label="Next image"
            @click="nextImage"
          >
            ›
          </button>
          <div class="lightbox-counter">
            {{ (selectedIndex ?? 0) + 1 }} / {{ items.length }}
          </div>
        </div>
      </Teleport>
    </div>
  </section>
</template>
