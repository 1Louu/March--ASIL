//Importer connection
import db from "../config/database.js"; 

//Avoir tout produit
export const getProducts=(result)=>{
    db.query("SELECT * FROM produit", (err, results)=>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results); 
        };
    }); 
};

//Prendre un seul produit par ID
export const getProductByID=(id, result)=>{
    db.query("SELECT * FROM produit WHERE produit_id = ?", [id],(err, results) =>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results[0]); 
        };
    });
};

// Insérer un produit
export const insertProduct=(data,result)=>{
    db.query("INSERT INTO produit SET ?", [data],(err, results)=>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            console.log(data);
            result(null, results); 
        };
    });
};

// Mettre à Jour un produit par ID
export const updateProduct = (data, id, result)=>{
    db.query("UPDATE produit SET produit_nom = ?, produit_quantite = ?, produit_prix_unique = ? WHERE produit_id = ?", [data.produit_name, data.produit_quantite, data.produit_prix_unique, id], (err, results)=>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results); 
        };
    });
};

//Supprimer un seul produit par ID
export const deleteProductByID=(id, result)=>{
    db.query("DELETE FROM produit WHERE produit_id = ?", [id],(err, results) =>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results[0]); 
        };
    });
};