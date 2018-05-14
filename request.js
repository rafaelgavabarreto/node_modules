var request = require('request');
var fs = require('fs');

console.log('Downloading image...');

request.get('https://sytantris.github.io/http-examples/future.jpg') // Note 1
  .on('error', function(err) { // Note 2
    throw err;
  })
  .on('response', function(response) { // Note 3
    console.log('Response Status Code: ', response.statusCode +
      '\nStatus Message: ', response.statusMessage +
      '\nResponse Headers: ',response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg')); // Note 4
console.log('Download complete.');
