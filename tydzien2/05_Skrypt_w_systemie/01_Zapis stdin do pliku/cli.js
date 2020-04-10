#!/usr/bin/env node
const fs = require('fs');
process.stdin.setEncoding('utf-8');
const arg = process.argv[2];
const input = process.stdin;

input.on("data", function(data){

    let d = data.toString('utf-8').trim();

    if(d === 'Coderslab') {
        process.stdout.write(Buffer.from("Program zakończony\n", 'utf-8'));
        process.exit();
    }

    fs.appendFile(arg, `You typed: ${d}`, function(error){
        if(error) throw new Error(error)
        console.log("Added: ", `You typed: ${d}`)
    })
})


if(!arg) throw new Error("Brak argumentu")


process.stdout.write(Buffer.from("TEST sdasdsd\n", "utf-8"));
