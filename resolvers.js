const todoItems = [
  { id: 1, name: "name nr 1", description: "description nr 1" },
  { id: 2, name: "name nr 2", description: "description nr 2" },
];

module.exports = {
  Query: {
    todoItems() {
      return todoItems;
    },
  },
};
