// Import express
import express from "express";

// import general
import {
    showProduits,
    showProduitByID,
    insertProduit,
    updateProduit,
    deleteProduitByID,
} from "../controllers/produit.js";

// Init express router
const router = express.Router(); 

// Get all product 
router.get("/produit", showProduits);

// Get single product
router.get("/produit/:id", showProduitByID);

// Create new product 
router.post("/produit", insertProduit);

// Update product
router.put("/produit/:id", updateProduit);

// Delete product
router.delete("/produit/:id", deleteProduitByID);

// Export default router
export default router; 