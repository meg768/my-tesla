

console.log('HEJ');

var Request = require('yow/request');


var request = new Request('https://owner-api.teslamotors.com');

var options = {};
options.path = 'oauth/token';


request.post({options:options}).then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})


