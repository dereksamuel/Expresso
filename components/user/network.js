const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then((data) => {
        response.success(req, res, data, 'UserCreated', 201);
    })
    .catch((err) => {
        response.MyError(req, res, err, 500);
    });
});

router.get('/:id', (req, res) => {
  controller.getUser(req.params.id)
    .then((data) => {
        response.success(req, res, data, 'PeticiondeUsuarios', 200);
    })
    .catch((err) => {
      response.MyError(req, res, err, 500);
    })
});

module.exports = router;
