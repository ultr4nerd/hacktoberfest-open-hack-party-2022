<template>
  <section class="section">
    <div class="container">
      <h1 class="title" :class="defaultHasText">¡Considera lo siguiente!</h1>
      <div class="content">
        <ol>
          <li>Toma stickers a discreción, son para todxs.</li>
          <li>La red es <em>pcpuma</em> y contraseña del wifi es <em>mango2022</em> (en minúsculas).</li>
          <li>Habrá comida al final así que no te vayas.</li>
          <li>Cuando entres, guarda silencio para que dejes escuchar a lxs asistentes.</li>
          <li>
            Ingresa a la charla virtual para poder visualizar las diapositivas.
            Si no puedes, intenta en este <a href="https://gdg.community.dev/j/cwekr2tdpb9ju/">enlace</a>,
            si no, obtén un boleto híbrido en <a href="https://gdg.community.dev/e/m2rdyu/">https://gdg.community.dev/e/m2rdyu/</a>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "InPerson",
  computed: mapGetters({
    defaultHasText: "theme/defaultHasText",
  }),
}
</script>

<style scoped>

</style>
