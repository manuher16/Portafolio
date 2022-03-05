<template>
  <v-container fluid>
    <v-card
      width="1000"
      min-width="350"
      class="card-center-vertical"
      flat
      color="rgb(0,0,0,0)"
    >
      <v-row class="text-center">
        <v-col md="1" class="pl-5">
          <v-row class="pt-10">
            <v-btn icon x-large color="#6F5FDB">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-btn icon x-large color="#6F5FDB">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-btn icon x-large color="#6F5FDB">
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col md="11">
          <v-row class="pt-5">
            <v-col>
              <v-card flat class="" color="transparent">
                <v-card-title>
                  <p class="text-h3 text-start">Hola, soy Orson</p>
                </v-card-title>
                <v-card-subtitle class="font-weight-black pb-0"
                  ><p class="subtitle">
                    Frontend & Backend Developer
                  </p></v-card-subtitle
                >
                <v-card-text>
                  <p>
                    Experiencia desarrollando con Frameworks, servidores API
                    REST, WebServices y mas...
                  </p>
                </v-card-text>
                <v-card-actions class="pl-4">
                  <v-btn
                    color="#6F5FDB"
                    x-large
                    class="rounded-pill"
                    @click="redirect('/contact')"
                    dark
                    ><p class="pt-4 text-overline">Contactame</p>
                    <v-icon class="pl-2" color="white">mdi-send-outline</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col align-self="end">
              <div class="aling-items-end">
                <v-sheet color="#6F5FDB" width="250" height="250"></v-sheet>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    redirect(link) {
      this.$router.push({ path: link });
    },
  },
};
</script>

<style>
.aling-items-end {
  display: grid;

  justify-items: center;
}
.aling-items-center {
  display: flex;
  align-items: center;
}
.subtitle {
  font-size: 18px;
}

@media only screen and (min-width: 400px) {
  .container-presentation {
    margin-top: 25%;
  }
}
@media only screen and (min-width: 725px) {
  .container-presentation {
    margin-top: 10%;
  }
}
</style>