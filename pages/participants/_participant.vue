<template>
  <div>
    <header class="hero">
      <div class="hero-body">
        <div class="container has-text-centered info-header">
          <Avatar :participant="participant"/>
          <span class="mt-3"></span>
          <ParticipantInfo :participant="participant"/>
        </div>
      </div>
    </header>
    <section class="section pt-1">
      <div v-if="!!participant.email" class="container">
        <div class="content">
          <nuxt-content :document="participant"/>
        </div>
      </div>
      <div v-else class="has-text-centered">
        <h3 class="subtitle">Aquí habrá una contribución :)</h3>
      </div>
      <div class="has-text-centered mt-6">
        <b-button
          tag="a"
          :type="darkMode ? 'is-manga' : 'is-void'"
          :href="`https://github.com/${participant.slug}`"
          target="_blank"
        >
          Ve mi GitHub
        </b-button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex";

import Avatar from "~/components/Avatar";
import ParticipantInfo from "~/components/ParticipantInfo";

export default {
  name: "Participant",
  components: {Avatar, ParticipantInfo},
  computed: mapState({
    darkMode: state => state.theme.darkMode
  }),
  async asyncData({$content, params, error}) {
    const participants = await $content("participants")
      .where({slug: params.participant})
      .fetch()

    if (participants.length > 0) {
      return {participant: participants[0]}
    } else {
      error({statusCode: 404, message: 'No pudimos encontrar el participante'})
    }
  }
}
</script>

<style scoped>
.info-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-body {
  padding: 1rem 3rem 2rem;
}
</style>
