// This is the router that we're creating.
const router = require('express').Router();
// Here, we require() the mongoose model that we recently created.
let Exercise = require('../models/exercise.model');

// This is the first route/endpint that handles incoming HTTP GET requests
// on the slash users URL path.
    // So, we have our root URL, which is localhost 5000.
router.route('/').get((req, res) => {
// Mongoose method that gets a list of all users from MongoDB Atlas database.
    Exercise.find() 
            .then(exercises => res.json(exercises))
            .catch(err => res.status(400).json('Error: ' + err));
});

// This second endpoint handles incoming HTTP POST requests. 
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
               .then(() => res.json('Exercise added!'))
               .catch(err => res.status(400).json('Error: ' + err));
});

// Standard for router files:
// This is the manage module that exports equals router.
// So, we're just exporting the router.
module.exports = router;
