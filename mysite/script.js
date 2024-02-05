const request = () => {
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/riddles",
      headers: {
        "X-Api-Key": "lyFJM3BK1Kfwjj8a7CXu5w==mgaYU41sxfQBtAHu",
      },
    },
    function (error, response, body) {
      if (error) {
        return console.error("Request failed:", error);
      } else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else {
        return console.log(body);
      }
    }
  );
};
