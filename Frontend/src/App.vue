<template>
  <v-app>
  <Nav/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/principal/nav.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Nav
  },
  created(){
   
    
  }
};
</script>
<style>
  .nav{
    margin-top:30px
  }
</style>
