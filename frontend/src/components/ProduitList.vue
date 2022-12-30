<template>
    <h1>right hi</h1>
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

</style>