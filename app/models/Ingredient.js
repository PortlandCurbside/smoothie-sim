import mongoose from "mongoose"
import { ParticleSchema } from './Particle'

const IngredientSchema = new mongoose.Schema({
    name: String,
    thumbnail: String,
    gltfModel: String,
    dimensions: { 
        x: Number, 
        y: Number, 
        z: Number
    },
    liquidProps: {
        volume: Number,
        colors: [String],
        viscocity: Number
    },
    particles: [ParticleSchema]
})

module.exports = mongoose.models.Ingredient || mongoose.model('Ingredient', IngredientSchema)