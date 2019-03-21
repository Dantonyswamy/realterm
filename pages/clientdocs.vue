<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Project meeting minutes with the Municipality
      <small>Click next to view other documents </small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="200px">
        <v-card-title>Document displayed from Onedrive or Firebase storage</v-card-title>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">
        Next
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      Inventory information from Post Survey Questionanaire
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px">
        <v-card-title>Document displayed from Onedrive or Firebase storage</v-card-title>
      </v-card>

      <v-btn color="primary" @click="e6 = 3">
        Next
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
      IGA approval document
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px">
        <v-card-title>Document displayed from Onedrive or Firebase storage</v-card-title>
      </v-card>
      <v-btn color="primary" @click="e6 = 4">
        Next
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Meeting minutes from Installation Kick off meeting
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px">
        <v-card-title>Document displayed from Onedrive or Firebase storage</v-card-title>  
      </v-card>
      <v-btn color="primary" @click="e6 = 1">
        Back to top
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e6: 1
    }
  }
}
</script>
