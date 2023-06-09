const express = require('express');   // We need to require() all the
const cors = require('cors');         // stuff that we will need.

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

// This starts the server. It starts listening on a certain port.
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
