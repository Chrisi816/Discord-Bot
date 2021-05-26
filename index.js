const path = require('path')
const fs = require ('fs-extra')
const Discord = require ('discord.js')
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']})
const util = require('minecraft-server-util');
const api = require("imageapi.js")

const config = require('./config.json')
const covid = require('covidapi')
const commandBase = require('./commands/command-base')
const PREFIX = '!'
const db = require('quick.db')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const mongo = require('./mongo/mongo')
const command = require('./commands')
const commands = require('./commands')
const rolecount = require('./role-count')
const membercount = require('./channels/member-count')
const antiAd = require('./Invites/anti-ad')
const scalingChannels1 = require('./channels/scaling-channel1')
const scalingChannels = require('./channels/scaling-channels')
const inviteNotifications = require('./Invites/invite-notifications')
const { countReset } = require('console')
const { isRegExp } = require('util')
const { Mongoose } = require('mongoose')
const welcome = require('./channels/welcome')
const loadCommands = require('./commands/load-commands')
const scalingChannel2 = require('./channels/scaling-channel2')
const levels = require('./mongo/level');
const { base } = require('./mongo/schemas/welcome-schema');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const DisTube = require('distube');
const roleCount = require('./role-count');


const SERVER_ADDRESS = '176.57.152.248'; 
const SERVER_PORT = 25565; 

const STATUS_COMMAND = '/status'; 
const STATUS_ERROR = 'Error getting Minecraft server status...';
const STATUS_ONLINE = 'Der Server ist **online**  -  ';
const STATUS_PLAYERS = '**{online}** Leute sind am Spielen!'
const STATUS_EMPTY = 'Aktuell ist keiner drauf!';

const IP_COMMAND = '/ip'
const IP_RESPONSE = 'Die Server Ip ist: `{address}:{port}`'


antiAd(client)
inviteNotifications(client)
loadCommands(client)
levels(client)

client.on('ready', async () => {
    console.log('Ich bin Bereit!')
    membercount(client)
    roleCount(client)
    scalingChannels(client)
    scalingChannels1(client)
    scalingChannel2(client)
    welcome(client)

    let statuse = [
    `!help auf ${client.guilds.cache.size} Servern`,
    `mit ${client.users.cache.size} Usern`]

    setInterval(() => {
        let rstatus = statuse[Math.floor(Math.random() * statuse.length)];

        client.user.setActivity(rstatus);
    },4000)
    
    await mongo()

    client.on('messageReactionAdd', async(reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.message.id === '844665108834811925'){
            if(reaction.emoji.name === '📢') {
                await reaction.message.guild.members.cache.get(user.id).roles.add('814554861781123103')
            }
            if(reaction.emoji.name === '📱') {
                await reaction.message.guild.members.cache.get(user.id).roles.add('830589132350292019')
            }
            if(reaction.emoji.name === '🎬') {
                await reaction.message.guild.members.cache.get(user.id).roles.add('830882003230261248')
            }
            if(reaction.emoji.name === '🎮') {
                await reaction.message.guild.members.cache.get(user.id).roles.add('830882368310738964')
            }
            if(reaction.emoji.name === '❗') {
                await reaction.message.guild.members.cache.get(user.id).roles.add('830882915680124928')
            }
        }
    })
    client.on('messageReactionRemove', async(reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.message.id === '844665108834811925'){
            if(reaction.emoji.name === '📢') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove('814554861781123103')
            }
            if(reaction.emoji.name === '📱') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove('830589132350292019')
            }
            if(reaction.emoji.name === '🎬') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove('830882003230261248')
            }
            if(reaction.emoji.name === '🎮') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove('830882368310738964')
            }
            if(reaction.emoji.name === '❗') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove('830882915680124928')
            }
        }
    })
    client.on("guildMemberAdd", async member => {
        const guild = client.guilds.cache.get('775033960300019732')
        const role = guild.roles.cache.get("775035672251596811")

        await member.roles.add(role.id)
    })   
    client.on("guildMemberAdd", async member => {
        const guild = client.guilds.cache.get('775033960300019732')
        const role = guild.roles.cache.get("830588799331074088")

        await member.roles.add(role.id)
    }) 

    const cacheTime = 15 * 1000;
    let data, lastUpdated = 0;

client.on('message', message => { 
    if(message.content.trim() == STATUS_COMMAND) {
        statusCommand(message);
    } else if(message.content.trim() == IP_COMMAND) {
        ipCommand(message);
    }
});

function statusCommand(message) { 
    getStatus().then(data => {
        let status = STATUS_ONLINE;
        status += data.onlinePlayers ? 
            STATUS_PLAYERS.replace('{online}', data.onlinePlayers) : STATUS_EMPTY;
        message.reply(status);
    }).catch(err => {
        console.error(err);
        message.reply(STATUS_ERROR);
    })
}

function getStatus() {
   
    if (Date.now() < lastUpdated + cacheTime) return Promise.resolve(data);
    return util.status(SERVER_ADDRESS, { port: SERVER_PORT })
        .then(res => {
            data = res;
            lastUpdated = Date.now();
            return data;
        })
}

function ipCommand(message) { 
    const response = IP_RESPONSE
        .replace('{address}', SERVER_ADDRESS).replace('{port}', SERVER_PORT)
    message.reply(response);
}
var images = ["1", "2", "3", "4" ];
var image = Math.floor(Math.random() * images.length);

})
client.login(config.token)