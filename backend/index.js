const todos = require('./routes/todos');
const signUp = require('./routes/signUp');
const signIn = require('./routes/signIn');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/todos', todos);
app.use('/api/signup', signUp);
app.use('/api/signin', signIn);

app.get('/', (req, res) => {
	res.send('Welcome to our todos api');
});


const dbURI = process.env.DB;
mongoose.
	connect(dbURI, { useNewUrlParser: true,  keepAlive: true, useUnifiedTopology: true})
	.catch((error) => console.error('MongoDB connection failed: ', error.message));

mongoose.set("debug", true) // enabling debugging information to be printed to the console for debugging purposes
mongoose.Promise = Promise;
const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

mongoose

	