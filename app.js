const express = require('express');

const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const exphbs = require('express-handlebars');
const posts = require('./Posts');

require('dotenv/config');


//middleware
app.use(bodyParser.json());
app.use(cors());



//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);








//routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});


//connect to db

mongoose.connect('mongodb+srv://user_2:pass123@testcluster.kxweh.mongodb.net/restapiproject?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => 
console.log('connected to db!')
);



// how to we start listening to the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));