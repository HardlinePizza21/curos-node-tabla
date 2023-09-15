const fs = require('fs');

require('colors')

const crearArchivo = async(base = 5, show, hasta) => {
    
    try{

        let salida = "";
    
        for(let i = 1;i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        } 
        
        if(show){
            console.log(`============== \n Tabla del ${base} \n==============`.america)
            console.log(salida.rainbow)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)

        return `tabla-${base}.txt creada`.bgRed

    }catch(err){

        throw err;

    }

    

}

module.exports = {
    crearArchivo, 
}




