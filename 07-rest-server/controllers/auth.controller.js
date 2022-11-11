const { response, request } = require('express');
const User = require("../models/user.model.js")
const generateJWT  = require("../helpers/jwt-generator.js")
const bcrypt = require("bcryptjs") ;

const login = async(req, res = response) => {

    const {password,email} = req.body;
    const user = await User.findOne({email});

    //email valido
    if(!user){
        return res.status(400).json({
            msg:"email no valido"
        })
    }

    //usuario que no tenga marca de eliminado logico
    if(user.status===false){
        return res.status(400).json({
            msg:"usuario no valido"
        })
    }

    //contraseña valida
    if(! await bcrypt.compareSync(password,user.password)){
        return res.status(400).json({
            msg:"contraseña no valida"
        })
    }

    //genero JSON web token
    const token = await generateJWT(user.id)


    res.json({
        msg: 'login OK',
        usuario:user,
        token:token
    });
}

module.exports={ login }