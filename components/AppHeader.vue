<script setup lang="ts">
import { ref, watch } from "vue";
import { navLinks, siteBrand } from "~/data/siteContent";

const menuOpen = ref(false);
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="site-header">
    <div class="shell">
      <NuxtLink class="brand" to="/">
        <img
          src="/img/brand/fabtechs-logo.png"
          alt="Fabtechs logo"
          class="brand-mark"
        />
        <div class="brand-text">
          <span class="brand-label">Fabtechs Enterprises</span>
          <span class="brand-subline">{{ siteBrand.taglineShort }}</span>
        </div>
      </NuxtLink>

      <button
        class="nav-toggle"
        :class="{ 'is-open': menuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      <nav class="primary-nav" :class="{ 'is-open': menuOpen }">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          class="nav-link"
          :to="link.to"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          class="ghost-link mobile-only"
          :href="`tel:${siteBrand.phone.replace(/\s+/g, '')}`"
        >
          {{ siteBrand.phone }}
        </a>
      </nav>

      <div class="header-cta">
        <NuxtLink class="btn" to="/contact">Request a Quote</NuxtLink>
      </div>
    </div>
  </header>
</template>
