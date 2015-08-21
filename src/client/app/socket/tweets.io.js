/**
 * Created by smoseley on 8/14/2015.
 */
var tweetApp = tweetApp || {};

(function () {

    tweetApp.tweetStream = function(callback){
        var socket = io.connect();
        var self = this;

        socket.on('tweet', function (data) {
            callback(data);
        });
    };

})();