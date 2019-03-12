import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#87ACA3',
    accent: '#0C1446',
    secondary: '#175873',
    info: '#A7BBD1',
    warning: '#B9D691',
    error: colors.deepOrange.accent4,
    success: '#D4E8C0'
  }
})
