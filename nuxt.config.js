export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-two',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'دومین پروژه ناکست'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma/css/bulma.css',
    '~/assets/blog.css',
    // '~/assets/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-easy-toast.client.js',
    '~/plugins/message.js'
    // {src:'~/plugins/vue-easy-toast.client.js',mode:'client'}
  ],
  transpile: [
    '~/plugins/vue-easy-toast.client.js'
  ],
  server: {
    port: 3001 // default: 3000
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      Authorization: 'Bearer token'
    }
  },
 /* router: {
    middleware: ['auth']
  },*/
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
