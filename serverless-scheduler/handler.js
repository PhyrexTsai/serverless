'use strict';

const request = require('request');

module.exports.run = (event, context) => {
  request.post({
    'url': process.env.URL,
    'method': 'POST',
    'header': {
      'content-type': 'application/json'
    },
    'json': {"scheduler":"testing"}
  }, function (error, response, body) {
    if (!error) {
      console.log('[WEBHOOK] url: ' + process.env.URL + ', statusCode: ' + (request && response.statusCode)); // Print the response status code if a response was received
    } else {
      console.log('[WEBHOOK] error: ', error);
    }
  });
};
