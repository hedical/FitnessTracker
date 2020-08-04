const router = require("express").Router();
const fitnessController = require("../controllers/fitness-controller")

// Route to get the last workout :

// router
//     .route("/api/workouts")
//     .get(fitnessController.getLastWorkout)
//     .post(fitnessController.createWorkout)



router.get("/api/workouts", fitnessController.getLastWorkout)
router.post("/api/workouts", fitnessController.createWorkout)
router.put("/api/workouts/:id", fitnessController.addExercise)
router.get("/api/workouts/range", fitnessController.getWorkoutsInRange)

module.exports = router;