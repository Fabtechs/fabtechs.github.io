<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import type { HeroSlide } from "~/data/siteContent";

const props = defineProps<{ slides: HeroSlide[] }>();

const activeSlide = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

const scheduleNext = () => {
  timer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % props.slides.length;
  }, 6000);
};

onMounted(() => {
  scheduleNext();
});

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
});

const setSlide = (index: number) => {
  activeSlide.value = index;
  if (timer) {
    clearInterval(timer);
  }
  scheduleNext();
};

const nextSlide = () => {
  setSlide((activeSlide.value + 1) % props.slides.length);
};

const prevSlide = () => {
  setSlide((activeSlide.value - 1 + props.slides.length) % props.slides.length);
};
</script>
<template>
  <section class="hero">
    <div class="shell">
      <div class="hero-layout">
        <div class="hero-copy">
          <p class="hero-eyebrow">{{ slides[activeSlide].eyebrow }}</p>
          <h1>{{ slides[activeSlide].title }}</h1>
          <p class="muted">{{ slides[activeSlide].description }}</p>
          <div class="hero-actions">
            <NuxtLink class="btn" :to="slides[activeSlide].primaryCta.to">
              {{ slides[activeSlide].primaryCta.label }}
            </NuxtLink>
            <NuxtLink
              class="ghost-link"
              :to="slides[activeSlide].secondaryCta.to"
            >
              {{ slides[activeSlide].secondaryCta.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="hero-media">
          <button class="hero-arrow left" type="button" aria-label="Previous slide" @click="prevSlide">‹</button>
          <div
            v-for="(slide, index) in slides"
            :key="slide.title"
            class="hero-frame"
            :class="{ 'is-active': index === activeSlide }"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>
          <button class="hero-arrow right" type="button" aria-label="Next slide" @click="nextSlide">›</button>
          <div class="hero-progress">
            <button
              v-for="(slide, index) in slides"
              :key="slide.eyebrow"
              type="button"
              :class="{ 'is-active': index === activeSlide }"
              @click="setSlide(index)"
              aria-label="Change hero slide"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
