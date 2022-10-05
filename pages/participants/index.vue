<template>
  <section class="section">
    <div class="container">
      <h1 v-if="participants.length > 0" class="title" :class="{'has-text-manga': darkMode, 'has-text-void': !darkMode}">
        Participantes
      </h1>
      <h1 v-else class="title has-text-centered" :class="{'has-text-manga': darkMode, 'has-text-void': !darkMode}">
        Aún no hay participantes
      </h1>
      <article v-for="participant in participants" class="columns is-vcentered is-mobile">
        <div class="column is-narrow">
          <Avatar :participant="participant"/>
        </div>
        <div class="column is-narrow">
          <ParticipantInfo :participant="participant"/>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import Avatar from "~/components/Avatar";

export default {
  name: "ParticipantsIndex",
  components: {Avatar},
  computed: mapState({
    darkMode: state => state.theme.darkMode,
  }),
  async asyncData({$content}) {
    const participants = await $content("participants")
      .fetch()
    return {participants}
  }
}
</script>
