<template>
    <div>
        <h1>Gestion d'inventaire</h1>
        <v-btn router-link to="/">Shop</v-btn>
        <v-btn router-link to="/analyse">Analyse</v-btn>
        <div class="insert">
            <v-text-field
            variant="outlined" @input="checkRules"
            label="Nom" v-model="text.nom" required clearable/>
            <v-text-field
            variant="outlined" type="number" @input="checkRules"
            label="quantite" v-model="text.quantite" required clearable/>
            <v-text-field
            variant="outlined" type="number" @input="checkRules"
            label="Prix Unique" v-model="text.prix_unique" suffix="€" clearable required/>
            <div>
                <v-btn v-on:click="createItem">Ajouter</v-btn>
                <v-btn>Supprimer</v-btn>
            </div>
        </div>
        
    </div>
</template>

<script>
import ProduitService from '../../produitService.js';

export default {
    name: 'GestionInventaire',
   data(){
      return{   
        items: [],
        error: '',
        isValid: false, 
        value: '', value2: '', value3: '',
        rules: [
        value => !!value || 'Nécessaire.',
        value => (value || '').length <= 30 || 'Maximum 30 charactères',
        ],
        text: [],
      }
    },
    async created() {
        try{
        this.items = await ProduitService.getProduit(); 
        }catch (err) {
        this.error = err.message; 
        }
    }, 
    methods: {
    async createItem() {
      console.log(this.text);
      await ProduitService.insertProduit(this.text);
      this.text.nom ="";  this.text.quantite =""; this.text.prix_unique = "";
      this.items = await ProduitService.getProduit(); 
    },
    checkRules() {
      this.isValid = this.rules.every(rule => rule(this.value) && rule(this.value2) && rule(this.value3));
    }
  }, 
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.insert
  background: white 
  padding: 30px
  display: flex
  flex-direction: column
</style>