<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-btn text to="/">
        <span><strong>P</strong>iadas <strong>C</strong>huck <strong>N</strong>orris</span>    
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn  @click="reloadPage">
        Atualizar
      </v-btn>

    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    reloadPage(){
      window.location.reload()
    }
  },
  data: () => ({
    //
  }),
};
</script>