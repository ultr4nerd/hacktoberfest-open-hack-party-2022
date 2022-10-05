<template>
  <div class="error-container">
    <h1 class="title" :class="{'has-text-manga': darkMode, 'has-text-void': !darkMode}">{{ error.message }}</h1>
    <b-button type="is-primary" tag="nuxt-link" to="/">
      Volver al inicio
    </b-button>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import Navbar from "~/components/Navbar";

export default {
  name: 'ErrorLayout',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  components: {Navbar},
  computed: {
    ...mapState({
      darkMode: state => state.theme.darkMode
    }),
    ...mapGetters({
      primaryColor: 'theme/primaryColor',
      primaryInvertColor: 'theme/primaryInvertColor',
    }),
  }
}
</script>

<style scoped>
.error-container {
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
