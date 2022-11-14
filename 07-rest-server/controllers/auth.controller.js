const { response, request, json } = require('express');
const User = require("../models/user.model.js")
const generateJWT  = require("../helpers/jwt-generator.js")
const bcrypt = require("bcryptjs") ;
const { googleVerify } = require('../helpers/google-verify.js');

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

const googleSingIn=async(req, res = response)=>{
    const {id_token} = req.body;

    try {
        const googleUser=await googleVerify(id_token)
        const {name,image,email} = googleUser;
        console.log(googleUser)

        let user = await User.findOne({email});
        if(!user){
            const userValues={
                name,
                email,
                password:"123456",
                image,
                google:true
            }
        user =new User(userValues)
        await user.save();
        }

        if(user.status===false){
            return res.status(400).json({
                msg:"blocked user"
            })
        }

        //genero JSON web token
        const token = await generateJWT(user.id)


        res.json({
            msg: 'login OK',
            user,
            token
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"google token cant validate"
        })
    }


}

module.exports={ login,googleSingIn}