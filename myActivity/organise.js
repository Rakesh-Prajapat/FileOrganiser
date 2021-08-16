
let fs = require("fs");
let path = require("path");

function organisefn(curOpen) {

    if (curOpen == undefined) {
        curOpen = process.cwd();
    }
    let files = fs.readdirSync(curOpen);
    console.log(files);

    for (let i = 0; i < files.length; i++) {
        let flag = true;
        let toCheck = files[i].split('.').splice(1);

        for (let j = 0; j < types.media.length; j++) {
            if (toCheck == types.media[j]) {

                let accuratePath = path.join(curOpen, "Media");
                let fexist = fs.existsSync(accuratePath);
                if (fexist) {
                }
                else {
                    fs.mkdirSync(accuratePath);
                    console.log("Media files organised");
                }
                accuratePath = path.join(accuratePath, files[i]);

                src = path.join(curOpen, files[i]);
                fs.copyFileSync(src, accuratePath);
                flag = false;
            }

        }

        for (let j = 0; j < types.archive.length; j++) {
            if (toCheck == types.archive[j]) {

                let accuratePath = path.join(curOpen, "Archieve");
                let fexist = fs.existsSync(accuratePath);
                if (fexist) {
                }
                else {
                    fs.mkdirSync(accuratePath);
                    console.log("Archieve files organised");
                }
                accuratePath = path.join(accuratePath, files[i]);
                src = path.join(curOpen, files[i]);
                fs.copyFileSync(src, accuratePath);
                flag = false;
            }
        }

        for (let j = 0; j < types.documents.length; j++) {
            if (toCheck == types.documents[j]) {
                let accuratePath = path.join(curOpen, "Documents");
                let fexist = fs.existsSync(accuratePath);
                if (fexist) {
                }
                else {
                    fs.mkdirSync(accuratePath);
                    console.log("Documents files organised");
                }
                accuratePath = path.join(accuratePath, files[i]);
                src = path.join(curOpen, files[i]);
                fs.copyFileSync(src, accuratePath);
                flag = false;
            }

        }
        for (let j = 0; j < types.app.length; j++) {
            if (toCheck == types.app[j]) {

                let accuratePath = path.join(curOpen, "App");
                let fexist = fs.existsSync(accuratePath);
                if (fexist) {
                }
                else {
                    fs.mkdirSync(accuratePath);
                    console.log("App files organised");
                }
                accuratePath = path.join(accuratePath, files[i]);
                src = path.join(curOpen, files[i]);
                fs.copyFileSync(src, accuratePath);
                flag = false;
            }
        }
        for (let j = 0; j < files.length; j++) {
            if (flag == true) {
                let accuratePath = path.join(curOpen, "Others");
                let fexist = fs.existsSync(accuratePath);
                if (fexist) {
                }
                else {
                    fs.mkdirSync(accuratePath);
                    console.log("Others files organised");
                }
                accuratePath = path.join(accuratePath, files[i]);
                src = path.join(curOpen, files[i]);
                fs.copyFileSync(src, accuratePath);
            }
        }
    }

    for (let i = 0; i < files.length; i++) {
        let toDeletePath = path.join(curOpen, files[i]);
        fs.unlinkSync(toDeletePath);
    }
    return files;
}

module.exports = {
    organiseFun: organisefn
}

