const root = {
    Query: {
        message: (_parent, args) => {
            console.log(args);
            return args._message;
        },
    },
};
console.log("sss");
module.exports = root;
export {};
