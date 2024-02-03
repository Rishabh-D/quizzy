const express = require('express');
const app = express();
const UserModel = require('./models/User');
const ResponseModel = require('./models/Answers');
var cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

require('./db');

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    // Create a new user document from req.body.user
    console.log(req.body.response);
    const user = new UserModel(req.body.user);

    try {
        // Save the document to the database
        await user.save();
        const response = new ResponseModel({
            sessionID: req.body.user.sessionID,
            responses: req.body.response,
        });
        await response.save();

        // Send a success response
        res.send({ message: 'Data saved successfully' });
    } catch (error) {
        // Send an error response if something goes wrong
        console.log(error.toString());
        res.status(500).send({ error: error.toString() });
    }
});

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
