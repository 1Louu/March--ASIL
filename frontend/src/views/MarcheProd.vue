<template>
    <v-btn class="link" router-link to="/gestion-inventaire">Gestionnaire d'inventaire</v-btn>
    <div class="Menu">
        <div class="left-menu">
            <h1>Sélection de produit</h1>
            <div class="liste-produit">
                <div class="produit" v-for="(item) in items"
                v-bind:item="item"
                v-bind:key="item.id"  >
                    <p>{{ item.nom }}</p>
                    <p>quantité: {{ item.quantite }}</p>
                    <p>Prix Unique: {{ item.prix_unique }}€</p>
                    <v-btn class="btn" @click="addToCart(item)" v-if="!atquantiteLimit(item)">Ajouter</v-btn>
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
                    <p>Quantité: {{ Citem.quantite }}</p>
                    <p>Prix: {{ Citem.prix }}€</p>
                    <v-btn class="btn" @click="removeFromCart(Citem)">Enlever</v-btn>
                </div>
            </div>
            <div class="cart-check">
                <p>Prix Total : {{ total }}€</p>
                <div>
                    <v-btn @click="removeAllFromCart">Annuler</v-btn>
                    <v-btn @click="payAllFromCart">Payer</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import produitService from '@/../produitService.js'; 
import CommandeService from '@/../commandeService.js';

export default {
    data() {
        return{
            items:[],
            error: '',
            cart: [],
            total: 0,
            cElement: [],
            text: [],
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
        delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        },
        async refresh() {
            try{
            this.items = await produitService.getProduit(); 
            }catch (err) {
            this.error = err.message; 
        }}, 
        totalPrice(){
            this.total= 0;
            this.cart.forEach(element => this.total= element.prix + this.total);
        },
        addToCart(item) {
         // Check if the item is already in the cart
        const cItem = this.cart.find(i => i.id === item.id)

        if (cItem) {
        // Update the quantite of the item in the cart
        cItem.quantite++;
        cItem.prix = cItem.prix + cItem.prix_unique;
        } else {
        // Add the item to the cart with a quantite of 1
        this.cart.push({ id: item.id, nom: item.nom, quantite: 1, prix: item.prix_unique, prix_unique: item.prix_unique});
        }
        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(this.cart))
        this.totalPrice();
        },
        removeFromCart(item) {
        // Remove the item from the cart
        this.cart = this.cart.filter(i => i.id !== item.id);

        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.totalPrice();
        },
        removeAllFromCart(){
            this.cart= [];
            localStorage.removeItem('cart');
            this.totalPrice();
        },
        inCart(Citem) {
        // Check if the item is in the cart
        return this.cart.some(i => i.id === Citem.id)
        },
        atquantiteLimit(item) {
        // Check if the item is in the cart and at the quantite limit
        const cItem = this.cart.find(i => i.id === item.id)
        return cItem && cItem.quantite >= item.quantite
        }, 
        async payAllFromCart(){
            this.cart.forEach( async element =>{
                const cItem = this.items.find(i => i.id === element.id);
                this.cElement.quantcom = element.quantite;
                this.cElement.idprod = element.id;
                this.cElement.prixcom= element.prix;

                if(cItem.quantite === element.quantite){
                    await CommandeService.insertCommande(this.cElement);
                    await produitService.deleteProd(this.cElement.id);
                }else{
                    await CommandeService.insertCommande(this.cElement);
                    this.text = cItem; 
                    this.text.quantite = this.text.quantite - this.cElement.quantcom;
                    await produitService.UpdateProduitByID(this.text.id, this.text);
                }
            });
            this.removeAllFromCart();
            await this.delay(1000);
            this.refresh();
        },
    }
}
</script>

<style scoped lang="sass">
@import "../style/_global.sass"
.Menu
    display: flex
    margin: auto
    margin-top: 0
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
            flex-direction: column
            padding: 5px
            text-align: left
            width: fit-content
            height: fit-content
            margin-top: 10px
            margin-right: 10px
            border-radius: 20px
            border: 3px solid #00000070
            padding: 20px
            box-shadow: #00000059 3px 3px 3px 1px

            p
                margin-bottom: 6px
                font-size: 18px
                color: black

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
        width: 20vw
        height: 65vh
        border-right: #00000070 7px solid
        overflow: auto
        padding-bottom: 20px
        .cartitem 
            background: $Color2
            display: flex
            font-weight: bold
            flex-direction: column
            text-align: left
            margin: 20px 10px 0px 20px
            width: stretch
            height: fit-content
            border-radius: 20px
            border: 3px solid #00000070
            font-size: 20px
            padding: 20px
            box-shadow: #00000059 3px 3px 3px 1px
            p 
                color: black
                margin-bottom: 8px
    .cart-check
        height: 15vh
        border-left: #00000070 7px solid
        border-bottom: #00000070 7px solid
        border-right: #00000070 7px solid
        border-bottom-right-radius: 10px
        background: $Light
        text-align: center
        display: flex
        flex-direction: column
        p
            font-size: 24px
            text-align: left
            margin: auto
        div
            margin: auto
        button
            margin-left: 32px
            margin-right: 32px


.link
    margin-top: 10px
    margin-bottom: 10px
    margin-left: 45%
</style>