const Datastore = require("nedb");

const db = new Datastore({ filename: "todo.db", autoload: true });

module.exports = {
  getTodoItems() {
    return new Promise((resolve, reject) => {
      db.find({}, (err, items) => {
        if (err) {
          reject("Unable to get todo items");
        }
        resolve(items);
      });
    });
  },

  addTodoItem(item) {
    return new Promise((resolve, reject) => {
      db.insert(item, (err, newItem) => {
        if (err) {
          reject("Unable to insert new item");
        }
        console.log(newItem);
        resolve(newItem);
      });
    });
  }
};