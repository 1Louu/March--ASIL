import axios from "axios";

const url = 'http://localhost:5000/produit';

class ProduitService{
    // Get Produit
    static getProduit() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    // Get Produit By Id
    static getProduitByID(id){
        return new Promise ((resolve,reject) => {
            axios.get(url + id).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    // Create Produit
    static insertProduit(text){
        
        if( text.quantite == 0){
            text.quantite = 1;
        }
        return axios.post(url, {
            nom: text.nom,
            quantite: text.quantite,
            prix_unique: text.prix_unique,
        });
    }

    // Delete Prod
    static deleteProd(id) {
        return axios.delete(`${url}/${id}`);
    }
}

export default ProduitService; 