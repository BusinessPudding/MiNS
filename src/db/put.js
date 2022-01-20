// 参考にした記事
// https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Query.01

var AWS = require("aws-sdk");
var { v4: uuidv4 } = require("uuid");

AWS.config.loadFromPath("/root/.aws/credentials.json");

AWS.config.update({
  region: "ap-northeast-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();
// 新しい項目を作成する
var table = "tweetdata";

var username = "honahuku";
var userid = uuidv4();
var category = "test";

console.log("userid = ", userid);

var params = {
  TableName: table,
  Item: {
    username: username,
    userid: userid,
    category: category,
    data: {
      user: "test_user1",
      body: "test_post",
    },
  },
};

console.log("Adding a new item...");

docClient.put(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
