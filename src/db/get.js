// 参考にした記事
// https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html#GettingStarted.NodeJs.03.02

// aws-sdkの読み込み
var AWS = require("aws-sdk");

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

//パラメーターを設定する。プライマリキーは必ず設定。必要ないキーは設定しない
var params = {
  TableName: table,
  Key: {
    username: username,
  },
};

// 項目を読み取る
docClient.get(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to read item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("GetItem succeeded!");
    console.log(JSON.stringify(data, null, 2));
  }
});
