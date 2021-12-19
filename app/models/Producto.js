const { json } = require('body-parser')
const con = require('../database/conexion')
Producto = {}

Producto.createProducto=(req,res)=>{
      try {
        var result = con.query(
          "INSERT INTO productos ( nombre, descripcion) VALUES (?,?)",
          
          [req.body.nombreProducto, req.body.descripcionProducto],
          function(err, rows, fields)  {
            res.json({vali:true, msg : 'producto agregado'});
          }
        )  
      } catch (error) {
        
        res.json({vali:false, msg :'error en la base de datos'})
      }        
}


Producto.updateProducto=(req,res)=>{
  try {
    var result = con.query(
      "UPDATE productos SET nombre = ?, descripcion = ? WHERE (idProdcuto = ?);",      
      [req.nombre, req.descripcion, req.idProducto],
      function(err, rows, fields)  {
        console.log(err);
        res.json();
      }
    )  
  } catch (error) {
    
    res.json('error en la base de datos')
  }        
}

Producto.deleteProducto=(req,res)=>{
  try {
    var result = con.query(
      "DELETE FROM productos WHERE (idProdcuto = ?);",
      
      [req.idProducto],
      function(err, rows, fields)  {
        console.log(err);
        res.json();
      }
    )  
  } catch (error) {
    
    res.json('error en la base de datos')
  }        
}


Producto.all=(req,res)=>{

  try {
    var result = con.query(
      'SELECT * FROM productos limit ? , 10',
      [parseInt(req.query.inicial)],
      function(err, rows, fields)  {
   
        res.json(rows);
     
      }
    )  
   
  } catch (error) {
    res.json('error en la base de datos')
  }
    
          
}
Producto.count=(req,res)=>{

  try {
    var result = con.query(
      'SELECT * FROM productos',
      [req.documento, req.password],
      function(err, rows, fields)  {
   
        res.json(rows);
     
      }
    )  
   
  } catch (error) {
    res.json('error en la base de datos')
  }
    
          
}


     


module.exports = Producto;