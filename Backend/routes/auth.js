const express = require('express');
const { register } = require('../controllers/authContorller');

const AuthRouter = express.Router();

AuthRouter.post('/register',register)

module.exports ={
    AuthRouter
}

