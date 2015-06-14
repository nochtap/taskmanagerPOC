var cx=require("compoxure")
var express = require('express')
var config = require('./config.json')

config.environment = process.env.NODE_ENV || 'development';
config.minified = config.environment !== 'development';
console.log('cx config: ', config)

function createEventHandler() {
    return {
        logger: function(level, message) {
            console.log('LOG ' + level + ': ' + message); 
        },
        stats: function(type, key, value) {
             console.log('STAT ' + type + ' for ' + key + ' | ' + value); 
        }
    }
}
var cxEventHandler = createEventHandler();

var compoxureMiddleware = cx(config, cxEventHandler);

var app = express();
app.use(compoxureMiddleware)

app.listen(parseInt(config.parameters.servers.port), function(){
    console.log('start proxy')
})