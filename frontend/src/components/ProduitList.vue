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
        height: 50px
        background: $Color1
        text-align: center
        color: $Light
    .list-item
        background: $Color2
        width: 60vw
        height: 80vh
        overflow: auto
        border-bottom-left-radius: 10px
        .item 
            background: $Color1
            display: flex
            font-weight: bold
            color: $Light
            flex-direction: column
            padding: 5px
            text-align: left
            width: fit-content
            margin: 40px
            border-radius: 20px
            font-size: 20px
            padding: 20px
            box-shadow: #00000059 3px 3px 3px 1px

.right-menu
    display: flex
    flex-direction: column
    h1
        border-radius: 0px
        border-top-right-radius: 10px
        height: 50px
        background: $Color1-C
        text-align: center
        color: $Light
    .list-select
        display: flex
        flex-direction: column
        background: $Color2-C
        border-bottom-right-radius: 10px
        width: 20vw
        height: 80vh
</style>