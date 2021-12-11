const { json } = require('body-parser')
const con = require('../database/conexion')
Usuario = {}

Usuario.createUsuario=(req,res)=>{

     res.send(req.body)
}


Usuario.all=(req,res)=>{

  try {
    var result = con.query(
      'SELECT * FROM usuario',
      [req.documento, req.password],
      function(err, rows, fields)  {
 
        res.json(rows);
       
      }
    )  
  } catch (error) {
    res.json('error en la base de datos')
  }
    
          
}

Usuario.login=(req,res)=>{

  try {
    var result = con.query(
      'SELECT * FROM usuario WHERE documento = ? AND password = ?',
      [req.body.documento, req.body.password],
      function(err, results) {
        if (results){
          if (results.length > 0 ) {
            
              res.json({val: true,
                        user: results[0]          
            })
            
          } else {
              res.json({val: false,
                msg: 'user no existe'})
                
          }
        }
       
      }
    )
  } catch (error) {
    res.json('error de la base de datos')
  }
    

     
}

module.exports = Usuario;