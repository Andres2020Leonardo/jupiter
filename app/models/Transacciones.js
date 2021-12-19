const { json } = require('body-parser')
const con = require('../database/conexion')
Transacciones = {}




Transacciones.createTransacciones = (req, res) => {

  let fecha = Date.now();
  let fechaActual = new Date(fecha);
  if (req.body.tipoTransaccion == "entrada") {



    try {

      var result = con.query(
        "SELECT * FROM productos where idProdcuto = ?",
        [req.body.codigoPro],
        function (err, rows, fields) {
          if ((rows.length > 0)) {
            var result = con.query(
              'SELECT idProdcuto,saldo FROM transacciones WHERE idProdcuto = ? ORDER BY fechaTransaccion DESC LIMIT 0, 1 ',
              [req.body.codigoPro],
              function (err, rows, fields) {
                if (rows.length > 0) {

                  let resultado = rows[0];
                  let saldo = parseInt(req.body.cantidad) + resultado.saldo;
                  let valorTotal = parseInt(req.body.cantidad) * parseInt(req.body.valor);
                  console.log(saldo)

                  var result = con.query(
                    "INSERT INTO transacciones (tipoTransaccion, fechaTransaccion, idProdcuto, valorUnitario, valorTotal, Cantidad, descripcion, saldo) VALUES (?,?,?,?,?,?,?,?)",
                    [req.body.tipoTransaccion, fechaActual, req.body.codigoPro, req.body.valor, valorTotal, req.body.cantidad, req.body.descripcion, saldo],
                    function (err, rows, fields) {

                      res.json({ vali: true })
                    }
                  )

                } else {

                  var result = con.query(
                    "INSERT INTO transacciones (tipoTransaccion, fechaTransaccion, idProdcuto, valorUnitario, valorTotal, Cantidad, descripcion, saldo) VALUES (?,?,?,?,?,?,?,?)",
                    [req.body.tipoTransaccion, fechaActual, req.body.codigoPro, req.body.valor, valorTotal, req.body.cantidad, req.body.descripcion, req.body.cantidad],
                    function (err, rows, fields) {

                      res.json({ vali: true })
                    }
                  )

                }


              }
            )
          } else {
            res.json({
              vali: false,
              msg: 'Producto no encontrado'
            })
          }
        }
      )


    } catch (error) {
      res.json('error en la base de datos')
    }

  } else if (req.body.tipoTransaccion == "salida") {
    try {

      var result = con.query(
        "SELECT * FROM  productos where idProdcuto = ?",
        [req.body.codigoPro],
        function (err, rows, fields) {
          if ((rows.length > 0)) {
            var result = con.query(
              'SELECT idProdcuto,saldo FROM transacciones WHERE idProdcuto = ? ORDER BY fechaTransaccion DESC LIMIT 0, 1 ',
              [req.body.codigoPro],
              function (err, rows, fields) {
                if (rows.length > 0) {

                  let resultado = rows[0];
                  let saldo = resultado.saldo - parseInt(req.body.cantidad) ;
                  let valorTotal = parseInt(req.body.cantidad) * parseInt(req.body.valor);
                  console.log(saldo)
                  if (saldo < 0) {
                    res.json({ vali: false, msg: "La cantidad excede el saldo" })
                  } else {
                    var result = con.query(
                      "INSERT INTO transacciones (tipoTransaccion, fechaTransaccion, idProdcuto, valorUnitario, valorTotal, Cantidad, descripcion, saldo) VALUES (?,?,?,?,?,?,?,?)",
                      [req.body.tipoTransaccion, fechaActual, req.body.codigoPro, req.body.valor, valorTotal, req.body.cantidad, req.body.descripcion, saldo],
                      function (err, rows, fields) {

                        res.json({ vali: true })
                      }
                    )
                  }


                } else{
                  res.json({ vali: false, msg: "No se encontraron entradas de ese producto" })
                }


              }
            )
          } else {
            res.json({
              vali: false,
              msg: 'producto no encontrado',rows
            })
          }
        }
      )


    } catch (error) {
      res.json('error en la base de datos')
    }
  }
  let valorTotal = req.body.valor * req.body.cantidad;





}
Transacciones.count = (req,res) =>{
  try {
    var result = con.query(
      'SELECT * FROM transacciones ',
      [parseInt(req.query.inicial)],
      function (err, rows, fields) {

        res.json(rows);
      }
    )
  } catch (error) {
    res.json('error en la base de datos')
  }
}
Transacciones.saldo = (req,res) =>{
  console.log(req.body.id)
  try {
    var result = con.query(
      'select idProdcuto , saldo from transacciones where idProdcuto = ? order by fechaTransaccion desc limit 0,1',
      [parseInt(req.body.id)],
      function (err, rows, fields) {

        res.json(rows);
      }
    )
  } catch (error) {
    res.json('error en la base de datos')
  }
}

Transacciones.all = (req, res) => {

  try {
    var result = con.query(
      'SELECT * FROM transacciones order by fechaTransaccion desc limit ? , 10',
      [parseInt(req.query.inicial)],
      function (err, rows, fields) {

        res.json(rows);
      }
    )
  } catch (error) {
    res.json('error en la base de datos')
  }


}







module.exports = Transacciones;