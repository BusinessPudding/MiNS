var AWS = require("aws-sdk");

AWS.config.loadFromPath("/root/.aws/credentials.json");

AWS.config.update({
  region: "ap-northeast-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "userdata",
  KeyConditionExpression: "#yr = :yyyy",
  ExpressionAttributeNames: {
    "#yr": "id",
  },
  ExpressionAttributeValues: {
    ":yyyy": "001",
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
