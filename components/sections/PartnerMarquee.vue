<script setup lang="ts">
defineProps<{ logos: string[] }>();
</script>

<template>
  <section class="section-gap">
    <div class="shell">
      <div class="section-heading">
        <span>Clients</span>
        <h2>
          Trusted by industrial leaders across Ankleshwar, Panoli, Jhagadia, and
          Dahej.
        </h2>
      </div>
      <div class="partner-marquee">
        <div class="partner-track">
          <template
            v-for="(logo, index) in [...logos, ...logos]"
            :key="`${logo}-${index}`"
          >
            <img
              :src="logo"
              alt="Partner logo"
              class="partner-logo"
              loading="lazy"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
