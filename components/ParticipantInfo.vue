<template>
  <div>
    <NuxtLink :to="participant.path">
      <h1 class="title" :class="{'has-text-manga': darkMode, 'has-text-psybeam': !darkMode}">
        {{ participant.fullName }}
      </h1>
    </NuxtLink>
    <NuxtLink :to="participant.path">
      <h2 class="subtitle" :class="{'has-text-spark': darkMode, 'has-text-void': !darkMode}">
        {{ participant.slug }}
      </h2>
    </NuxtLink>
    <div class="mt-1">
      <span class="tag is-giga">Contribuidor</span>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ParticipantInfo",
  props: ["participant"],
  computed: mapState({
    darkMode: state => state.theme.darkMode,
  }),
}
</script>
