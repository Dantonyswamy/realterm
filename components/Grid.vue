<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-hover>
          <v-card slot-scope="{ hover }" color="primary" primary
                  href="https://realtermenergy.maps.arcgis.com/home/signin.html?returnUrl=https%3A%2F%2Frealtermenergy.maps.arcgis.com%2Fhome%2Forganization.html"
                  target="_blank"
                  :class="`elevation-${hover ? 12 : 2}`"
                  ripple
                  dark
          >
            <v-card-title primary class="title">
              ESRI map
            </v-card-title>
            <v-card-text>{{ lorem }}</v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="secondary" 
                    dark 
                    href="https://arcg.is/18HGOD"
                    ripple
            >
              <v-card-text>Report an issue with Survey123</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex
                v-for="n in 2"
                :key="n"
                d-flex
                xs12
              >
                <v-card
                  color="accent"
                  ripple
                  dark
                >
                  <v-card-text>link to another Web API</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="info"
                ripple
        >
          <v-card-title primary class="title">
            Egnyte documents
          </v-card-title>
          <v-card-text>Get access to your important documents</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="warning" ripple>
          <v-card-title primary class="title">
            Talk to us
          </v-card-title>
          <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
}
</script>
