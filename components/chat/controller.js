const store = require('./store');

function addChat(users) {
    if(!users || Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };
    return store.addS(chat);
}

function listChat(userId) {
    return store.getList(userId);
}

module.exports = {
    addChat,
    listChat,
}
