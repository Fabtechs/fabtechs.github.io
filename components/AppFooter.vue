<script setup lang="ts">
import { navLinks, siteBrand, socialLinks } from "~/data/siteContent";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <div>
          <div class="brand">
            <img
              src="/public/img/brand/fabtechs-logo.png"
              alt="Fabtechs logo"
              class="brand-mark"
            />
            <div class="brand-text">
              <span class="brand-label">Fabtechs</span>
              <span class="brand-subline">{{ siteBrand.taglineShort }}</span>
            </div>
          </div>
          <p class="muted" style="margin-top: 1rem; max-width: 300px">
            {{ siteBrand.tagline }}
          </p>
        </div>

        <div>
          <h5>Navigate</h5>
          <ul class="footer-links">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <ul class="footer-links">
            <li>
              <a :href="`tel:${siteBrand.phone.replace(/\s+/g, '')}`">{{
                siteBrand.phone
              }}</a>
            </li>
            <li>
              <a
                :href="`tel:${siteBrand.secondaryPhone.replace(/\s+/g, '')}`"
                >{{ siteBrand.secondaryPhone }}</a
              >
            </li>
            <li>
              <a :href="`mailto:${siteBrand.email}`">{{ siteBrand.email }}</a>
            </li>
            <li>{{ siteBrand.address }}</li>
          </ul>
        </div>

        <div>
          <h5>Follow</h5>
          <div class="social-list">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              class="social-pill"
              :href="social.href"
              target="_blank"
              rel="noreferrer"
            >
              {{ social.label }}
            </a>
          </div>
        </div>
      </div>

      <p class="footer-copy">
        © {{ year }} Fabtechs Enterprises. All rights reserved.
      </p>
    </div>
  </footer>
</template>
