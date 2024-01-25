const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message (myInput:String): String
  }
`);

module.exports = schema;