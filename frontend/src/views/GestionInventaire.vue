<template>
    <div>
      <v-btn class="link" router-link to="/">Shop</v-btn>
      <div class="disp-prod">
        <ListeProd @open="showModal= true" @open2="showModalUpdate"/>
        <ProdAnalyse/>
      </div>
    </div>
    <PopAjoutProd v-if="showModal == true" @close="showModal = false, this.refresh()" />
    <PopUpdateProd v-if="showModal2 == true" @close="showModal2 = false, this.refresh()"  :id = "idparam"/>
</template>

<script>
import ProduitService from '../../produitService.js';
import PopAjoutProd from '@/components/Popups/PopAjoutProd.vue';
import PopUpdateProd from '@/components/Popups/PopUpdateProd.vue';
import ProdAnalyse from '../components/ProdAnalyse.vue';
import ListeProd from '../components/ListeProd.vue';
const showModal = false;
const showModal2 = false;
const idparam = 0; 


export default {
    name: 'GestionInventaire',
    components : {
    ListeProd, 
    PopAjoutProd, 
    ProdAnalyse, 
    PopUpdateProd
    },
   data(){
      return{   
        items: [],
        error: '',
        text: [],
        showModal, 
        showModal2, 
        idparam,
      }
    },
    methods: {
    async refresh() {
      try{
      this.items = await ProduitService.getProduit(); 
    }catch (err) {
      this.error = err.message; 
    }}, 
    async showModalUpdate(id){
      this.idparam=id;
      this.showModal2= true;
    }
  }
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.disp-prod
  display: flex
  margin: auto

.link
  margin-top: 10px
  margin-bottom: 10px
  margin-left: 48%
</style>