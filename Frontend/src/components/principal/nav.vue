<template>
  <v-sheet height="auto" width="100%" color="" style="z-index: 100">
    <v-card class="px-0 py-0 my-0">
      <v-row
        align-content="center"
        justify="center"
        class="mt-0 mx-2 text-center"
      >
        <v-col align="start" class="text-overline" md="1"
          ><p
            :class="`p ${selected ? 'hover-text-nav' : ''}`"
            @click="redirect('/')"
          >
            Orson
          </p></v-col
        >
        <v-col align="center" class="text-overline hover-text-nav" md="2"
          ><p class="p">Home</p></v-col
        >
        <v-col align="center" class="text-overline hover-text-nav" md="2"
          ><p class="p">About</p></v-col
        >
        <v-col align="center" class="text-overline hover-text-nav" md="2"
          >Skills</v-col
        >
        <v-col align="center" class="text-overline hover-text-nav" md="2"
          >Portafolio</v-col
        >
        <v-col
          align="center"
          class="text-overline hover-text-nav"
          md="2"
          @click="focus('contact')"
          >Contactame</v-col
        >
        <v-col
          ><v-btn icon @click="changeTheme">
            <v-icon>{{
              !this.$store.state.Theme.dark
                ? "mdi-moon-waning-crescent"
                : "mdi-weather-sunny"
            }}</v-icon>
          </v-btn></v-col
        >
      </v-row>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    selected: true,
  }),
  methods: {
    ...mapActions("Theme", ["changeDark"]),
    changeTheme() {
      this.changeDark();
      localStorage.setItem("dark", this.$store.state.Theme.dark);
      this.$vuetify.theme.isDark = this.$store.state.Theme.dark;
    },
    redirect(link) {
      location.href = link;
    },
    focus(el) {
      console.log(el);
      document.getElementById("container-contact").scrollIntoView();
    },
  },
  created() {
    this.$vuetify.theme.isDark = this.$store.state.Theme.dark;
  },
};
</script>

<style>
.hover-text-nav:hover {
  cursor: pointer;
  color: #6f5fdb;
}

.p {
  margin: 0;
  margin-bottom: 0px !important;
  width: max-content;
}
a {
  color: white none;
  text-decoration: none;
}
</style>