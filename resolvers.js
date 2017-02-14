const { getTodoItems, addTodoItem } = require("./todoDB");

module.exports = {
  Query: {
    todoItems() {
      return getTodoItems();
    },
  },
  Mutation: {
    addTodoItem(_, variables) {
      return addTodoItem(variables);
    }
  },
};
