const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const resolvers = require("./resolvers");

const schema = `

type TodoItem {
  id: String!
  name: String!
  done: Boolean
  description: String
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
}

`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
