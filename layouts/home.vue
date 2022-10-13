<template>
  <div>
    <main :style="{backgroundColor: primaryColor, color: primaryInvertColor}" class="pt-5">
      <Navbar large/>
      <Nuxt/>
    </main>
    <footer :style="{backgroundColor: primaryColor, color: primaryInvertColor}" class="has-text-centered pb-6">
      Hecho con <3 por <a href="https://gdg.community.dev/gdg-unam/" target="_blank">GDG UNAM</a>
      y <a href="https://education.github.com/experts" target="_blank">GitHub Campus Experts</a>
    </footer>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import Navbar from "~/components/Navbar";

export default {
  name: 'DefaultLayout',
  components: {Navbar},
  computed: {
    ...mapState({
      darkMode: state => state.theme.darkMode,
    }),
    ...mapGetters({
      primaryColor: 'theme/primaryColor',
      primaryInvertColor: 'theme/primaryInvertColor',
    })
  },
}
</script>

<style>
main {
  min-height: 90vh;
}
</style>
