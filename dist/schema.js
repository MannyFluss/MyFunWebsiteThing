"use strict";
const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type Query {
    message (_message:String): String
  }
`);
module.exports = schema;
