const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const resolvers = require("./resolvers");

const schema = `

# A todo item.
type TodoItem {
  # The id of the todo item.
  id: String!
  # A name of the todo item.
  name: String!
  # An optional description of the todo item.
  description: String
  # Indicates if the todo item is completed or not.
  completed: Boolean
}

# All possible queries to execute.
type Query {
  # Returns all todo items.
  allTodoItems: [TodoItem]
  
  # Returns one todo item.
  todoItem(
    # The id of the todo item to return.
    id: String!
  ): TodoItem
}

# All posible mutations to execute.
type Mutation {
  # Adds a new todo item.
  addTodoItem (
    # The name of the todo item. Is required.
    name: String!
    # An optional description of the todo item.
    description: String
  ): TodoItem
  
  # Removes a todo item. Returns true if the removal was successful.
  removeTodoItem(
    # The id of the todo item to remove.
    id: String!
  ): Boolean
  
  # Updates a todo item. Returns true if the update was successful.
  updateTodoItem(
    # The id of the todo item to update. Is required.
    id: String!
    # The new name of the todo item. Is optional.
    name: String
    # A new description of the todo item. Is optional.
    description: String
    # Updates the completed flag for the todo item. Is optional.
    completed: Boolean
  ): Boolean
}

`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
