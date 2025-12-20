<script setup lang="ts">
import { reactive } from "vue";
import PageHero from "~/components/sections/PageHero.vue";
import {
  contactChannels,
  mapEmbedUrl,
  web3FormsKey,
  siteBrand,
} from "~/data/siteContent";

const formState = reactive({ status: "idle", message: "" });

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  const formEl = event.target as HTMLFormElement;
  const formData = new FormData(formEl);
  formData.append("access_key", web3FormsKey);

  formState.status = "submitting";
  formState.message = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      formEl.reset();
      formState.status = "success";
      formState.message =
        "Thank you. Our coordination team will get back within one business day.";
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    console.error(error);
    formState.status = "error";
    formState.message =
      "Unable to submit right now. Please email work@fabtechs.co.in.";
  }
};
</script>

<template>
  <PageHero
    title="Contact Fabtechs"
    tagline="Share RFQs, shutdown plans, or early concepts. We respond with clarity."
  />

  <section class="section-gap">
    <div class="shell contact-layout">
      <div class="contact-card">
        <h3
          style="
            font-family: &quot;Space Grotesk&quot;, sans-serif;
            margin-bottom: 1rem;
          "
        >
          Reach our coordination desk
        </h3>
        <ul>
          <li v-for="channel in contactChannels" :key="channel.label">
            <span>{{ channel.label }}</span>
            <strong>
              <template v-if="channel.href">
                <a :href="channel.href">{{ channel.value }}</a>
              </template>
              <template v-else>
                {{ channel.value }}
              </template>
            </strong>
          </li>
        </ul>
      </div>

      <div class="contact-form">
        <h3
          style="
            font-family: &quot;Space Grotesk&quot;, sans-serif;
            margin-bottom: 1rem;
          "
        >
          Send us a brief
        </h3>
        <form @submit="handleSubmit">
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="tel" placeholder="Phone (optional)" />
          <textarea
            name="message"
            placeholder="Project outline"
            required
          ></textarea>
          <button
            class="btn"
            type="submit"
            :disabled="formState.status === 'submitting'"
          >
            {{
              formState.status === "submitting" ? "Sending…" : "Send Message"
            }}
          </button>
        </form>
        <p
          v-if="formState.message"
          :class="formState.status === 'success' ? '' : 'muted'"
          style="margin-top: 1rem"
        >
          {{ formState.message }}
        </p>
      </div>
    </div>
  </section>

  <section class="section-gap">
    <div class="shell">
      <div class="map-embed">
        <iframe
          :src="mapEmbedUrl"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p class="muted" style="margin-top: 1rem">
        Fabtechs Enterprises · {{ siteBrand.address }}
      </p>
    </div>
  </section>
</template>
