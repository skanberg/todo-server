const {
  getTodoItems,
  getTodoItem,
  addTodoItem,
  removeTodoItem,
  updateTodoItem,
} = require("./todoDB");

module.exports = {
  Query: {
    allTodoItems: () => getTodoItems(),
    todoItem: (_, { id }) => getTodoItem(id),
  },
  Mutation: {
    addTodoItem: (_, variables) => addTodoItem(variables),
    removeTodoItem: (_, { id }) => removeTodoItem(id),
    updateTodoItem: (_, variables) => updateTodoItem(variables),
  },
};
