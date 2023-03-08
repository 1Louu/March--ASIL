<template>
    <div class="liste-produit" @refresh="refresh()">
        <div class="titleProd">
          <h2>Liste de Produit</h2>
          <v-btn v-on:click="$emit('open')" size="normal" icon="mdi-plus-box"></v-btn>
        </div>
        <div class="interfaceprod">
          <div class="produit" v-for="(item) in items"
          v-bind:item="item"
          v-bind:key="item.id"  >
              <p>{{ item.nom }}</p>
              <p>quantité: {{ item.quantite }}</p>
              <p>Prix Unique: {{ item.prix_unique }}€</p>
              <div>
              <v-btn v-on:click="deleteProd(item.id)">Supprimer</v-btn>
              <v-btn @click="$emit('open2', item.id)">Editer</v-btn>
              </div>
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
    },async refresh() {
      try{
      this.items = await ProduitService.getProduit(); 
    }catch (err) {
      this.error = err.message; 
    }}
  }, 
}
</script>
<style scoped lang="sass">
@import "../style/_global.sass"
.liste-produit
  width: 40vw
  height: 80vh
  border-top-left-radius: 20px
  border-bottom-left-radius: 20px
  margin: auto
  margin-right: 0px
.interfaceprod
  border-left: #00000033 7px solid
  border-bottom: #00000070 7px solid
  overflow: auto
  background: $Light
  height: -webkit-fill-available
  border-bottom-left-radius:  20px
  .produit
    background: $Color2
    padding: 20px
    margin: 20px
    border-radius: 10px
    border: $Color2-C solid
    width: fit-content
    font-size: 14px
    button:first-child
      margin-right: 20px
.titleProd
  display: flex
  flex-direction: row
  background: $Color1
  text-align: center
  border-top-left-radius: 20px
  border-left: #00000033 7px solid
  border-top: #00000033 7px solid

  h2
    font-size: 30px
    margin: auto
    color: $Light
  button
    width: 40px
    height: 40px
    margin: 5px
</style>