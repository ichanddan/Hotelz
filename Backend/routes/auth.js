const express = require('express');
const { register, Login } = require('../controllers/authContorller');

const AuthRouter = express.Router();

AuthRouter.post('/register',register)
AuthRouter.post('/login',Login)

module.exports ={
    AuthRouter
}

