<template>
  <div>
    <section class="section pt-4">
      <div class="container has-text-centered">
        <b-button type="is-holo">Self Check-In</b-button>
        <b-button
          :type="darkMode ? 'is-manga' : 'is-void'"
          tag="nuxt-link"
          to="/participants"
        >
          Participantes
        </b-button>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h5
          class="subtitle has-text-centered"
          :class="darkMode ? 'has-text-manga' : 'has-text-void'"
        >
          WIP: Poner código de conducta y link a student pack
        </h5>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'IndexPage',
  computed: mapState({
    darkMode: state => state.theme.darkMode,
  }),
  async asyncData({$content}) {
    const participants = await $content("participants")
      .fetch()
    return {anyParticipants: participants.length > 0}
  },
}
</script>
