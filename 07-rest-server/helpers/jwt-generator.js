const jwt = require("jsonwebtoken");
//el paquete de json web token no se maneja con promesas asi que creo esta funcion para poder usarlo con el async/await
const generateJWT=(uid ="")=>{
    return new Promise( (resolve,reject) =>{
        //el payload debe ser un objeto, aca solamente le mando el uid porque no puede tener info sensible ya que
        //se puede ver por cualquiera que lo intercepte
        const payload ={uid};
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, ( err, token ) => {
 
            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })
    
})}

module.exports=generateJWT;