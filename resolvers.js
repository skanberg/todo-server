const {
  getTodoItems,
  addTodoItem,
  removeTodoItem,
} = require("./todoDB");

module.exports = {
  Query: {
    todoItems: () => getTodoItems(),
  },
  Mutation: {
    addTodoItem: (_, variables) => addTodoItem(variables),
    removeTodoItem: (_, { id }) => removeTodoItem(id),
  },
};
