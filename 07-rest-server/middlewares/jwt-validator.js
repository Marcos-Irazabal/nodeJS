const jwt = require("jsonwebtoken");
const { response, request } = require('express');
const User = require("../models/user.model.js")

const validateToken= async (req=request, res = response,next)=>{
    //traigo del header el jwt
    const token=req.header("Authorization");
    
    if (!token){
        //si no tengo token, out
        return res.status(400).json({
            msg:"unauthorized not exists token"
        })
    }

    try { //la funcion jwt verify, verifica el token, si es invalido levanta excepcion, por eso el try-catch
        
        //en el payload tengo tanto el uid del user y la fecha de creacion/expiracion del token
        const payload =jwt.verify(token,process.env.SECRETORPRIVATEKEY);
        const {uid} =payload


        //con esto me traigo el usuario que pidio la eliminacion y lo guardo en la request
        const user = await User.findById(uid);
        req.user = user

        //verifico que el user exista
        if(!user){
            return res.status(401).json({
                msg:"unauthorized- user dont exists"
            })
        }

        //verifico q el user q pidio la baja del otro no este con estado en false (eliminado logicamente)
        if(user.status){
            return res.status(401).json({
                msg:"unauthorized- authenticated user status is false (esta borrado logicamente)"
            })
        }


        next(); //pasa al siguiente middleware del routes/usuario en el metodo delete...
    
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg:"unauthorized- not valid token"
        })
    }
}

module.exports=validateToken;