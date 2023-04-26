var { buildSchema, graphql } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();

var schema = buildSchema(`
  type Query {
    name: String,
    email:String
    age:String
  }
`);

var root = {
  age: () => 2,
  name: () => {
    return "siam";
  },
  email: () => {
    return "siam@dp.com";
  },
};

var source = "{ hello }";

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(8000);
console.log("Server is running at localhost");
/*
graphql({ schema, source, root }, "{email}").then((response) => {
  console.log(response);
});*/
