const express = require('express'); //imports express module to file
const cors = require('cors');//imports cors module

const routes = require('./routes'); //imports routes file 
require('./database').connect(); //connects to database

const app = express();//makes a new server instance

app.use(cors());//makes server allow cross-origin
app.use(express.json());//enables server to understand json requests
app.use(routes);//use routes defined on routes file here

//if PORT number are defined as a environment variable, use it, if not, use 3000
const PORT = process.env.PORT || 5000;

//puts the server to listen
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});