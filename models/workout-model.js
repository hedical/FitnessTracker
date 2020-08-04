const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    type: {
        type: String,
        required: "Must chose a type"
    },
    name: {
        type: String,
        required: "Must add a name for your exercise"
    },
    duration: {
        type: Number,
        required: "Must insert a number"
    },

    // Resistance specific
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },

    // Cardio specific
    distance: {
        type: Number,
    }
}, { _id: false })


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date(),
    },
    exercises: [subSchema]
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = { Workout } 