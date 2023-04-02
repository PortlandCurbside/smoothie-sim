import mongoose from "mongoose"
import { IngredientSchema } from './Ingredient'

const SmoothieSchema = new mongoose.Schema({
    name: String,
    discoveredBy: String,
    discoveredOn: Date,
    ingredients: [IngredientSchema]
})

module.exports = mongoose.models.Smoothie || mongoose.model('Smoothie', SmoothieSchema)