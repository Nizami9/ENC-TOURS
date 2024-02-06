// https://nuxt.com/docs/api/configuration/nuxt-config
import i18nConfig from './i18.configs';

export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    publicPath: '/assets/',
  },
    runtimeConfig: {
      public: {
        motion: {
          directives: {
            'pop-bottom': {
              initial: {
                scale: 0,
                opacity: 0,
                y: 100,
              },
              visible: {
                scale: 1,
                opacity: 1,
                y: 0,
              }
            }
          }
        }
      }
  },
  layouts: {
    default: '@/layouts/default.vue'
  },
  router: {
    extendRoutes(routes) {
      // Add a custom route for "selected-data"
      routes.push({
        name: 'company',
        path: '/customers/company',
        component: '@/pages/customers/company.vue', // Adjust the path to your component
      });
    },
  },
  // Other Nuxt config options...
  css: [
    '@/assets/css/tailwind.css',
  ],
    modules: [
      "@nuxtjs/tailwindcss",
      '@nuxtjs/i18n',
      '@vueuse/motion/nuxt',
    ],
    i18n: i18nConfig,
  });
  