import { debug } from "console";

const root = {
    Query : {
      message: (_parent : ParentType, args:ArgsType) => {
        console.log(args);
        return args._message;
      },
    },
  };
  
  console.log("sss");
  module.exports = root;

  /*
       {
       message(myInput:"message") 

     }
*/
interface ArgsType {
  _message: string;

}
interface ParentType {

}