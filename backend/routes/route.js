// Import express
import express from "express";

// import general
import {
    showProduits,
    showProduitByID,
    createProduit,
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
router.get("/produit", createProduit);

// Update product
router.get("/produit/:id", updateProduit);

// Delete product
router.get("/produit/:id", deleteProduitByID);

// Export default router
export default router; 