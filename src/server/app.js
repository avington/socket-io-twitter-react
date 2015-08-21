/**
 * Created by smoseley on 8/14/2015.
 */
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3333,
    path = require('path'),
    environment = process.env.NODE_ENV,
    twitter = require('twitter'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    twitterConfig = require('./secret/twitter'),
    tweets = new twitter(twitterConfig.config);

console.log('** DEV **');
app.use(express.static('./src/client/'));

http.listen(port, function(){
    console.log('listening on port ' + port);
});

io.on('connection', function (socket) {
    console.log('User connected. Socket id %s', socket.id);

    socket.on('disconnect', function () {
        console.log('User disconnected. %s. Socket id %s', socket.id);
    });
});

tweets.stream('statuses/filter', { track: 'javascript' }, function(stream) {
    stream.on('data', function (data) {
        io.sockets.emit('tweet', data);
        console.log(data.text);
    });
});




