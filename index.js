// console.log('cheguei')

require("./api/server");

const { version, name } = require('./package.json');

console.log(`<<< ${ name } v${ version } foi iniciado no 'dev' environment >>>`)