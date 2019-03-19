<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"     
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          active-class="success"
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      color="#FCFAFB"
      app
    >
      <v-tooltip bottom>
        <v-toolbar-side-icon slot="activator" @click="drawer = !drawer" />
        <span>menu</span>
      </v-tooltip> 
      <v-tooltip bottom>
        <v-btn
          v-if="drawer"
          slot="activator"
          icon
          @click.stop="miniVariant = !miniVariant;"
        >
          <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <span>expand</span>
      </v-tooltip>
      
      <v-toolbar-title>Service Center</v-toolbar-title>
      
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      :fixed="fixed"
      app
      
      color="secondary"
    >
      <v-flex
        text-xs-center
        white--text
        xs12
      >
        <span>&copy; 2019- RealTerm Energy Inc</span>
      </v-flex>  
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'map',
          title: 'Maps',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: ''
    }
  }
}
</script>
