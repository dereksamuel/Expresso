const Model = require('./model');

function add(message) {
  try {
    const myMessage = new Model(message);
    return myMessage.save();
  } catch(error) {
    return console.error(error);
  }
}

function listes(filterUser) {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if(filterUser !== null) {
      filter = {
        user: filterUser
      };
      const Messages = await Model.find(filter)
        .populate('user')
        .exec((err, populated) => {
          if(err) {
            reject(err);
            return null;
          }
          resolve(populated);
        })
      resolve(Messages);
    }
  });
}

async function updateText(id, message) {
  try {
    const FoundMessages = await Model.findOne({
      _id: id
    });
    FoundMessages.message = message;
    const newMessage = await FoundMessages.save();
    return newMessage;
  } catch (error) {
    return console.error('mi error: ' + error);
  }
}

function deleteText(id) {
  return Model.deleteOne({
    _id: id
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
}

module.exports = {
    add,
    listes,
    updateText,
    deleteText,
}

/*
Bases de Datos Relacionales: no es una base de datos muy flexible, pero tiene a favor su gran soporte y el enorme desarrollo en herramientas para su uso. Si necesitamos cambiar un valor de un campo debemos hacerlo con todos los campos de nuestra BD, en cambio con NoSQL o No Relacional no es así.

Bases de Datos No Relacionales: son de bases de datos sin una tabla fija como las que sí se encuentran en las bases de datos relacionales, lo que permite una alta escalabilidad en ellas. Además, es abierta y por lo tanto flexible a diferentes tipos de datos y no necesita tantos recursos para ejecutarse; de hecho, el hardware necesario no cuesta mucho.
*/
