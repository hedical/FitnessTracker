const db = require("../models/workout-model");

module.exports = {
    getLastWorkout: async (req, res) => {
        // Find all workouts
        db.Workout.find({})
            .then((workouts) => res.send(workouts))
            .catch((err) => res.send(err));
    },

    createWorkout: (req, res) => {
        // Create a workout (actual day, empty exercises, empty totalDuration)
        db.Workout.create(req.body)
            .then((workout) => {
                res.send(workout)
                // Save our workout in collection
                workout.save()
            })
            .catch((err) => res.send(err));
    },

    addExercise: async (req, res) => {
        try {
            // target the workout using the URL param
            const targetWorkout = await db.Workout.findById(req.params.id)

            // Adding actual duration to the previous total duration
            targetWorkout.totalDuration += req.body.duration

            // Push the exercise (type, sets, distance ...) to the targeted workout
            targetWorkout.exercises.push(req.body)

            // Save our new workout in collection
            await targetWorkout.save()
            res.send(targetWorkout)
        } catch (err) {
            res.send(err)
        }
    },

    getWorkoutsInRange: async (req, res) => {
        try {
            // find all workouts
            const WorkoutInRange = await db.Workout.find({})
            res.send(WorkoutInRange)
        } catch (err) {
            res.send(err)
        }
    }

}