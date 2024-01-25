"use strict";
const { graphqlHTTP } = require('express-graphql');
const app = require('express')();
const schem = require('./schema');
const rot = require('./root');
app.use('/graphql', graphqlHTTP({
    schema: schem,
    rootValue: rot,
    graphiql: true, // Enables the GraphiQL tool
}));
app.get('/', (req, res) => {
    res.json({ message: "docker test" });
});
const PORT = 8080; // You can choose any port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
