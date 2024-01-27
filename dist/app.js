import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//server setup
import { typeDefs } from "./schema.js";
import db from "./_db.js";
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
const myPort = 4000;
//start the server
const { url } = await startStandaloneServer(server, {
    listen: { port: myPort },
});
console.log(`Server started at port ${myPort}`);
