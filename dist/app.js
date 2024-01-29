import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//server setup
import { typeDefs } from "./schema.js";
import db from "./_db.js";
import { getSomethingFromRedis } from "./redisModule.js";
import Bull from "bull";
import dotenv from "dotenv";
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
            getSomethingFromRedis();
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
console.log(`Server started at port ${myPort}`);
console.log('attempting to connect with redis...');
dotenv.config();
const redisOptions = {
    redis: {
        host: 'redis',
        port: 6379
        // If you have Redis password:
        // password: 'your_redis_password'
    }
};
const taskQueue = new Bull("tasks", redisOptions);
taskQueue.process((payload, finish) => {
    console.log("preparing task...");
    console.log(payload.data);
    setTimeout(() => {
        console.log("task complete...");
        finish();
    }, 4000);
});
taskQueue.add({
    target: "conner boxell",
    type_of_demise: "missile strike",
    possible_locations: ["his house", "emmas house", "missfire at quinns appartment"]
});
taskQueue.add({
    target: "nathan daignault",
    type_of_demise: "white phosphorus bomb",
    possible_locations: ["middle school (dont ask)", "his current house in san juan", "missfire langford lane (old people will die)"]
});
// const client: RedisClientType = createClient({
//     url: 'redis://localhost:6379'
//   }
//   client.set('test_key', 'Hello, Redis!', function(err, reply) {
//     console.log(reply); // Prints 'OK' if successful
//   });
//   client.get('test_key', function(err, reply) {
//     console.log(reply); // Prints 'Hello, Redis!'
//   });
/**
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
