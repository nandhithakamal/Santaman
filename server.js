var hapi = require('hapi');
var firebase = require('firebase');

var hapiServer = new hapi.Server();

hapiServer.connection({port:3000, host:"localhost"});

hapiServer.register(require('inert'), (err) =>{

    if(err){
        throw err;
    }
    hapiServer.start((err) => {
        if(err){
            throw err;
        }
        console.log(`Server on ${hapiServer.info.uri}`);
    });

    hapiServer.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply){
            reply.file('index.html');
        }
    });
});
