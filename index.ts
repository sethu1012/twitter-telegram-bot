import {TwitterClient} from 'twitter-api-client';
import Slimbot from 'slimbot';
import {config} from 'dotenv';

// load environment file (.env)
config();

// telegram client
const slimbot = new Slimbot(process.env.TELEGRAM_BOT_TOKEN);

// twitter client
const twitterClient = new TwitterClient({
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET_KEY
});

const tweets = await twitterClient.tweets.statusesUserTimeline({
    screen_name: 'handle',
    include_rts: true,
    exclude_replies: true,
});

for (const tweet of tweets) {
    let url = `https://twitter.com/${tweet.user.screen_name}/status/`;
    if (tweet.is_quote_status && tweet.retweeted) {
        // Retweets
        url += tweet['retweeted_status']['id_str'];
    } else if (tweet.is_quote_status && !tweet.retweeted) {
        // QTs
        url += tweet['quoted_status']['id_str'];
    } else {
        // Tweets
        url += tweet.id_str;
    }
    console.log(url);
    await slimbot.sendMessage("-1001271092395", url);
}




