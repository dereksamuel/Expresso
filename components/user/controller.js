const store = require('./store');

function addUser(name) {
  if(!name) {
    return Promise.reject('Nombre invalido');
  }
  const User = {
      name,
  };
  return store.addUser(User);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    store.getUserS(id)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
    addUser,
    getUser,
}
