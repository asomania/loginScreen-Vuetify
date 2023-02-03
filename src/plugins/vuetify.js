// Styles
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Vuetify
import {
  createVuetify
} from 'vuetify'
import {
  aliases,
  fa
} from 'vuetify/iconsets/fa'


export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          something: '#170420',
          somethingElse: '#ea1646',
          inputButton: '#c71340',
        }
      }
    }
  }
})