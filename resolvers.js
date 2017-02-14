const Datastore = require("nedb");

const db = new Datastore({ filename: "todo.db", autoload: true });

// db.insert({ name: "name nr 1", description: "description nr 1" });

function getTodoItems() {
  return new Promise((resolve, reject) => {
    db.find({}, (err, items) => {
      if (err) {
        reject("Unable to get todo items");
      }
      resolve(items);
    });
  });
}

module.exports = {
  Query: {
    todoItems() {
      return getTodoItems();
    },
  },
  Mutation: {
    addTodoItem() {
      return {};
    }
  },
};
