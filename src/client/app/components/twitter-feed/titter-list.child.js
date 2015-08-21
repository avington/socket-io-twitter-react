var tweetApp = tweetApp || {};

(function(){

    var TwitterList = React.createClass({displayName: "TwitterList",
        propTypes: {
          tweets: React.PropTypes.array.isRequired
        },
        mapTweets: function(tweet){
            return (
                React.createElement(tweetApp.TweetComponent, {key: tweet.id, tweet: tweet})
            )
        },
        render: function(){
            if (this.props && this.props.tweets){
                var tweets = this.props.tweets.map(this.mapTweets) || [];
            } else {
                tweets = [];
            }

            return (
                React.createElement("div", {className: "tweet-container"}, 
                    tweets
                )
            );
        }

    });

    tweetApp.TwitterList = TwitterList;


})();
//# sourceMappingURL=../../../app/components/twitter-feed/titter-list.child.js.map