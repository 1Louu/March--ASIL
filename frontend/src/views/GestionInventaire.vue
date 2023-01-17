<template>
    <div>
      <v-btn router-link to="/">Shop</v-btn>
      <div class="disp-prod">
        <ListeProd @open="showModal= true"/>
      </div>
    </div>
    <PopAjoutProd v-if="showModal == true" @close="showModal = false, this.refresh()" />
</template>

<script>
import ProduitService from '../../produitService.js';
import PopAjoutProd from '@/components/Popups/PopAjoutProd.vue';
import ListeProd from '../components/ListeProd.vue';
const showModal = false;


export default {
    name: 'GestionInventaire',
    components : {
    ListeProd, 
    PopAjoutProd
    },
   data(){
      return{   
        items: [],
        error: '',
        text: [],
        showModal, 
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
    async refresh() {
      try{
      this.items = await ProduitService.getProduit(); 
    }catch (err) {
      this.error = err.message; 
    }}, 
  }
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.disp-prod
  display: flex
  margin: auto
</style>