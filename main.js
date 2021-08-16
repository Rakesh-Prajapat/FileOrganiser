#!/usr/bin/env node

let fs = require("fs");
let path = require("path");

let treeFileObj = require("./myActivity/tree");
let helpFileObj = require("./myActivity/help");
let organiseFileObj = require("./myActivity/organise");

let types = {
    media: ["mp4", "mp3", "mkv", "png"],
    archive: ['zip','java', '7z', 'rar', 'tar', 'gz', 'ar', 'ios', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


let inputArr = process.argv.slice(2);

let command = inputArr[0];
let direcPath = inputArr[1];

switch (command) {

    case 'tree':
        treeFileObj.treeFun(direcPath);
        break;

    case 'organise':
       organiseFileObj.organiseFun(direcPath);
        break;

    case 'help':
       helpFileObj.helpFun();
        break;
    default:
        console.log("Please 🙏 input right command..");
        break;
}









