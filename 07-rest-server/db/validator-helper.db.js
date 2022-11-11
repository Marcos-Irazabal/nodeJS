const Role = require("../models/role.model.js")
const User = require("../models/user.model.js")

const isRoleValid =async(role ="" )=>{
    const existsRole = await Role.findOne({role})
    if (!existsRole){
        throw new Error("el rol "+role+" no esta definido en ld BD")
    }
}

const isEmailUsed=async(email)=>{
    const existingEmail=await User.findOne({email})
    if (existingEmail){
        throw new Error("el correo "+email+" ya esta en uso")
    }

}

const existsUserById=async(id)=>{
    const existingUser=await User.findById(id)
    if (!existingUser){
        throw new Error("el id "+id+" no existe")
    }

}

module.exports={
    isRoleValid,
    isEmailUsed,
    existsUserById
}