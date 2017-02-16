const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const resolvers = require("./resolvers");

const schema = `

type TodoItem {
  id: String!
  name: String!
  description: String
  completed: Boolean
}

type Query {
  allTodoItems: [TodoItem]
  todoItem(
    id: String!
  ): TodoItem
}

type Mutation {
  addTodoItem (
    name: String!
    description: String
  ): TodoItem
  
  removeTodoItem(
    id: String!
  ): Boolean
  
  updateTodoItem(
    id: String!
    name: String
    description: String
    completed: Boolean
  ): Boolean
}

`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
