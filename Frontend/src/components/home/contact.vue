<template>
  <v-container fluid id="container-contact">
    <v-card color="transparent" flat class="card-center-vertical" width="1000">
      <v-card-title class="">Contactame</v-card-title>
      <v-row>
        <v-col md="8" class="order-1">
          <v-card flat>
            <v-card-text>
              <v-form>
                <v-text-field
                  color="#6F5FDB"
                  label="Nombre completo"
                  placeholder="Jose Alvarado"
                ></v-text-field>
                <v-text-field
                  color="#6F5FDB"
                  label="Telefono"
                  placeholder="+504 00000000"
                ></v-text-field>
                <v-text-field
                  color="#6F5FDB"
                  label="Asunto"
                  placeholder="Programador"
                ></v-text-field>
                <v-textarea
                  rows="3"
                  label="Desripcion"
                  color="#6F5FDB"
                ></v-textarea>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#6F5FDB" dark class="rounded-pill"
                    >Enviar</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card flat>
            <v-card-text>
              <v-list three-line>
                <template v-for="(item, index) in items">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                  ></v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>

                  <v-list-item v-else :key="item.title">
                    <v-list-item-avatar tile>
                      <v-icon x-large> {{ item.icon }}</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="">{{
                        item.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "",
    windowSize: { x: 0, y: 0 },
    selectedItem: 1,
    items: [
      {
        icon: "mdi-card-account-phone-outline",
        title: "Numero telefono",
        subtitle: `+504 8791-1345 `,
      },

      {
        icon: "mdi-email",
        title: "Correo Electronico",
        subtitle: `orson.manuel@gmail.com `,
      },
      {
        icon: "mdi-map-marker",
        title: "Localizacion",
        subtitle: `Honduras, Francisco Morazan, Tegucigalpa`,
      },
    ],
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>

<style>
.p {
  margin: 0;
  margin-bottom: 0px !important;
  width: max-content;
}
</style>