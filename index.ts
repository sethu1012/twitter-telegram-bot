import {TwitterClient} from 'twitter-api-client';
import Slimbot from 'slimbot';
import {config} from 'dotenv';

const { getAllHandles, updateLastTweetId } = require('./utils');

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

const { status, data } = await getAllHandles();

if (status) {
    const handles = (data["cr_handles"] as []);
    handles.forEach(async (handle) => {
        let params = {
            screen_name: handle["handle_name"],
            include_rts: true,
            exclude_replies: true,
        };
        console.log(handle);
        if (handle["last_tweet_id"]) {
            params["since_id"] = handle["last_tweet_id"];
        }
        console.log(params);
        const tweets = await twitterClient.tweets.statusesUserTimeline(params);
        tweets.reverse();

        for (const tweet of tweets) {
            try {
                let url = `https://twitter.com/${tweet.user.screen_name}/status/`;
                if (tweet.is_quote_status && tweet.retweeted && tweet["retweeted_status"]) {
                    // Retweets
                    url += tweet['retweeted_status']['id_str'];
                } else if (tweet.is_quote_status && !tweet.retweeted && tweet["quoted_status"]) {
                    // QTs
                    url += tweet.id_str;
                } else {
                    // Tweets
                    url += tweet.id_str;
                }
                console.log(url);
                await slimbot.sendMessage(process.env.TELEGRAM_CHANNEL_ID, url);
                await updateLastTweetId(+handle["id"], url.substr(url.lastIndexOf("/") + 1));
            } catch (e) {
                console.log(e, tweet);
            }
        }
    });
}
