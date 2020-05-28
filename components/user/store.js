const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function getUserS(id) {
  const UserInfo = await Model.find({
      _id: id
  });
  return UserInfo
}

module.exports = {
    addUser,
    getUserS,
}