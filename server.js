const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

const server = express();

server.use(cors());

server.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true,
}));

server.get("/", (req, res) => {
  res.redirect("/graphql")
});

server.listen(4000);

console.log("Server started");