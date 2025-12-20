// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      titleTemplate: '%s',
      title: 'Fabtechs Enterprises',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Fabrication and engineering specialists delivering heavy structure fabrication, erection, blasting, painting, and roofing solutions.' },
        { name: 'format-detection', content: 'telephone=no' },
        // theme-color will be initialized via inline script for day/night sync
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/brand/fabtechs-logo.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/brand/fabtechs-logo.png' }
      ],
      script: [
        {
          children:
            "(function(){try{var mode=window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var html=document.documentElement;html.classList.remove('theme-light','theme-dark');html.classList.add(mode==='light'?'theme-light':'theme-dark');var meta=document.querySelector('meta[name=\\\"theme-color\\\"]');if(!meta){meta=document.createElement('meta');meta.setAttribute('name','theme-color');document.head.appendChild(meta);}meta.setAttribute('content',mode==='light'?'#f7f8fa':'#0b1219');}catch(e){}})();"
        }
      ]
    }
  },
  nitro: {
    preset: 'github-pages'
  },
  runtimeConfig: {
    public: {
      contactEmail: 'work@fabtechs.co.in',
      contactPhone: '+91 9427003687'
    }
  }
})
