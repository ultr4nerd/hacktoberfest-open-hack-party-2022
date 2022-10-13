<template>
  <div>
    <section class="section pt-4">
      <div class="container has-text-centered">
        <b-button
          type="is-holo"
          tag="nuxt-link"
          to="/participants"
        >
          Participantes
        </b-button>
      </div>
    </section>
    <section class="section pt-2">
      <div class="container">
        <h5
          class="title has-text-centered"
          :class="defaultHasText"
        >
          ¡Estamos felices de verte por aquí!
        </h5>
        <h2
          class="subtitle has-text-centered"
          :class="defaultHasText"
        >
          No te olvides de lo siguiente
        </h2>
        <div class="content has-text-centered">
            <p class="mb-1">1. Llenar el <a href="https://r76cikd8zzh.typeform.com/to/SXTcbJRY">formulario de registro</a> si no lo has hecho.</p>
            <p>2. Ingresar a <a href="https://discord.gg/VyyAkrKZ">Discord</a> y asignarte un rol.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'IndexPage',
  layout: "home",
  computed: mapGetters({
    defaultIs: "theme/defaultIs",
    defaultHasText: "theme/defaultHasText",
  }),
  async asyncData({$content}) {
    const participants = await $content("participants")
      .fetch()
    return {anyParticipants: participants.length > 0}
  },
}
</script>
