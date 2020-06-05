import mongoose from 'mongoose';
const Schema = mongoose.Schema

const CarSchema = new Schema({
    makeName: String,
    makeID: Number,
    modelName: String,
    modelID: Number,
});

export const Car = mongoose.model('Car', CarSchema);