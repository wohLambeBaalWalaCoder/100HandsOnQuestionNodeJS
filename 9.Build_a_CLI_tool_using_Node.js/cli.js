#!/usr/bin/env node

const args = process.argv.slice(2);

console.log('The Args Are' , args)

const command = args[0];

function showHelp() {
  console.log(`
        ✅ Avaliable Command :

        1.) greet <name>
        Example : cli greet Avinash 


        2.) add <num1> <num2>
        Example : cli add 2 3 
                
        3.) help
        Show all Commands
        `);
}

switch (command) {
  case "greet":
    const name = args[1];
    if (!name) console.log("❌Please Provide a name");

    console.log(`👋 Hello , ${name}! `);
    break;

  case "add":
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Please Provide a Number as a Input");
    }

    console.log(`Result = ${num1 + num2}`);
    break;

  default:
    console.log("Unknown Command");
    showHelp();
}
