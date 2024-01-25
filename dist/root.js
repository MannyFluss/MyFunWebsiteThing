"use strict";
const root = {
    Query: {
        message: (_parent, args) => {
            console.log(args);
            return args._message;
        },
    },
};
module.exports = root;
