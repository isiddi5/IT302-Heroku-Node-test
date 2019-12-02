var request = require('request');
const WorldAPI = "CuRNIUs9LbAyaOntKkfKHr8cbJoTa7c5AJhqkw10Eu3DddcFgO4mTCrBsbJU"
let url = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=" + WorldAPI
request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});