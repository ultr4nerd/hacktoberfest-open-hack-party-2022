<template>
  <NuxtLink :to="participant.path">
    <figure class="image is-128x128">
      <img
        :src="participant.imageURL"
        :alt="`Avatar de ${participant.fullName}`"
      />
    </figure>
  </NuxtLink>
</template>

<script>
export default {
  name: "Avatar",
  props: ["participant"],
}
</script>

<style scoped>
img {
  border-radius: 24px;
}
</style>
