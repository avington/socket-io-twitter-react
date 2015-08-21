var tweetApp = tweetApp || {};

(function(){

    var TwitterFeed = React.createClass({displayName: "TwitterFeed",
        getInitialState: function(){
            return {
                tweets: []
            };
        },
        addTweet: function(tweet){

            var tweets = _.cloneDeep(this.state.tweets);
            tweets.splice(0,0,tweet);

            tweets = _.take(tweets, 20);

            this.setState({
                tweets: tweets
            });
        },
        componentWillMount: function(){
            tweetApp.tweetStream(function(tweet){
                this.addTweet(tweet);
            }.bind(this));
        },
        render: function(){
            return (
                React.createElement("div", null, 
                    React.createElement(tweetApp.TwitterList, {tweets: this.state.tweets})
                )
            )
        }
    });

    React.render(
        React.createElement(TwitterFeed, null),
        document.getElementById('tweets')
    );

})();
//# sourceMappingURL=../../../app/components/twitter-feed/twitter-feed.js.map