// 参考にした記事
// https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Query.01

var AWS = require("aws-sdk");

AWS.config.loadFromPath("/root/.aws/credentials.json");

AWS.config.update({
  region: "ap-northeast-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();
// 項目を更新する
var table = "tweetdata";
var username = "honahuku";

// 現在時間を取得する
// https://qiita.com/n0bisuke/items/dd28122d006c95c58f9c
require("date-utils");
var dt = new Date();
var formatted = dt.toFormat("YYYY/MM/DD HH24時MI分SS秒");

var params = {
  TableName: table,
  Key: {
    username: username,
  },
  ExpressionAttributeNames: {
    "#dt": "data",
    "#us": "user",
  },
  UpdateExpression: "set #dt.body = :b, #dt.#us = :u",
  ExpressionAttributeValues: {
    ":b": "現在日時は " + formatted + " です",
    ":u": "test_user2",
  },
  ReturnValues: "UPDATED_NEW",
};

console.log("Updating the item...");
docClient.update(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to update item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  }
});
