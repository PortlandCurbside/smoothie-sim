import mongoose from "mongoose"

const IngredientSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    thumbnail: String,
    gltfModel: String,
    isLiquid: Boolean,
    dimensions: { 
        x: Number, 
        y: Number, 
        z: Number
    },
    liquidProps: {
        volume: Number,
        colors: [String],
        viscosity: Number
    },
    particles: [{ id: mongoose.ObjectId, count: Number }]
})

module.exports = mongoose.models.Ingredient || mongoose.model('Ingredient', IngredientSchema)