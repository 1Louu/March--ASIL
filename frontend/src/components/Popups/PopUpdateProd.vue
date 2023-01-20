<template>
    <div class="PopUp">
      <div class="insert">
        <h2>Editer le produit sélectionné ( ID : {{ id}} )</h2>
        <v-text-field
        variant="outlined" @input="checkRules"
        label="Nom" v-model="text.nom" required clearable/>
        <v-text-field
        variant="outlined" type="number" @input="checkRules"
        label="quantite" v-model="text.quantite" required clearable/>
        <v-text-field
        variant="outlined" type="number" @input="checkRules"
        label="Prix Unique" v-model="text.prix_unique" suffix="€" clearable required/>
        <div class="btnset">
            <v-btn @click="updateItem(id)">valider</v-btn>
            <v-btn @click="$emit('close')">Annuler</v-btn>
        </div>
      </div>
    </div>
</template>

<script>
import ProduitService from '../../../produitService.js';

export default {
    name: 'GestionInventaire',
    props: ['id'],
    data(){
      return{   
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
    methods: {
    async updateItem(id) {
      await ProduitService.UpdateProduitByID(id, this.text);
      this.text.nom ="";  this.text.quantite =""; this.text.prix_unique = "";
      this.$emit('close');
    },
    checkRules() {
      this.isValid = this.rules.every(rule => rule(this.value) && rule(this.value2) && rule(this.value3));
    }
  }, 
}
</script>

<style scoped lang="sass">
@import "../../style/_global.sass"
@keyframes appear
  from { opacity: 0 }
  to { opacity: 1 }
.PopUp
  animation-name: appear
  animation-duration: 0.2s
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 98
  background-color: rgba(0,0,0, 0.5)

.insert
  background: white 
  padding: 30px
  display: flex
  flex-direction: column
  width: 40vw
  height: 380px
  animation-name: appear
  animation-duration: 0.2s
  position: absolute
  left: 50%
  top: 50%
  border-radius: 20px
  transform: translate(-50%, -50%)
  h2 
    margin-bottom: 20px
  .btnset
    display: flex
    flex-direction: row
    justify-content: space-evenly
    button
      background: $Color2
      color: white
</style>