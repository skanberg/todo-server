const todoItems = [
  { id: 1, name: "name nr 1", description: "description nr 1" },
  { id: 2, name: "name nr 2", description: "description nr 2" },
];

const resolveFunctions = {
  Query: {
    todoItems() {
      return todoItems;
    },
  },
};

export default resolveFunctions;
