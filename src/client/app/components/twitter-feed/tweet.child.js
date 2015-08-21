var tweetApp = tweetApp || {};

(function(){
    'use strict';

    var TweetComponent = React.createClass({displayName: "TweetComponent",
        propTypes: {
            tweet: React.PropTypes.object.isRequired
        },
        render: function(){
            console.log(this.props.tweet);
            var tweet = this.props.tweet;
            return (
                React.createElement("div", {className: "box box-container"}, 
                    React.createElement("div", {className: "box-container-panel box-container-panel-user"}, 
                        React.createElement("img", {src: tweet.user.profile_image_url, alt: tweet.user.name})
                    ), 
                    React.createElement("div", {className: "box-container-panel box-container-panel-text"}, 
                        tweet.text
                    )
                )
            );
        }

    });

    tweetApp.TweetComponent = TweetComponent;

})();

//# sourceMappingURL=../../../app/components/twitter-feed/tweet.child.js.map