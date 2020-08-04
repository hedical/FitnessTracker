const db = require("../models/workout-model");
const workoutModel = require("../models/workout-model");

module.exports = {
    getLastWorkout: async (req, res) => {
        db.Workout.find({})
            .then((workout) => res.send(workout))
            .catch((err) => res.send(err));
    },

    createWorkout: (req, res) => {
        db.Workout.create(req.body)
            .then((workout) => {
                res.send(workout)
                workout.save()
            })
            .catch((err) => res.send(err));
    },

    addExercise: async (req, res) => {
        try {
            const targetWorkout = await db.Workout.findById(req.params.id)

            targetWorkout.totalDuration += req.body.duration

            targetWorkout.exercises.push(req.body)
            await targetWorkout.save()
            res.send(targetWorkout)
        } catch (err) {
            res.send(err)
        }
    },

    getWorkoutsInRange: async (req, res) => {
        try {
            const WorkoutInRange = await db.Workout.find({})
            res.send(WorkoutInRange)
        } catch (err) {
            res.send(err)
        }
    }

}