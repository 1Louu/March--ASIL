<template>
    <div>
        <h1>Gestion d'inventaire</h1>
        <div class="insert">
            <v-text-field
            variant="outlined" :rules="rules"
            label="Nom" v-model="text.nom" required clearable/>
            <v-text-field
            variant="outlined" :rules="rules2" type="number"
            label="Quantité" v-model="text.quantité" required clearable/>
            <v-text-field
            variant="outlined" :rules="rules" type="number"
            label="Prix Unique" v-model="text.prix_unique" suffix="€" clearable required/>
            <div>
                <v-btn v-on:click="createItem" :disabled="isDisable">Ajouter</v-btn>
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
        rules: [
        value => !!value || 'Nécessaire.',
        value => (value || '').length <= 30 || 'Maximum 30 charactères'
      ], rules2: [
        value => !!value || 'Nécessaire.',
        value => (value || '').length <= 11 || 'Maximum 30 charactères',
        value => (value - Math.floor(value)) == 0 || 'Nombres entière uniquement'
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
      await ProduitService.insertProduit(this.text);
      this.text.nom ="";  this.text.quantité =""; this.text.prix_unique = "";
      this.items = await ProduitService.getProduit(); 
    }
  }, 
  computed: {
    isDisable() { // rework this.
      if (this.text.nom != (!!this.text.nom && ( (this.text.nom || '').length <= 30 ) ) )
        if( this.text.quantité != ( !!this.text.quantité &&  (this.text.quantité || '').length <= 11  &&  (this.text.quantité - Math.floor(this.text.quantité)) == 0 ) )
          if(this.text.prix_unique != (!!this.text.prix_unique && ( (this.text.prix_unique || '').length <= 30 )))
            return false
          else return true
        else return true
      else return true
    } 
  }
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