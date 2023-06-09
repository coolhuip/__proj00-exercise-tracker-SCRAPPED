// We need to require() all the stuff that we need.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');   // Mongoose helps us connect to
                                        // our MongoDB database.

require('dotenv').config(); // This configures s.t. we can have our
                            // environment variables in the dotenv file.

const app = express();  // This is how we will
                        // create our express server.
const port = process.env.PORT || 5000;  // This is the port that
                                        // our server will be on.

app.use(cors());    // This is the CORS middleware.
                    // CORS = Cross-Origin Resource Sharing
app.use(express.json());    // This allows us to parse JSON, since our
                            // server will be receiving AND sending JSON.

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// This starts the server. It starts listening on a certain port.
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
