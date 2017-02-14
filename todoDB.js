const Datastore = require("nedb");

const db = new Datastore({ filename: "todo.db", autoload: true });

module.exports = {
  getTodoItems() {
    return new Promise((resolve, reject) => {
      db.find({}, (err, items) => {
        if (err) {
          reject("Unable to get todo items");
        } else {
          resolve(items);
        }
      });
    });
  },

  addTodoItem(item) {
    return new Promise((resolve, reject) => {
      db.insert(item, (err, newItem) => {
        if (err) {
          reject("Unable to insert new item");
        } else {
          resolve(newItem);
        }
      });
    });
  },

  removeTodoItem(id) {
    return new Promise((resolve, reject) => {
      db.remove({ _id: id }, {}, (err, numRemoved) => {
        if (err || numRemoved !== 1) {
          reject("Unable to remove item");
        } else {
          resolve("Item removed");
        }
      });
    });
  }
};
