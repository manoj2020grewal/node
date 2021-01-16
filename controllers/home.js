var registerModel = require('../model/register');
const {body, validationResult} = require('express-validator');
const { encrypt, decrypt } = require('../crypto');

module.exports = {

    index: (req, res) => {
        res.render('../views/home/index')
    },

    login: (req, res) => {
        res.render('../views/home/login')
    },

    register: (req, res) => {
        res.render('../views/home/register')
    },

    adduser: (req, res) => {
        const hash = encrypt(req.body.pass)
        console.log(hash.iv)
        console.log(decrypt(hash))
        
        /* var inputData = {
            'name' : req.body.name,
            'email': req.body.email,
            'password' : req.body.pass
        }
        registerModel.register(inputData, function(data){
            if(data){
                return res.redirect('/login');
            }
        }) */  
    }
}