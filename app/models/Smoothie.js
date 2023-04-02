import mongoose from "mongoose"

const SmoothieSchema = new mongoose.Schema({
    name: String,
    discoveredBy: String,
    discoveredOn: Date,
    // ingredientId: # of `servings` of that ingredient
    ingredients: [{ id: mongoose.ObjectId, count: Number }]
})

module.exports = mongoose.models.Smoothie || mongoose.model('Smoothie', SmoothieSchema)