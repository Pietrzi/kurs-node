const fs = require('fs');
const path = require('path');

const randomString = () => Math.random().toString(36).substring(7);

const createFilesStructure = () => {

    /**
     * Składnia async/await jest bardziej czytelna kiedy korzystamy z biblioteki async/await – dla utrudnienia dodajmy jednak przykład z callbackami i promisami
     */
    const folderFrom = new Promise((resolve, reject) => {
        fs.mkdir('copies/from', {recursive: true}, function(error){
            if(error) {
                reject(new Error("Folder nie może być utworzony"))
            }
            resolve("Folder utworzony");
        });
    })
    .then(function(res) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, 'copies', 'from', 'copy.txt'), 'Ważna treść', function(error){
                if(error) {
                    reject(new Error("Plik nie może być utworzony"))
                }
                resolve("Plik utworzony");
            })
        })
    })

    const folderTo = new Promise((resolve, reject) => {
        fs.mkdir('copies/to', {recursive: true}, function(error){
            if(error) {
                reject(new Error("Folder nie może być utworzony"))
            }
            resolve("Folder utworzony");
        });
    })

    return Promise.all([
        folderFrom,
        folderTo
    ])

}