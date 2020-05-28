const store = require('./store');

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if(!chat || !user || !message) {
        console.error('No hay usuario o mensaje');
        reject('No hay usuario o mensaje 🤬');
        return false;
    }
    const fileUrl = '';
    if(file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }
    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    }
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
    return new Promise((resolve, reject) => {
      store.listes()
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
    });
}

function getMessagesOne(filterUser) {
  return new Promise((resolve, reject) => {
    store.listeOne(filterUser)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function update(id, message) {
  return new Promise(async (resolve, reject) => {
    if(!id || message) reject('invalid data');
    else {
      const result = await store.updateText(id, message);
      resolve(result);
    }
  });
}

function deleteOne(id) {
  return new Promise(async (resolve, reject) => {
    if(!id) reject('Id invalido');
    store.deleteText(id)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
    addMessage,
    getMessages,
    update,
    getMessagesOne,
    deleteOne,
}
