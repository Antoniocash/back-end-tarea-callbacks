let fs = require('fs');

fs.unlink('koderRegistry.txt', function (err) {
  if (err) throw err;
  console.log('Registry borrado');
});