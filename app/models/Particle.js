import mongoose from "mongoose"


const ParticleSchema = new mongoose.Schema({
    name: String,
    color: String,
    shape: String,
    radius: Number,
    mass: Number
})

module.exports = mongoose.models.Particle || mongoose.model('Particle', ParticleSchema)