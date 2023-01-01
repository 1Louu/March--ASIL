<template>
    <div>
        <h1>Gestion d'inventaire</h1>
        <v-form class="insert">
        <v-btn>Ajouter</v-btn>
        <v-btn>Supprimer</v-btn>
        <v-text-field
        v-model="message2"
        outlined
        label="Nom"/>
        <v-text-field
        v-model="message2"
        outlined
        label="Nom"/>
        <v-text-field
        v-model="message2"
        outlined
        label="Nom"/>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'GestionInventaire'
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.insert
    background: white 
    padding: 30px
    display: flex
    flex-direction: row
</style>