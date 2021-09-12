const {Router } = require('express')
const { usuariosGet, usuariosDelete, usuariosPost, usuariosPatch, usuariosPut}= require ('../controllers/usuarios.controller')
const router = Router()

router.get('/',usuariosGet);

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)
router.post('/', usuariosPost)
router.patch('/', usuariosPatch)







module.exports = router;