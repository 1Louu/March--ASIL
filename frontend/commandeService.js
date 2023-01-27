import axios from "axios";

const url = 'http://localhost:5000/commande';

class CommandeService{
    // Get Commande
    static getCommande() {
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

    // Get Commande By Id
    static getCommandeByID(id){
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

    // Create Commande
    static insertCommande(text){
        return axios.post(url, {
            idprod: text.idprod,
            quantcom: text.quantcom,
            prixcom: text.prixcom,
            datecom: text.datecom,
        });
    }

    // Delete Com
    static deleteCom(id) {
        return axios.delete(`${url}/${id}`);
    }
}

export default CommandeService; 