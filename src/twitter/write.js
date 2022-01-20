var fs = require('fs');
var masterData = [];
var data = {
    body: '現在時刻', 
    tweet: 'tweet',
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