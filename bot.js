const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("Savage");



client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
  let words = [` ** Oh God i finnaly found you i have been looking everywhere for you 
we are waiting for you in this server you are going to have a great time in this server **
You're In  **Energy** ,  Welcome ..
   https://discord.gg/z9wBJDC   `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
20000 })



client.login('BOT_TOKEN');
