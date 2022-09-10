require("dotenv").config();
const express = require("express");
const app = express();
const  {Client,GatewayIntentBits} = require('discord.js');
const botclient = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
const token = process.env.BOTTOKEN;
const port = process.env.PORT;

botclient.once("ready",function(){
    console.log("bot ready!!!!");
})
botclient.once("message", message => { 
    console.log("hello");
    if (message.content == "?random") { 
        const number = Math.random();
        console.log("working")
        message.channel.send(number.toString()); 
    }

});
botclient.on('error', err => {
    console.log(err);
 });
botclient.login(token);






