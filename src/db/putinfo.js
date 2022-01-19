// 参考にした記事
// https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Query.01

var AWS = require("aws-sdk");

AWS.config.loadFromPath("/root/.aws/credentials.json");

AWS.config.update({
  region: "ap-northeast-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "userdata",
  KeyConditionExpression: "#id = :data",
  ExpressionAttributeNames: {
    "#id": "id",
  },
  ExpressionAttributeValues: {
    ":data": "001",
  },
};

docClient.query(params, function (err, data) {
  if (err) {
    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
  } else {
    console.log("Query succeeded.");
    data.Items.forEach(function (item) {
      console.log(" -", item.id + ": " + item.data);
    });
  }
});
