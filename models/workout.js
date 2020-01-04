// use mongoose to create a new schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    exName: String,
    rep: Number,
    weight: Number,
    sets: Number,
    duration: Number,
    distance: Number,


    created: {
        type: Date,
        default: Date.now
    }

})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;