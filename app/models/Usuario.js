const { json } = require('body-parser')
const con = require('../database/conexion')
Usuario = {}

Usuario.createUsuario=(req,res)=>{

  try {
    var result = con.query(
      "INSERT INTO usuario (documento, nombres, idRol, descripcion, estado, password) VALUES (?, ?, '2', ?, 'true', ?)",
      [req.body.documento, req.body.nombres, req.body.descripcion ,req.body.password],
      function(err, rows, fields)  {
        if(rows){
          res.json({msg: "usuerio ingresado correctamente", vali: true});
        }else{
          
          var buscar = con.query(
            'SELECT * FROM usuario WHERE documento = ? ',
            [req.body.documento],
            function(err, results) {
              if (results){
                if (results.length > 0 ) {
                  
                  res.json({Error: "nose pudo ingresar usuario porque esta repetido el documento",
                  vali: false})
                } 
              }else{
                res.json('error de la base de datos')
              }
             
            }
          )
        }
        
       
      }
    )  
    
  } catch (error) {
    res.json('error de la base de datos')
  }

    
}

Usuario.updateUsuario=(req,res)=>{
  try {
    var result = con.query(
      "UPDATE usuario SET nombres = ?, idRol = ?, descripcion = ?, estado = ?  WHERE (documento = ?)",      
      [req.nombres,req.idRol, req.descripcion, req.estado, req.documento ],
      function(err, rows, fields)  {
        console.log(err);
        res.json();
      }
    )  
  } catch (error) {
    
    res.json('error en la base de datos')
  }        
}

Usuario.deleteUsuario=(req,res)=>{
  try {
    var result = con.query(
      "DELETE FROM usuario WHERE (documento = ?);",
      
      [req.documento],
      function(err, rows, fields)  {
        console.log(err);
        res.json();
      }
    )  
  } catch (error) {
    
    res.json('error en la base de datos')
  }        
}

Usuario.count=(req,res)=>{

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

Usuario.all=(req,res)=>{

  try {
    var result = con.query(
      'SELECT * FROM usuario limit ? , 10',
      [parseInt(req.query.inicial)],
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
    res.json({val:false, msg:'error de la base de datos'})
  }
    

     
}

module.exports = Usuario;