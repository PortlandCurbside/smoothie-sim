import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI

let clientPromise

if (process.env.NODE_ENV === 'development') {
    // Dev -- Use global variable to preserve client across module reloads
    let cached = global.mongoose

    if (!cached) cached = global.mongoose = { promise: null }

    if (!cached.promise) {
        cached.promise = mongoose.connect(uri)
    }
    clientPromise = cached.promise
} else {
    // Production -- Don't want global client
    clientPromise = mongoose.connect(uri)
}

// Export a connection promise
export default clientPromise