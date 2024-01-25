"use strict";
//ts will implicitly try and convert stuff
let id = 5;
let s = 5;
//s = "" error
//typescript will get turned into js code, thats something we need to manually do i think
let numberArray = [1, 2, 3, 4, 5];
let fuck; //any array
let typle = [false, 1];
let union = "s";
let union2 = 1;
var directions;
(function (directions) {
    directions[directions["UP"] = 0] = "UP";
    directions[directions["DOWN"] = 1] = "DOWN";
    directions[directions["LEFT"] = 2] = "LEFT";
    directions[directions["RIGHT"] = 3] = "RIGHT";
})(directions || (directions = {}));
var directionsString;
(function (directionsString) {
    directionsString["UP"] = "up";
    directionsString["DOWN"] = "down";
    directionsString["LEFT"] = "left";
    directionsString["RIGHT"] = "right";
})(directionsString || (directionsString = {}));
const conner = {
    id: 0,
    name: "conner",
};
let cid = 1;
//will force to check, idk how useful this is
//probably mainly for unions
let fuck2 = cid;
function addNum(x, y) {
    //return "s"error
    return x + y;
}
class Dude {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `this{this.name} registered`;
    }
}
const conner2 = new Dude(123, "swag");
//conner2.id this is private
