var tweetApp = tweetApp || {};

(function(){
    'use strict';

    var TweetComponent = React.createClass({
        propTypes: {
            tweet: React.PropTypes.object.isRequired
        },
        render: function(){
            console.log(this.props.tweet);
            var tweet = this.props.tweet;
            return (
                <div className="box box-container">
                    <div className="box-container-panel box-container-panel-user">
                        <img src={tweet.user.profile_image_url} alt={tweet.user.name}/>
                    </div>
                    <div className="box-container-panel box-container-panel-text">
                        {tweet.text}
                    </div>
                </div>
            );
        }

    });

    tweetApp.TweetComponent = TweetComponent;

})();
