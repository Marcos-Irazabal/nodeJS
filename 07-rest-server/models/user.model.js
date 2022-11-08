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
    const {__v,password,...aux}= this.toObject()
    return aux;
}

module.exports= model("User",userSchema)