// Import function from product model
import {
    getProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProductByID,
} from "../models/ProduitModel.js";

//get all produits
export const showProduits=(req, res)=>{
    getProducts((err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//get single produit
export const showProduitByID=(req, res)=>{
    getProductByID(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//create new produit
export const insertProduit=(req, res)=>{

    const data = req.body; 
    insertProduct(data, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//update produit
export const updateProduit=(req, res)=>{
    const data = req.body; 
    updateProduct( data,req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//Delete produit
export const deleteProduitByID=(req, res)=>{
    deleteProductByID(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};