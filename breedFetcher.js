const request = require('request');

const args = process.argv.slice(2);

const breedFetcher = function() {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    if (error) {
      console.log('Request failed!', error);
      return;
    } 
    console.log('response', response && response.statusCode);
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Requested breed name not found!');
      return;
    }
    for (const item in data) {
      console.log(data[item].description);
    }
  });
};
breedFetcher();