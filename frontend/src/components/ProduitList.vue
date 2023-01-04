<template>
    <div class="Menu">
        <div class="left-menu">
            <h1>Sélection de produit</h1>
            <div class="liste-produit">
                <div class="produit" v-for="(item) in items"
                v-bind:item="item"
                v-bind:key="item.id"  >
                    <p>{{ item.nom }}</p>
                    <p>quantite: {{ item.quantite }}</p>
                    <p>Prix Unique: {{ item.prix_unique }}€</p>
                    <v-btn @click="addToCart(item)" v-if="!atquantiteLimit(item)">Ajouter</v-btn>
                </div>
            </div>
        </div>
        <div class="right-menu columns">
            <h1>Produit Sélectionné</h1>
            <div class="list-select">
                <div class="cartitem" v-for="(Citem) in cart"
                v-bind:item="Citem"
                v-bind:key="Citem.id">  
                    <p>{{ Citem.nom }}</p>
                    <p>quantite: {{ Citem.quantite }}</p>
                    <p>Prix Unique: {{ Citem.prix_unique }}€</p>
                    <v-btn @click="removeFromCart(Citem)" v-if="inCart(Citem.id)">Enlever</v-btn>
                </div>
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
            cart: [],
        };
    }, 
    async created() {
            // Retrieve the saved cart from local storage when the component is created
        this.cart = JSON.parse(localStorage.getItem('cart')) || []
        try{
            this.items = await produitService.getProduit();
            console.log(this.items);
        }catch (err) {
            this.error = err.message;
            console.log(this.error);
        }
    }, 
    methods: {
        addToCart(item) {
         // Check if the item is already in the cart
        const cItem = this.cart.find(i => i.id === item.id)

        if (cItem) {
        // Update the quantite of the item in the cart
        cItem.quantite++
        } else {
        // Add the item to the cart with a quantite of 1
        this.cart.push({ id: item.id, name: item.name, quantite: 1 })
        }

        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        removeFromCart(item) {
        // Remove the item from the cart
        this.cart = this.cart.filter(i => i.id !== item.id)

        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        inCart(item) {
        // Check if the item is in the cart
        return this.cart.some(i => i.id === item.id)
        },
        atquantiteLimit(item) {
        // Check if the item is in the cart and at the quantite limit
        const cItem = this.cart.find(i => i.id === item.id)
        return cItem && cItem.quantite >= item.quantite
        },
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
    .liste-produit
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
        padding: 10px
        align-content: flex-start

        .produit 
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
        overflow: auto
        .cartitem 
            background: $Color2
            display: flex
            font-weight: bold
            color: $Light
            flex-direction: column
            padding: 5px
            text-align: left
            margin: 20px 10px 0px 20px
            width: stretch
            height: fit-content
            border-radius: 20px
            border: 3px solid #00000070
            font-size: 20px
            padding: 20px
            box-shadow: #00000059 3px 3px 3px 1px

</style>