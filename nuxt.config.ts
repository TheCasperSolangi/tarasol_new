// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tara Solutions - Best for Digital Transformations, IT Services & International Certifications',
      meta: [
        {
          name: 'description',
          content:
            'Tara Solutions is a leading global provider of digital transformation, IT services, and international certification training. We help businesses grow through technology, innovation, and excellence.',
        },
        { name: 'keywords', content: 'Tara Solutions, digital transformation, IT services, international certifications, software development, cloud solutions, cybersecurity, business automation, professional training' },
        { name: 'author', content: 'Tara Solutions' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tara Solutions - Best for Digital Transformations, IT Services & International Certifications' },
        {
          property: 'og:description',
          content:
            'Empowering businesses worldwide with top-notch digital transformation solutions, IT consultancy, and certified training programs.',
        },
        { property: 'og:site_name', content: 'Tara Solutions' },
        { property: 'og:url', content: 'https://tarasolutions.com' },
        { property: 'og:image', content: 'https://tarasolutions.com/images/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tara Solutions - Digital Transformation Experts' },
        {
          name: 'twitter:description',
          content:
            'Leading IT services, business automation, and certification training provider. Transform your future with Tara Solutions.',
        },
        { name: 'twitter:image', content: 'https://tarasolutions.com/images/og-image.jpg' },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        { name: 'theme-color', content: '#0d6efd' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://tarasolutions.com' },
      ],
      script: [],
    },
  },

  css: [
    '~/assets/css/front.css',
    '~/assets/css/animate.css',
    '~/assets/scss/style.scss',
  ],

  plugins: [
    {
      src: '~/plugins/bootstrap.client.js',
      mode: 'client',
    },
    {
      src: '~/plugins/wow.js',
      mode: 'client',
    },
    {
      src: '~/plugins/jarallax.client.ts',
      mode: 'client',
    },
  ],

  modules: [
    'nuxt-swiper',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },
})
