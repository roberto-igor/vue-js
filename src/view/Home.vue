<template>
  <div class="home">
      <v-card-text>
          <p>{{piada.value.joke}}</p>
      </v-card-text>
  </div>
</template>

<script>

export default {

  name: 'home',
  components: {
  },
  created() {
    this.$store.dispatch('piadas/fetchPiada')
  },
  computed: {
    piada() {
      return this.$store.state.piadas.piada.data
    }
  },
  data() {
    return {
      
    }
  }
  
}
</script>