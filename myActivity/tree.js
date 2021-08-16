let fs = require("fs");
let path = require("path");


function treefn(dirPath) {
    if (dirPath == undefined) {
        treeRecursion(process.cmd(), "");
    }
    else {
        let doesexist = fs.existsSync(dirPath);
        if (doesexist) {
            treeRecursion(dirPath, "");
        }
        else {
            console.log("Please 🙏 enter the correct path");
            return;
        }
    }
}

function treeRecursion(dirPath, indent) {
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    }
    else {
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let childs = fs.readdirSync(dirPath);

        for (let i = 0; i < childs.length; i++) {
            let childsPath = path.join(dirPath, childs[i]);
            treeRecursion(childsPath, indent + "\t");
        }
    }

}


module.exports = {
    treeFun : treefn
}