const Model = require('./model');

function addChatS(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function listChat(userId) {
    return new Promise((resolve, reject) => {
      let filter = {};
      if(userId) {
          filter = {
              users: userId,
          }
      }

      Model.find(filter)
        .populate('users')
        .exec((err, populated) => {
          if(err) {
              reject(err);
              return null;
          }
          resolve(populated);
        })
    });
}

module.exports = {
    addChatS,
    listChat,
}
