const {Schema,model} =require("mongoose");

const userSchema=Schema({
    name:{
        type:String,
        required:[true,"es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"es obligatorio"]
    },
    image:{
        type:String,
    },
    role:{
        type:String,
        required:[true,"es obligatorio"],
        emun:["ADMIN_ROLE","USER_ROLE"]
    },
    state:{
        type: Boolean ,
        default:true
    },
    google:{
        type: Boolean,
        default:false
    },
})

userSchema.methods.toJSON=function(){
    /*con la linea de abajo le saco los datos que no quiero que se vean al momento de devolver el usuario generado
    en postman , en este caso le saco la version (__v), la contraseña y el _id*/
    const {__v,password,_id,...aux}= this.toObject()
    aux.uid=_id;
    return aux;
}

module.exports= model("User",userSchema)