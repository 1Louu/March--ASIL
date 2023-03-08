<template>
  <div class="analyse">
    <h2>Analyse</h2>
    <div class="pres-ana">
      <h3>Achat les plus effectués :</h3>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProdAnalyse',
    data(){
      return{   
        items: [],
        error: '',
        text: [],
      }
    }
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.analyse
  margin: auto
  margin-left: 0px
  height: 80vh
  width: 40vw
  h2
    font-size: 30px
    margin: auto
    color: $Light
    background: $Color1-C
    height: 57px
    border-top-right-radius: 20px
    border-right: #00000033 7px solid
    border-top: #00000033 7px solid
    text-align: center
  .pres-ana
    padding: 10px
    background: $Light2
    height: -webkit-fill-available
    border-bottom: #00000070 7px solid
    border-right: #00000070 7px solid
    border-bottom-right-radius: 10px
</style>