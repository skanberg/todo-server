const Datastore = require("nedb");

const db = new Datastore({
  timestampData: true,
  filename: "todo.db",
  autoload: true,
});

module.exports = {
  getTodoItems() {
    return new Promise((resolve, reject) => {
      db.find({}).sort({ createdAt: 1 }).exec((err, items) => {
        if (err) {
          reject("Unable to get todo items");
        } else {
          resolve(items.map(({ _id, name, description, completed }) => ({ id: _id, name, description, completed }) ));
          resolve(items.map(({ _id, name, description, completed }) => ({ id: _id, name, description, completed }) ));
        }
      });
    });
  },

  getTodoItem(id) {
    return new Promise((resolve, reject) => {
      db.findOne({ _id: id }, (err, item) => {
        if (err) {
          reject("Unable to get todo item");
        } else {
          resolve(item !== null ? { id: item._id, name: item.name, description: item.description, completed: item.completed } : null);
        }
      });
    });
  },

  addTodoItem({ name, description }) {
    return new Promise((resolve, reject) => {
      db.insert({ name, description, completed: false }, (err, { _id, name, description }) => {
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
  },

  updateTodoItem(variables) {
    return new Promise((resolve, reject) => {
      const updateItem = { $set: {} };
      if (variables.name !== undefined) {
        updateItem.$set.name = variables.name;
      }
      if (variables.description !== undefined) {
        updateItem.$set.description = variables.description;
      }
      if (variables.completed !== undefined) {
        updateItem.$set.completed = variables.completed;
      }
      db.update({ _id: variables.id }, updateItem, {}, (err, numReplaced) => {
        if (err) {
          reject("Unable to remove item");
        } else {
          resolve(numReplaced === 1);
        }
      });
    });
  }
};
