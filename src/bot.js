const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const { listenerCount } = require('process');
const client = new Client({ intents: 32767 });

var util = require('util')

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandsFolders = fs.readdirSync("./src/commands");


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    const id = '752914531059105828';
    // Get the Guild and store it under the variable "list"
    const guild = client.guilds.cache.get('752914531059105828');

    // Fetch and get the list named 'members'
    guild.members.cache.each(member => {
        client.createBalance(member)
    });

});

(async() => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandsFolders, "./src/commands");
    client.dbLogin();
    client.login(process.env.token);
})();