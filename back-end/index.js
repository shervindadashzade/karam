// Import libararies 
const express = require('express');
const dotenv = require('dotenv');

//config dotenv
dotenv.config();

const app = express();
app.listen(process.env.PORT,()=> console.log('Server is up and running....'));

