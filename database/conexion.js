const mongoose = require("mongoose");

async function conectarBD(){

    try{

        await mongoose.connect(process.env.BASEDATOS);

    } catch (error){

    }
}

module.exports = { conectarBD }