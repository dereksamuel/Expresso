const express = require('express');
const multer = require('multer');
const router = express.Router();

const controller = require('./controler');
const response = require('../../network/response');

const upload = multer({
  dest: 'public/files/',
});

router.get('/', (req, res) => {
  const filter = req.query.chat || null;
  controller.getMessages(filter)
    .then((messageList) => {
        response.success(req, res, messageList, 'Home', 200);
    })
    .catch((err) => {
        response.MyError(req, res, `Error raro: ${err}`, 400);
        console.error(error);
    });
});

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 'MessageCreated', 201);
    })
    .catch((error) => {
        response.MyError(req, res, error, 400);
        console.error(error);
    });
});

router.patch('/:id', (req, res) => {
  console.log(req.params.id);
  controller.update(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 'UpdateMessage', 201);
    })
    .catch((err) => {
      response.MyError(req, res, `Error interno: ${err}`, 500);
    });
});

router.delete('/:id', (req, res) => {
  controller.deleteOne(req.params.id)
    .then(() => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 'Delete', 200);
    })
    .catch((err) => {
        response.MyError(req, res, 'Error interno al eliminar', 500);
    });
});

module.exports = router;