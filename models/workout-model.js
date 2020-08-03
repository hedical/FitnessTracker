const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }
})


const workoutSchema = new Schema({
    day: {
        type: Date,
    },
    exercices: [subSchema]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = { Workout }