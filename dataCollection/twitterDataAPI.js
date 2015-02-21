var Twit = require('twit');
var fs = require('fs');
var twit = new Twit({
	consumer_key : 'hw1jj7aoL2gNV965nPO4MZt5K',
	consumer_secret : 'Az1tAMhOFVmsaAdZ7KgYxMSrB0mSerIcnewOXxf1EefjwBrVk5',
	access_token : '3019789959-ERBxz7qBExk5qDRZev2TUd8njwZbnUKO1jXS4m9',
	access_token_secret : 'zUyVGmbHN7RkOcMpAuf4p00XL5CD2QWEMNi5jyyhDmsAJ'
});

var uk = [ '-9.23', '49.84', '2.69', '60.85' ];
var stream = twit.stream('statuses/filter', { locations: uk });
var LFile = fs.createWriteStream('tweets.log');

stream.on('tweet', processTweet);

function processTweet(tweet) {
    var regexp = /night|weekend/g;
    if(regexp.test(tweet.text)) {
        console.log(tweet.text);
    }
    var strTweet = JSON.stringify(tweet);
    //LFile.write(strTweet+"\n");
    //console.log(tweet);
};
