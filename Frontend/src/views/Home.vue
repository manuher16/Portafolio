<template>
  <v-container fluid class="">
    <v-card
      color="rgb(0,0,0,0)"
      class="d-flex aling-items-start"
      flat
      min-height="100vh"
    >
      <Presentation />
    </v-card>
    <v-card flat class="card-center-vertical" max-width="1000">
      <Skills />
    </v-card>

    <ContactMe />
  </v-container>
</template>

<script>
import Skills from "../components/home/skills.vue";
import Presentation from "../components/home/presentation.vue";
import ContactMe from "../components/home/contact.vue";
export default {
  name: "Home",

  components: {
    Presentation,
    ContactMe,
    Skills,
  },
};
</script>
<style >
.card-center-vertical {
  left: 50%;
  transform: translate(-50%);
}
</style>