import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"; 

//server setup
import { typeDefs } from "./schema.js";

import db from "./_db.js";
import { debug } from "console";

import { createClient, RedisClientType } from 'redis';

import { setSomethingInRedis, getSomethingFromRedis } from "./redisModule.js";



const resolvers = {
    Query : {
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review(_:any, args : any){            
            return db.reviews.find((review : any) => review.id === Number(args.id))
        },
        addition(_:any, args : any){
            getSomethingFromRedis()
            return Number(args.firstNum + args.secondNum)
            
        }

    },
    Mutation:{
        deleteGame(_:any, args : any){
            db.games = db.games.filter((game : any) => Number(game.id) !== Number(args.id))
            return db.games
        },
        addGame(_,args : any){
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game)
            return game
        },
        editGame(_,args : any){
            db.games = db.games.map((game : any) => {
                if(Number(game.id) === Number(args.id)){
                    return {...game, ...args.edits}
                }
                return game
            })
            return db.games.find((game : any) => Number(game.id) === Number(args.id))
        }
    }
}


  




const server = new ApolloServer({
    //typeDefs --definitions of types of data
    // all of these together are the schema
    //ResolverProperties
    typeDefs, //map to structure map, dont handle logic
    resolvers,

})

const myPort = 8080;

//start the server
const { url } = await startStandaloneServer(server, {
    listen: { port: myPort },

})
console.log(`Server started at port ${myPort}`);

console.log('attempting to connect with redis...');

setSomethingInRedis()



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