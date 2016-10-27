// flickrHelpers.js
import axios from 'axios'

// TODO: replace w/ es6 template string
let flickrURL = 'https://api.flickr.com/services/rest/' +
  '?method=flickr.photos.search&' +
  'api_key=da4d5964521318630a3613ab6d27f2c9&' +
  'nojsoncallback=1&' +
  'format=json&' +
  'text=';

const flickrHelpers = {
  performSearch: function (queryTerm) {
    let queryURL = flickrURL + queryTerm;
    return axios.get(queryURL)
      .then(function(response) {
        return response.data.photos;
      })
      .catch(function(err) {
        // TODO: replace w/ template string;
        console.log('Error in Flickr request: ', err);
      });
  }
};

export { flickrHelpers }
