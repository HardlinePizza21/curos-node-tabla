const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

                              
console.clear();


crearArchivo(argv.base,argv.list, argv.hasta)
    .then( feedBack => console.log(feedBack))
    .catch(err => console.log(err))

