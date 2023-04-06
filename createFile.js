let fs = require('fs');

fs.writeFile('koderRegistry.txt', "" , function (err) {
  if (err) throw err;
  console.log('Registry creado!');
});