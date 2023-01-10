<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>

<style lang="sass">
@font-face 
  font-family: "CustomFont"
  src: url("assets/font/Cabin-Regular.ttf")
@import "./style/_global.sass"
.v-main
  background-color: $Color2
</style>