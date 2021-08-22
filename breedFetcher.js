const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(error, null);
    }
    for (const item in data) {
      return callback(null, data[item].description);
    }
  });
};

module.exports = { fetchBreedDescription };