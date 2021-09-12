const { response, request } = require('express')


const usuariosGet = (req=request, res=response)=> {
    const {q,nombre="No Name ",apikey,page,limit} = req.query;
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
const usuariosPost = (req, res)=> {
    const {nombre, edad} = req.body;
    res.json({
      msg: 'POST - controlador',
      nombre,
      edad
    });
    }
 const usuariosPut = (req, res)=> {
     const {id} = req.params;
     res.json({
          msg: 'PUT API - controlador',
          id
        });
        }
const usuariosPatch = (req, res)=> {
         res.json({
             msg: 'PATCH API - controlador'
         });
         }
    const usuariosDelete = (req, res)=> {
         res.json({
             msg: 'DELETE API - controlador'
             });
          }


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}