const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');

router.post('/', (req, res) => {
  controller.addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 'ChatCreated', 201);
    })
    .catch((err) => {
      response.MyError(req, res, err, 500);
    });
});

router.get('/:userId', (req, res) => {
    controller.getChat(req.params.userId)
      then((data) => {
        response.success(req, res, data, 'ChatGet', 200);
      })
      .catch((err) => {
        response.MyError(req, res, err, 400);
      });
  });

module.exports = router;
