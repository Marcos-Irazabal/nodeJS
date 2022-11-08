const {check} = require("express-validator")
const { Router } = require('express');
const {isRoleValid,isEmailUsed,existsUserById} = require("../db/validator-helper.db.js")
const {validateField} = require("../middlewares/field-validator.js")

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id',[
    check("id","no es un id valido").isMongoId(),
    check("id").custom(existsUserById),
    check("role").custom(isRoleValid),
    validateField
], usuariosPut );

//check es un middleware, los cuales van entre la ruta y el controlador en un arreglo si son muchos
//luego en el controlador correspondiente checkeamos la respuesta de este middleware
router.post('/',[
    check("email","email no valido").isEmail(),
    check("email").custom(isEmailUsed),
    check("email","email es obligatorio").not().isEmpty(),

    check("password","password debe ser mayor a 6 caracteres").isLength({min:6}),
    check("name","name es obligatorio").not().isEmpty(),

    check("role","role es obligatorio").not().isEmpty(),
    check("role").custom(isRoleValid),

    validateField
    ]
    , usuariosPost );

router.delete('/:id',[
    check("email","email no valido").isEmail(),
    check("id").custom(existsUserById),
    validateField
], usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;