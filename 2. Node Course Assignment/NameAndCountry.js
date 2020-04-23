//=-=-=-=-=-= Readline =-=-=-=-=-=
//Used as a module to display one's name and country
//More information at: https://nodejs.org/dist/latest-v12.x/docs/api/readline.html

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayNameAndCountry() {
    rl.question('What is your name? ', function(name) {
        rl.question('What country are you from? ', function(country) {
            console.log(`Hello! My name is ${name} and I'm from ${country}`);
            rl.close();
        });
    });
}

//Export module
module.exports.displayNameAndCountry = displayNameAndCountry;