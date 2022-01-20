// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search
require('dotenv').config();
const needle = require('needle');



// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = process.env.BEARER_TOKEN;

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

async function getRequest() {

    // Edit query parameters below
    // specify a search query, and any additional fields that are required
    // by default, only the Tweet ID and text fields are returned
    
    const params = {
        'query': "箱根 -is:retweet OR 温泉 -is:retweet OR 旅館 -is:retweet"
        
    }

    const res = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        
        
        
        // for(let i  = 0; i < 10; i++){
        //     console.log(response.data[i].text + '\n');
        // }
        console.log(response.data[0].text + '\n');

        var fs = require('fs');
        var masterData = [];
        var data = {
            body: '現在時刻', 
            tweet: response.data[0].text + '\n',
            user: 'test_user2',
    
};

var item = {
    category: 'test',
    username: 'honahuku',
    data: data,
    userid: 'userid'
};


masterData.push(item)

let masterData2= JSON.stringify({Item: masterData}, null, ' ')

fs.writeFileSync('output.json', masterData2);

    } catch (e) {
        console.log(e);
	    process.exit(-1);
    }
    process.exit();
})();







