// 参考にした記事
// https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html

// エラー解消用にこの記事も参考に
// https://dev.classmethod.jp/articles/dynamodb-update-expression-actions/

var AWS = require("aws-sdk");

AWS.config.loadFromPath("/root/.aws/credentials.json");

AWS.config.update({
  region: "ap-northeast-1",
});

// 項目を読み取る
var docClient = new AWS.DynamoDB.DocumentClient();

var table = "tweetdata";

var username = "honahuku";

var params = {
  TableName: table,
  Key: {
    username: username,
  },
};

docClient.get(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to read item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});
