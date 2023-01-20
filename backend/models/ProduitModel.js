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
    db.query("SELECT * FROM produit WHERE produit.id = ?", [id],(err, results) =>{
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
            result(null, results); 
        };
    });
};

// Mettre à Jour un produit par ID
export const updateProduct = (data, id, result)=>{
    db.query("UPDATE produit SET produit.nom = ?, produit.quantite = ?, produit.prix_unique = ? WHERE produit.id = ?", [data.nom, data.quantite, data.prix_unique, id], (err, results)=>{
        if(err){
            result(err, null);
        }else{
            result(null, results); 
        };
    });
};

//Supprimer un seul produit par ID
export const deleteProductByID=(id, result)=>{
    db.query("DELETE FROM produit WHERE produit.id = ?", [id],(err, results) =>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results[0]); 
        };
    });
};