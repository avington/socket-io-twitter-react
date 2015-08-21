var tweetApp = tweetApp || {};

(function(){

    var TwitterFeed = React.createClass({
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
                <div>
                    <tweetApp.TwitterList tweets={this.state.tweets}/>
                </div>
            )
        }
    });

    React.render(
        <TwitterFeed />,
        document.getElementById('tweets')
    );

})();