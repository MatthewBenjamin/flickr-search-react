// flickrHelpers.js
import axios from 'axios'

// TODO: replace w/ es6 template string? make CONST?
let flickrURL = 'https://api.flickr.com/services/rest/?' +
  'method=flickr.photos.search&' +
  'api_key=da4d5964521318630a3613ab6d27f2c9&' +
  'nojsoncallback=1&' +
  'format=json&' +
  'per_page=20&' +
  'text=';

const makeImgURL = (farmID, serverID, id, secret, sizeSuffix) => {
  return `https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}${sizeSuffix}.jpg`;
};

const makeImgLink = (owner, id) => {
  return `https://www.flickr.com/photos/${owner}/${id}`;
};

const parseResponse = (responseData) => {
  let metaData = {
    page: responseData.page,
    pages: responseData.pages,
    perpage: responseData.perpage,
    total: responseData.total
  };

  let photoResults = responseData.photo.map(function(photoInfo) {
    return {
      // TODO: add different img sizes for responsive design
      imgURL: makeImgURL(photoInfo.farm,
                         photoInfo.server,
                         photoInfo.id,
                         photoInfo.secret,
                         ''),
      imgThumbnailURL: makeImgURL(
                          photoInfo.farm,
                         photoInfo.server,
                         photoInfo.id,
                         photoInfo.secret,
                         '_q'),
      imgLink: makeImgLink(photoInfo.owner, photoInfo.id),
      id: photoInfo.id,
      title: photoInfo.title
    };
  });

  return { photoResults, metaData };
}

const flickrHelpers = {
  performSearch: function (queryTerm) {
    let queryURL = flickrURL + queryTerm;
    return axios.get(queryURL)
      .then(function(response) {
        return parseResponse(response.data.photos);
      })
      .catch(function(err) {
        console.warn('Error in Flickr request: ', err);
      });
  }
};

export { flickrHelpers }
