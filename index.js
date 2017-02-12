const graphql = require("graphql").graphql;
const schema = require("./schema");

module.exports = async function (req, res) {
  const response = await graphql(schema, "query q { todoItems { name } }");
  return response;
};
