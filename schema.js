const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const resolvers = require("./resolvers");

const schema = `

type TodoItem {
  id: Int!
  name: String!
  description: String
}

type Query {
  todoItems: [TodoItem]
}

`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
