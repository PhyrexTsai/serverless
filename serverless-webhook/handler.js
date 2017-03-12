'use strict';

function display(object) {
    return JSON.stringify(object, null, 2)
}

module.exports = {
  webhook(event, context, callback) {
    console.log('event', display(event));
    console.log('context', display(context));

    const response = {
      statusCode: 200,
      body: JSON.stringify({ "message": event })
    };

    callback(null, response);
  }
}
