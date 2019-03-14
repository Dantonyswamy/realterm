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
    </v-flex>
  </v-layout>
</template>
  
<script>
import Title from '~/components/Title.vue'
import Grid from '~/components/Grid.vue'

export default {
  components: {
    Title,
    Grid
  }
}
</script>
