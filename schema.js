import { makeExecutableSchema } from "graphql-tools";
import resolvers from './resolvers';

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

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
