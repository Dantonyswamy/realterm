<template>
  <v-layout
    column
    justify-start
    align-start
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <Title />
      <grid />
      <clients />
    </v-flex>
  </v-layout>
</template>
  
<script>
import Title from '~/components/Title.vue'
import Grid from '~/components/Grid.vue'
import clients from '~/components/clients.vue'

export default {
  components: {
    Title,
    Grid,
    clients
  }
}
</script>
