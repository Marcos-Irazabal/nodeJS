const { response, request } = require('express');
const User = require("../models/user.model.js")
const bcrypt = require("bcryptjs") ;


const usuariosGet =async (req = request, res = response) => {
    const {limit = 5, from =0}=req.query; //parametros del URL
    const queryTotal = {state:true}
    /* estas funciones ahora las pongo en el Promise,all([])
    const users =await User.find(queryTotal)
        .skip(Number(from))
        .limit(Number(limit))
    ;
    const total =await User.countDocuments(queryTotal);
    */

    //lo siguiente es para poder ejecutar las funciones q usan un await al mismo tiempo
    //asi no se frena el codigo 2 veces
    //hace todas las funciones async q esten en el arreglo al mimso tiempo
    const response = await Promise.all([
        //promesa 1
        User.find(queryTotal)
            .skip(Number(from))
            .limit(Number(limit)) ,
        //promesa 2
        User.countDocuments(queryTotal)
    ])

    //desestructuro para q no me quede la respuesta como un arreglo
    let [total,users]=response

    res.json({
        total,
        users
    });
}

const usuariosPost = async(req, res = response) => {

    const {name,password,email,role} = req.body;
    const user=new User({name,password,email,role});

    salt=bcrypt.genSaltSync();
    user.password=bcrypt.hashSync(password,salt)

    user.save();

    res.json({
        user
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const {_id, password,google,email,...rest}=req.body;

    if (password){
        salt=bcrypt.genSaltSync();
        rest.password=bcrypt.hashSync(password,salt)
    }
    const user = await User.findByIdAndUpdate(id,rest)

    res.json({
        msg: 'put API - usuariosPut',
        user
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async (req, res = response) => {
    const { id }=req.params
    //eliminacion fisica
    //const user =await User.findByIdAndDelete(id);

    //eliminacion logica
    const deletedUser =await User.findByIdAndUpdate(id,{state:false})

    const autenticatedUser = req.user
    
    res.json({deletedUser,autenticatedUser});
}

//


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}