<template>
  <section class="section">
    <div class="container">
      <h1 v-if="participants.length > 0" class="title" :class="defaultHasText">
        Participantes
      </h1>
      <h1 v-else class="title has-text-centered" :class="defaultHasText">
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
import {mapGetters} from "vuex";
import Avatar from "~/components/Avatar";

export default {
  name: "ParticipantsIndex",
  components: {Avatar},
  computed: mapGetters({
    defaultHasText: "theme/defaultHasText",
  }),
  async asyncData({$content}) {
    const participants = await $content("participants")
      .fetch()
    return {participants}
  }
}
</script>
