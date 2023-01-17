<template>
    <div class="liste-produit">
        <div class="titleProd">
          <h1>Liste de Produit</h1>
          <v-btn v-on:click="$emit('open')" size="normal" icon="mdi-plus-box"></v-btn>
        </div>
        <div class="produit" v-for="(item) in items"
        v-bind:item="item"
        v-bind:key="item.id"  >
            <p>{{ item.nom }}</p>
            <p>quantité: {{ item.quantite }}</p>
            <p>Prix Unique: {{ item.prix_unique }}€</p>
            <div>
            <v-btn v-on:click="deleteProd(item.id)">Supprimer</v-btn>
            <v-btn>Editer</v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import ProduitService from '../../produitService.js';
import PopAjoutProd from './Popups/PopAjoutProd.vue';

export default {
    name: 'ListProd',
    component: {
      PopAjoutProd
    },
    data(){
      return{   
        items: [],
        error: '',
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
      this.text.nom ="";  this.text.quantite =""; this.text.prix_unique = "";
      this.items = await ProduitService.getProduit();
      this.showModal=false;
    }, async deleteProd(id){
      await ProduitService.deleteProd(id); 
      this.items = await ProduitService.getProduit(); 
    }
  }, 
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.liste-produit
  background: $Light
  width: 40vw
  height: 80vh
  overflow: auto
  border-top-left-radius: 20px
  .produit
    background: $Color2
    padding: 20px
    margin: 20px
    border-radius: 10px
.titleProd
  display: flex
  flex-direction: row
  background: $Color1
  text-align: center
  border-top-left-radius: 20px
  h1
    margin: auto
  button
    width: 40px
    height: 40px
    margin: 5px
</style>