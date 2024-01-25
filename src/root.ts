const root = {
    Query : {
      message: (_parent : ParentType, args:ArgsType) => {
        console.log(args);
  
        return args._message;
      },
    },
  };
  
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