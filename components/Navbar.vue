<template>
  <nav class="columns">
    <div class="column is-3"></div>
    <div class="column image-column" :class="{'pt-5': large}">
      <NuxtLink to="/">
        <DarkModeAwareLogo :large="large"/>
      </NuxtLink>
    </div>
    <b-field class="column switch-field is-3">
      <b-switch v-model="darkMode">Dark Mode</b-switch>
    </b-field>

  </nav>
</template>

<script>
import DarkModeAwareLogo from "~/components/DarkModeAwareLogo";

export default {
  name: "Navbar",
  components: {DarkModeAwareLogo},
  props: {
    large: Boolean,
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.state.theme.darkMode
      },
      set(value) {
        this.$store.commit('theme/setDarkMode', value)
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 180px;
}

.switch-field {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
