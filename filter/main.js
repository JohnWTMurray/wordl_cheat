"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const x = (0, fs_1.readFileSync)(path_1.default.join(__dirname, './wordlist')).toString().toUpperCase().split('\n').filter(word => {
    return RegExp(/[A-Z]/g).test(word) && !RegExp(/[-]/).test(word) && word.length == 6;
}).map(word => {
    return word.substring(0, word.length - 1);
});
(0, fs_1.writeFileSync)(path_1.default.join(__dirname, "words.ts"), JSON.stringify(x));
