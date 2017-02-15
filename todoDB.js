const Datastore = require("nedb");

const db = new Datastore({
  filename: "todo.db",
  autoload: true
});

module.exports = {
  getTodoItems() {
    return new Promise((resolve, reject) => {
      db.find({}, (err, items) => {
        if (err) {
          reject("Unable to get todo items");
        } else {
          resolve(items.map(({ _id, name, description}) => ({ id: _id, name, description}) ));
        }
      });
    });
  },

  addTodoItem(item) {
    return new Promise((resolve, reject) => {
      db.insert(item, (err, { _id, name, description }) => {
        if (err) {
          reject("Unable to insert new item");
        } else {
          resolve({ id: _id, name, description });
        }
      });
    });
  },

  removeTodoItem(id) {
    return new Promise((resolve, reject) => {
      db.remove({ _id: id }, {}, (err, numRemoved) => {
        if (err) {
          reject("Unable to remove item");
        } else {
          resolve(numRemoved === 1);
        }
      });
    });
  }
};
