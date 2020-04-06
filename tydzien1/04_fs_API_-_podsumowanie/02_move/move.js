const path = require('path');
const fs = require('fs');

const createStructure = async () => {
    const folder1 = path.join(__dirname, 'folders', 'folder_from');
    const folder2 = path.join(__dirname, 'folders', 'folder_to');

    try {
        await fs.promises.mkdir(folder1, {recursive: true});
        await fs.promises.mkdir(folder2, {recursive: true});
        await fs.promises.writeFile(path.join(folder1, 'move.txt'), "Zaraz się przekopiuję");
    } catch(error) {
        console.error(error)
    }

}

const moveFiles = async (file1, file2) => {
    await createStructure();


    const name = path.basename(file1);
    const data = await fs.promises.readFile(file1, 'utf8');

    const newFile = path.extname(file2) ? path.join(path.dirname(file2), name) : path.join(file2, name);

    await fs.promises.writeFile(newFile, data);
    await fs.promises.unlink(file1)

}


moveFiles(path.join(__dirname, 'folders', 'folder_from', 'move.txt'), path.join(__dirname, 'folders', 'folder_to','xxx.js'));