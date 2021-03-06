import dotenv from "dotenv";
import needle from "needle";
console.log("gettweet is run !");
export const export_print = () => {
  dotenv.config();

  const token = process.env.BEARER_TOKEN;
  const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";
  async function getRequest() {
    const params = {
      query: "箱根 -is:retweet OR 温泉 -is:retweet OR 旅館 -is:retweet",
    };

    const res = await needle("get", endpointUrl, params, {
      headers: {
        "User-Agent": "v2RecentSearchJS",
        authorization: `Bearer ${token}`,
      },
    });

    if (res.body) {
      return res.body;
    } else {
      throw new Error("Unsuccessful request");
    }
  }

  (async () => {
    try {
      // Make request
      const response = await getRequest();
      var twitterdata = response.data[0].text + "\n";
      console.log(twitterdata);
    } catch (e) {
      console.log(e);
      process.exit(-1);
    }
    process.exit();
  })();
};
