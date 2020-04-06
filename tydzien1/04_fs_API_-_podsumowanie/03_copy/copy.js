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

const CopyFile = (from, to) => {
    createFilesStructure()
    .then(function(res){
        
        /**
         * Skoro mamy już strukturę folderów i plik do kopiowania możemy pracować dalej
         */


         //Sprawdzam czy mam ścieżkę `from`
         fs.access(from, fs.constants.F_OK, function(error){
            if(error) throw new Error("Error")

            console.warn("Plik from istnieje")

            //Sprawdzam czy mam ścieżkę `to`
            fs.access(to, fs.constants.F_OK, function(error) {
                if(error) throw new Error("Error")

                console.warn("Ścieżka to istnieje")

                //Sprawdzam czy ścieżka to na pewno folder
                if(fs.statSync(to).isDirectory()) {

                    console.warn("Ścieżka 'to' to folder")
                    
                    //Sprawdzam czy w ścieżce tu istnieje plik który chce przekopiować

                    const name = path.basename(from);

                    console.warn(path.join(to, name))
                    
                    fs.access(path.join(to, name), fs.constants.F_OK, function(error) {
                        if(error) {
                            
                            //Jeśli plik nie istnieje do copije zawartość pliku `from` do nowego pliku
                            fs.readFile(from, 'utf8', (error, data) => {
                                
                                if(error) throw new Error("Nie mogę przeczytać pliku")
                                
                                fs.writeFile(path.join(to, name), data, function(error){

                                    if(error) throw new Error(error)
                                    console.log("zapisane:", data)
                                })
                            })

                            return;
                        }

                        //Jeśli plik istnieje to tworzę nowy plik z randomową nazwą zawartość pliku `from` do nowego pliku
                        fs.readFile(from, 'utf8', (error, data) => {
                                
                            if(error) throw new Error("Nie mogę przeczytać pliku")
                            
                            fs.writeFile(path.join(to, `${randomString()}_${name}`), data, function(error){

                                if(error) throw new Error(error)
                                console.log("zapisane jeszcze raz:", data)

                            })
                        })
                    })

                }
            })

         })

    })
    .catch(function(error){
        console.log(error)
    })
}

CopyFile('./copies/from/copy.txt', './copies/to')