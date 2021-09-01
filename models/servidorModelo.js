const express = require('express')

class ServidorModelo{


constructor(){
   
    this.app = express();
    this.llamarRutas();


}


levantarServidor(){

    this.app.listen(process.env.PUERTO, function(){
        console.log("servidor encendido" +process.env.PUERTO)
    })
}

llamarRutas(){

      this.app.get('/facturas', function (req, res) {
        res.send('Buenas tardes');
      });

      this.app.post('/facturas/nuevo', function (req, res) {
        res.send('Buenas tardes');
      });

      this.app.put('/facturas/cambiar', function (req, res) {
        res.send('Buenas tardes');
      });

      this.app.delete('/facturas/borrar', function (req, res) {
        res.send('Buenas tardes');
      });
}


}

module.exports=SevidorModelo;