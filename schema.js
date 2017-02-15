const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const resolvers = require("./resolvers");

const schema = `

type TodoItem {
  id: String!
  name: String!
  description: String
}

type Query {
  todoItems: [TodoItem]
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
