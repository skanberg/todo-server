import { graphql } from "graphql";
import schema from "./schema";

graphql(schema, "query q { todoItems { name } }").then((resp) => {
  console.log(resp);
});
