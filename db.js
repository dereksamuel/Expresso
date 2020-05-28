const mongoose = require('mongoose');

//no funciona la conección a mongoose
mongoose.Promise = global.Promise;
function connect(url) {
    mongoose.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
      .then(() => {
          console.log('Conectado a la base de datos');
      })
      .catch((err) => {
          console.error(err);
      });
}

module.exports = connect;
