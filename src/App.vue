<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>

<script>
export default {
  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>