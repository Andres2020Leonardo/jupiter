const { json } = require('body-parser')
const con = require('../database/conexion')
Usuario = {}

Usuario.createUsuario=(req,res)=>{
     res.send('si')
}

Usuario.all=(req,res)=>{
    var result = con.query(
        'SELECT * FROM usuario',
        [req.documento, req.password],
        function(err, rows, fields)  {
          
          res.json(rows);
        }
      )
        

      
      
}

Usuario.login=(req,res)=>{
    var result = con.query(
        'SELECT * FROM usuario WHERE documento = ? AND password = ?',
        [req.documento, req.password],
        function(err, results) {
          console.log(results)
        }
      )

     
}

module.exports = Usuario;