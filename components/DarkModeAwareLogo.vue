<template>
  <NuxtLink to="/">
    <img
      v-show="darkMode"
      src="~/assets/logos/dark.jpeg"
      :style="{height: this.large ? '180px' : '100px'}"
      alt="Dark event logo"
    />
    <img
      v-show="!darkMode"
      src="~/assets/logos/light.jpeg"
      :style="{height: this.large ? '180px' : '100px'}"
      alt="Light event logo"
    />
  </NuxtLink>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "DarkModeAwareLogo",
  props: {
    large: Boolean,
  },
  computed: mapState({
    darkMode: state => state.theme.darkMode,
  }),
}
</script>
