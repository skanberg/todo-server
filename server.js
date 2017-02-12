const graphql = require("graphql").graphql;
const schema = require("./schema");

graphql(schema, "query q { todoItems { name } }").then((resp) => {
  console.log(resp);
});
