exports.success = function (request, response, message, location, status) {
  console.log(request.query);
  response
    .status(status)
    .header({
        location,
        status: 'true'
    })
    .send(message);
}

exports.MyError = function (request, response, error, status) {
  response
    .status(status)
    .send(error);
  console.log(error)
}