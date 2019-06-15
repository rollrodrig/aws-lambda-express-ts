"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello = (req, res) => {
    res.end(JSON.stringify({ message: "Hello World " }));
};
exports.default = hello;
