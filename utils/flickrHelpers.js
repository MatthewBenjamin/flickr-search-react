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

const makeBaseImgURL = (farmID, serverID, id, secret) => {
  return `https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}`;
};

const makeImgSizeURL = (baseImgURL, sizeSuffix) => {
  return `${baseImgURL}${sizeSuffix}.jpg`
}

const makeImgLink = (owner, id) => {
  return `https://www.flickr.com/photos/${owner}/${id}`;
};

const alphabetizeResults = (resultsList) => {
    resultsList.sort(function(a, b) {
        var resultA = a.title.toUpperCase();
        var resultB = b.title.toUpperCase();
        return (resultA < resultB) ? -1 : (resultA > resultB) ? 1 : 0;
    });
};

const parseResponse = (responseData) => {
  let metaData = {
    page: responseData.page,
    pages: responseData.pages,
    perpage: responseData.perpage,
    total: responseData.total
  };

  let photoResults = responseData.photo.map(function(photoInfo) {
    let baseImgURL = makeBaseImgURL(photoInfo.farm,
                                    photoInfo.server,
                                    photoInfo.id,
                                    photoInfo.secret);
    return {
      imgThumbnailURL: makeImgSizeURL(baseImgURL, '_q'),
      imgTinyURL: makeImgSizeURL(baseImgURL, '_m'),
      imgSmallURL: makeImgSizeURL(baseImgURL, '_n'),
      imgMediumURL: makeImgSizeURL(baseImgURL, '_z'),
      imgLargeURL: makeImgSizeURL(baseImgURL, '_c'),
      imgLink: makeImgLink(photoInfo.owner, photoInfo.id),
      id: photoInfo.id,
      title: photoInfo.title
    };
  });

  alphabetizeResults(photoResults);

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
