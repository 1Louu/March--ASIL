<template>
    <ProduitList/>
    <v-btn class="wtf" router-link to="/gestion-inventaire">Gestionnaire d'inventaire</v-btn>
</template>

<script>
import ProduitList from "../components/ProduitList.vue";
export default {
    name: 'MainPage',
    components: {
        ProduitList, 
    }
}
</script>

<style scoped lang="sass">
.wtf
    margin-left: 40vw
    margin-top: 20px
</style>