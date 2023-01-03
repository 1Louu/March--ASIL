<template>
    <div class="Menu">
        <div class="left-menu">
            <h1>Sélection de produit</h1>
            <div class="columns list-item">
                <div class="column item" v-for="(item) in items"
                v-bind:item="item"
                v-bind:key="item.id">
                    <p>{{ item.nom }}</p>
                    <p>Quantité: {{ item.quantité }}</p>
                    <p>Prix Unique: {{ item.prix_unique }}€</p>
                </div>
            </div>
        </div>
        <div class="right-menu columns">
            <h1>Produit Sélectionné</h1>
            <div class="list-select">
                
            </div>
        </div>
    </div>
</template>

<script>
import produitService from '@/../produitService.js'; 

export default {
    data() {
        return{
            items:[],
            error: '',
        };
    }, 
    async created() {
        try{
            this.items = await produitService.getProduit();
            console.log(this.items);
        }catch (err) {
            this.error = err.message;
            console.log(this.error);
        }
    }
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.Menu
    display: flex
    margin: auto
    margin-top: 5vh
    width: 80vw

.left-menu
    display: flex
    flex-direction: column
    h1
        border-top-left-radius: 10px
        height: 55px
        background: $Color1
        text-align: center
        color: $Light
        border-left: #00000033 7px solid
        border-top: #00000033 7px solid
    .list-item
        background: $Light
        width: 60vw
        height: 80vh
        overflow: auto
        border-bottom-left-radius: 10px
        border-left: #00000033 7px solid
        border-bottom: #00000070 7px solid
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: start
        align-items: flex-start
        padding: 10px
        .item 
            background: $Color2
            display: flex
            font-weight: bold
            color: $Light
            flex-direction: column
            padding: 5px
            text-align: left
            width: fit-content
            height: fit-content
            margin-top: 10px
            margin-right: 10px
            border-radius: 20px
            border: 3px solid #00000070
            font-size: 20px
            padding: 20px
            box-shadow: #00000059 3px 3px 3px 1px
            margin-bottom: 10px
            margin-top: auto

.right-menu
    display: flex
    flex-direction: column
    h1
        border-radius: 0px
        border-top-right-radius: 10px
        height: 55px
        background: $Color1-C
        text-align: center
        color: $Light
        border-right: #00000070 7px solid
        border-top: #00000033 7px solid
    .list-select
        display: flex
        flex-direction: column
        background: $Light2
        border-bottom-right-radius: 10px
        width: 20vw
        height: 80vh
        border-right: #00000070 7px solid
        border-bottom: #00000070 7px solid
</style>