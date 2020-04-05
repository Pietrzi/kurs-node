const fs = require('fs');
const path = require('path');

const getRandomNumber = (max = 100_000_000) => Math.floor(Math.random() * max);


const createStructure = async () => {
    try {
        await fs.promises.mkdir('./dir_one');

        for(let i = 0 ; i < 10 ; i++) {

            const pathToWrite = path.join(__dirname, 'dir_one', `file_${i}.txt`);

            await fs.promises.writeFile(pathToWrite, [getRandomNumber(4),getRandomNumber(4),getRandomNumber(4),getRandomNumber(4)].join(","))

        }

    } catch (error) {
        console.log(error);
    }
}


 
const readData = async () => {

    await createStructure();

    const files = await fs.promises.readdir(path.join(__dirname, 'dir_one'))

    return await Promise.all(
        files.map(async (file) => {

            const meta = await fs.promises.stat(path.join(__dirname, 'dir_one', file))

            console.log("File meta: ", meta);

            return  {
                basename: path.basename(`./dir_one/${file}`, '.txt'), // I
                extname: path.extname(`./dir_one/${file}`), // I
                dirname: path.dirname(path.resolve(`./dir_one/${file}`)), // I
                size: meta.size, // J
                birthtime: meta.birthtime, // J
                isFile: meta.isFile(), // J
                isDirectory: meta.isDirectory(), // J
              }
        } )
    ).catch((error) => {
        throw new Error("Błąd odczytu!!!")
    })
}

;

const saveData = async () => {
    const stats = await readData();

    await fs.promises.writeFile(path.join(__dirname, 'response.json'), JSON.stringify(stats))

}

saveData()