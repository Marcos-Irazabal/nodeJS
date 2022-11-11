const { request, response } = require("express")


const isAdminRole=(req=request,res=response,next) =>{
    const user = req.user;
    if(!user){
        return res.status(500).json({
            msg:"estoy queriendo verificar el rol antes de verificar el token jwt"
        })
    }

    if(user.role==="ADMIN_ROLE"){
        next();
    }else{
        return res.status(401).json({
            msg:"unauthorized- only admin users can delete users"
        })
    }

}

const hasRole=(...roles)=>{
    return (req,res=response,next)=>{
        const user =req.user
        if(!user){
            return res.status(500).json({
                msg:"estoy queriendo verificar el rol antes de verificar el token jwt"
            })
        }
        if(!roles.includes(user.role)){
            return res.status(401).json({
                msg:"unauthorized- this user dont have roles to do this"
            })
        }
        next()
    }
}

module.exports={isAdminRole, hasRole}
