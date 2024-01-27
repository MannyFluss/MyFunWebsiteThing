
export const typeDefs = `#graphql
  type Game{
    id: ID!,
    title : String!,
    platform : [String!]!,
  }
  type Review{
    id : ID!,
    rating : Int!
    content : String!
  }
  type Author{
    id: ID!,
    name : String!
    verified : Boolean!
  }

  type Query{
    reviews : [Review]
    games : [Game]
    authors : [Author]
    review(id : ID!) : Review
    addition(firstNum : Int!, secondNum : Int!) : Int
  }

  input AddGameInput {
    title: String!
    platform: [String!]!
  }

  input EditGameInput {
    title: String
    platform: [String!]
  }

  type Mutation{
    deleteGame(id : ID!) : [Game]
    addGame(game : AddGameInput!) : Game
    editGame(id : ID!, game : EditGameInput!) : Game
  }


`
//

/*

*/


//ints, floats, string, boolean, ID
// ! means required