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
          resolve(items.map(({ _id, name, description, done }) => ({ id: _id, name, description, done }) ));
        }
      });
    });
  },

  getTodoItem(id) {
    return new Promise((resolve, reject) => {
      db.findOne({ _id: id }, (err, item) => {
        if (err) {
          reject("Unable to get todo items");
        } else {
          resolve(item !== null ? { id: item._id, name: item.name, description: item.description, done: item.done } : null);
        }
      });
    });
  },

  addTodoItem({ name, description }) {
    return new Promise((resolve, reject) => {
      db.insert({ name, description, done: false }, (err, { _id, name, description }) => {
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
