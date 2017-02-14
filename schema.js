const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const resolvers = require("./resolvers");

const schema = `

type TodoItem {
  _id: String!
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
  ): String
}

`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
