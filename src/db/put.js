// 参考にした記事
// https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html#GettingStarted.NodeJs.03.01

// aws-sdkの読み込み
var AWS = require("aws-sdk");
// UUID生成用の関数作成
var { v4: uuidv4 } = require("uuid");

// credentialファイルの読み込み
AWS.config.loadFromPath("/root/.aws/credentials.json");

// 読み込んだcredentialファイルの内容からこのプログラム用のプロファイルを設定
AWS.config.update({
  region: "ap-northeast-1",
});

// docClientを利用してDynamoDBと通信
var docClient = new AWS.DynamoDB.DocumentClient();

// パラメーター用変数設定
var table = "tweetdata";
var username = "honahuku";
var userid = uuidv4();
var category = "test";

console.log("userid = ", userid);

//パラメーターの設定
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

// 新しい項目を作成する
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
