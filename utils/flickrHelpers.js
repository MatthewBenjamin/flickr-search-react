// flickrHelpers.js
import axios from 'axios';

// TODO: replace w/ es6 template string?
const flickrURL = 'https://api.flickr.com/services/rest/?' +
  'method=flickr.photos.search&' +
  'api_key=da4d5964521318630a3613ab6d27f2c9&' +
  'nojsoncallback=1&' +
  'format=json&' +
  'per_page=20&' +
  'safe_search=1&' +
  'sort=relevance&' +
  'text=';

function makeBaseImgURL(farmID, serverID, id, secret) {
  return `https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}`;
}

function makeImgSizeURL(baseImgURL, sizeSuffix) {
  return `${baseImgURL}${sizeSuffix}.jpg`;
}

function makeImgLink(owner, id) {
  return `https://www.flickr.com/photos/${owner}/${id}`;
}

function parseMetadata(responseData) {
  return {
    page: responseData.page,
    pages: responseData.pages,
    perpage: responseData.perpage,
    total: responseData.total,
  };
}

function parsePhotoResults(responseData) {
  const photoResults = responseData.photo.map((photoInfo) => {
    const baseImgURL = makeBaseImgURL(photoInfo.farm,
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
      title: photoInfo.title,
    };
  });
  return photoResults;
}

function alphabetizeResults(resultsList) {
  resultsList.sort((a, b) => {
    const resultA = a.title.toUpperCase();
    const resultB = b.title.toUpperCase();
    if (resultA < resultB) {
      return -1;
    } else if (resultA > resultB) {
      return 1;
    }
    return 0;
  });
}

function parseResponse(responseData) {
  const metaData = parseMetadata(responseData);
  const photoResults = parsePhotoResults(responseData);
  alphabetizeResults(photoResults);

  return { photoResults, metaData };
}

const flickrHelpers = {
  performSearch(queryTerm) {
    const queryURL = flickrURL + queryTerm;
    return axios.get(queryURL)
      .then(function (response) {
        return parseResponse(response.data.photos);
      })
      .catch(function (err) {
        console.warn('Error in Flickr request: ', err);
      });
  },
};

export { flickrHelpers };
