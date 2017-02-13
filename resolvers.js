const Datastore = require("nedb");

const todoItems = [
  { id: 1, name: "name nr 1", description: "description nr 1" },
  { id: 2, name: "name nr 2", description: "description nr 2" },
];

const db = new Datastore({ filename: "todo.db", autoload: true });

db.insert({ name: "name nr 1", description: "description nr 1" });

module.exports = {
  Query: {
    todoItems() {
      return todoItems;
    },
  },
  Mutation: {
    addTodoItem() {
      return {};
    }
  },
};
