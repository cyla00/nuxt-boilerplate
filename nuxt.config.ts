// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { 
        enabled: false
    },
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          htmlAttrs: {
            lang: 'en'
          },
          link: [
            {
                rel: 'icon', type: 'image/x-icon', href: '/icon.png'
            },
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
            },
          ],
          title: ``,
          meta: [
            { name: 'description', content: `` }
          ],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
        
    },
    components: [

    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxt/image',
    ],
    image: {
        quality: 80,
        format: ['webp', 'png'],
    },
    i18n: {
        vueI18n: './i18n.config.ts',
    },
    runtimeConfig: {

        public: {
            
        },
    },
    nitro: {
        plugins: [

        ]
    },
})
