const { json } = require("micro");
const { graphql } = require("graphql");
const schema = require("./schema");

module.exports = async function (req, res) {
  const data = await json(req);
  console.log("sune", data);
  const response = await graphql(schema, "query q { todoItems { name } }");
  return response;
};
