<template>
  <div class="embed-responsive">
    <v-layout>
      <iframe width="640" height="360" src="https://www.buildingconnected.com/" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: 'https://www.buildingconnected.com/'
    }
  }
}
</script>
<style scoped>
.embed-responsive {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -28.1%;
  /* video height / video width */
  padding-bottom: 56.2%;
  height: 0;
  overflow: hidden;
}
.embed-responsive iframe {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  margin: auto;
}
</style>
