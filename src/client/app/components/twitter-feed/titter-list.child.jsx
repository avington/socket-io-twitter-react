var tweetApp = tweetApp || {};

(function(){

    var TwitterList = React.createClass({
        propTypes: {
          tweets: React.PropTypes.array.isRequired
        },
        mapTweets: function(tweet){
            return (
                <tweetApp.TweetComponent key={tweet.id} tweet={tweet} />
            )
        },
        render: function(){
            if (this.props && this.props.tweets){
                var tweets = this.props.tweets.map(this.mapTweets) || [];
            } else {
                tweets = [];
            }

            return (
                <div className="tweet-container">
                    {tweets}
                </div>
            );
        }

    });

    tweetApp.TwitterList = TwitterList;


})();