import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//server setup
import { typeDefs } from "./schema.js";
import db from "./_db.js";
import { createClient } from 'redis';
const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        reviews() {
            return db.reviews;
        },
        authors() {
            return db.authors;
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === Number(args.id));
        },
        addition(_, args) {
            return Number(args.firstNum + args.secondNum);
        }
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter((game) => Number(game.id) !== Number(args.id));
            return db.games;
        },
        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            };
            db.games.push(game);
            return game;
        },
        editGame(_, args) {
            db.games = db.games.map((game) => {
                if (Number(game.id) === Number(args.id)) {
                    return { ...game, ...args.edits };
                }
                return game;
            });
            return db.games.find((game) => Number(game.id) === Number(args.id));
        }
    }
};
//   client.set('test_key', 'Hello, Redis!', function(err, reply) {
//     console.log(reply); // Prints 'OK' if successful
//   });
//   client.get('test_key', function(err, reply) {
//     console.log(reply); // Prints 'Hello, Redis!'
//   });
/**
 *
 *
 *
 *
 *
 *
 *
 * sending query
 * query QueryReview($firstNum: Int!, $secondNum: Int!) {
  addition(firstNum: $firstNum, secondNum: $secondNum)
}

data thing
{
  "firstNum": 9,
  "secondNum": 2,
}
 *
 *
 */
const server = new ApolloServer({
    //typeDefs --definitions of types of data
    // all of these together are the schema
    //ResolverProperties
    typeDefs, //map to structure map, dont handle logic
    resolvers,
});
const myPort = 8080;
//start the server
const { url } = await startStandaloneServer(server, {
    listen: { port: myPort },
});
console.log('Connecting...');
console.log(`Server started at port ${myPort}`);
async function connectToRedis() {
    const client = createClient({
        url: 'redis://redis:6379'
    });
    console.log('Connecting...');
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    console.log('Connected to Redis');
    // Rest of your Redis code...
}
await connectToRedis();
