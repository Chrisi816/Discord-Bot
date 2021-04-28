const path = require('path')
const fs = require ('fs')
const Discord = require ('discord.js')
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']})
const util = require('minecraft-server-util');
const api = require("imageapi.js")

const config = require('./config.json')
const PREFIX = '!'
const mongo = require('./mongo')
const command = require('./commands')
const commands = require('./commands')
const warnFile = require('./Json/warns.json')
const membercount = require('./member-count')
const antiAd = require('./anti-ad')
const scalingChannels1 = require('./scaling-channels/scaling-channel1')
const scalingChannels = require('./scaling-channels/scaling-channels')
const inviteNotifications = require('./Invites/invite-notifications')
const xpfile = require("./Json/xp.json")
const coinfile = require("./Json/coins.json")
const { countReset } = require('console')
const { isRegExp } = require('util')
const { Mongoose } = require('mongoose')
const welcome = require('./welcome')
const loadCommands = require('./commands/load-commands')
const scalingChannel2 = require('./scaling-channels/scaling-channel2')

const ranks = ["Normie",150,"Experienced User",500,"Grinder",1500,"Legend",5000, "list"];

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

client.on('ready', async () => {
    console.log('Ich bin Bereit!')
    membercount(client)
    scalingChannels(client)
    scalingChannels1(client)
    scalingChannel2(client)
    welcome(client)

    let statuse = [
    `!help auf ${client.guilds.cache.size} Servern`,
    `mit ${client.users.cache.size} Usern`,
    `Created by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#5686!`]

    setInterval(() => {
        let rstatus = statuse[Math.floor(Math.random() * statuse.length)];

        client.user.setActivity(rstatus);
    },4000)

    await mongo().then(mongoose => {
        try {
          console.log('Connected to Mongo!')
        } finally {
         mongoose.connection.close()
        }
    })
})
    client.on('ready', () => {

   command(client, 'vAzoniq twitch', (message) => {
       message.channel.send('Über diesen Link kommst du ganz einfach zum Twitch Kanal von vAzoniq! https://www.twitch.tv/vazoniq7882')

    })

    command(client, 'vAzoniq gaming', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zu Instant Gaming, dort kannst du ganz billig Spiele kaufen! https://www.instant-gaming.com/?igr=vAzoniq-7882 (Dies ist ein Affiliate Link)')
 
     })

    command(client, 'vAzoniq key', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zu Keydrop, dort kannst du für geringes Geld CSGO Kisten aufmachen, diese Lohnen sich mehr über die Website zu kaufen als im eigendlichen Spiel! https://key-drop.com/?code=RXSQJ0EH (Dies ist ein Affiliate Link)')
 
    })
 
    command(client, 'vAzoniq insta', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zum Insta Account von vAzoniq! https://www.instagram.com/twitch.vazoniq7882/')
 
    })

     command(client, 'vAzoniq tiktok', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zum Tiktok Account von vAzoniq! https://www.tiktok.com/@twitch.vazoniq7882?lang=de-DE')
    })

     command(client, 'vAzoniq maushaus', (message) => {
        message.channel.send('Mit diesem Link kommst du zum Besten Youtuber auf Yt! ;) https://www.youtube.com/channel/UCqoQRnEXO1GaJMTSTFzpFBQ ')
 
    })

     command(client, 'link', (message) => {
        message.channel.send('Einladungslink vom Bot: https://bit.ly/2QtBVGi ')

    })
     command(client, 'ehre', (message) => {
        const zahl = Math.floor(Math.random() * 100) + 5
         message.channel.send(`Du hast ${zahl} Ehre`)

    })
        client.on('message', async message => {
        if (message.content === '!meme') {
          let subreddits = [
            "memes"
          ];
          let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
          let img = await api(subreddit)
          const Embed = new Discord.MessageEmbed()
          .setTitle(`Ein Random Reddit Meme <3  `)
          .setURL(`https://www.reddit.com/r/arabfunny`)
          .setColor('RANDOM')
          .setImage(img)
          message.channel.send(Embed)
        }
      });


    // !member -> So viele Member sind aufm Server von vAzoniq!
   
   command(client, 'member', (message) => {
         message.channel.send(
             `${message.guild.name} hat ${message.guild.memberCount} Member!`
         )
   })

   command(client, 'createtextchannel', (message) => {
       const name = message.content.replace('!createtextchannel', '')

       message.guild.channels
       .create(name, {
           type: 'text',
        })
        .then((channel) => {
            console.log(channel)
        })
    })

    command(client, 'serverinfo', (message) => {
        const { guild } = message

        const { name, region, owner, memberCount, channelCount , afkTimeout } = guild
        const icon = guild.iconURL()
        const members = message.guild.members.cache
       

        const embed = new Discord.MessageEmbed()
        .setTitle(`**Server Informationen**`)
        .setThumbnail(icon)
        .setColor('RANDOM')
        .setFooter (`Fresh diese`, icon)
        .addFields(
           {
              name: '🎫⠀Server Name',
              value: message.guild.name
           },
           {
               name: '👑⠀Inhaber',
               value: owner.user.tag,
           },
           {
               name: '🌎⠀Region',
               value: region,
           },
           {
               name: '👥⠀Member',
               value: memberCount,  
           }, 
           {
                name: '🤖⠀Bots ',
                value: members.filter(member => member.user.bot).size,
           },
           {
                name: '👤⠀Menschen',
                value: members.filter(member => !member.user.bot).size
           },
           {
               name: '💬⠀Alle Text Kanäle ',
               value: message.guild.channels.cache.filter(channel => channel.type === 'text').size,
           },
           {
               name: '🎤⠀Alle Voice Kanäle', 
               value: message.guild.channels.cache.filter(channel => channel.type === 'voice').size,
           },
           {
               name: '👔⠀Anzahl der Rollen',
               value: message.guild.roles.cache.size,
           },
           )   

        message.channel.send(embed)
        })

            command(client, 'help', (message) => {
                const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**Command Hilfe**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('fresh', icon)
                .addFields(
                    {
                        name: 'Allgemeine Commands:',
                        value: `
                        **!serverinfo** - Alle Informationen vom Server werden gepostet!
                        **!link** - Der Einladungslink vom Bot wird veröffentlicht!
                        **!member** - Anzahl der Aktuellen Member! 
                        **!level** - Sehe dein aktuelles Level!` 
                    },
                    {
                        name: 'Glückspiel Commands:',
                        value: `
                        **!Coins** - Anzahl der Coins die du besitzt!
                        **!flip** <Anzahl der Coins> <Zahl oder Kopf> - Du kannst eine Münze werfen und dein Einsatz verdoppeln oder verlieren!
                        **!buyrank** - Kaufe dir für deine Erspielten Coins, besondere Ränge! `
                    },
                    {
                        name: `Fun Commands`,
                        value: `**!suggestion/vorschlag** - Erstelle ein Vorschlag! (**!** Umfrage Channel muss vorhanden sein **!**)
                               **/status** - Die Server Informationen vom vAzoniq Smp werden gepostet!
                               **!ip** - Die Ip vom Smp Server wird veröffentlicht!  ` 
                    }
                )
                message.channel.send(embed)
    }) 
    
    command(client, 'ban', (message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (
           member.hasPermission('ADMINISTRATOR') || 
           member.hasPermission('BAN_MEMBER') 
        ) {
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                message.channel.send(`${tag} Dieser User wurde gebannt!`)
            } else {
                message.channel.send(` ${tag} Bitte Tagge jemanden zum Bannen!`)
            }
        } else {
          message.channel.send(
           `${tag} Du hast keine Rechte diesen Command auszuführen!`
        )
      }
    })
    
    command(client, 'kick', (message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (
           member.hasPermission('ADMINISTRATOR') || 
           member.hasPermission('KICK_MEMBER') 
        ) {
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                message.channel.send(`${tag} Dieser User wurde gekickt!`)
            } else {
                message.channel.send(`${tag} Bitte Tagge jemanden zum Kicken!`)
            }
        } else {
          message.channel.send(
            `${tag} Du hast keine Rechte diesen Command auszuführen!`
        )
        }

    })
    client.on("message", async message =>{
        if(!warnFile[message.author.id+message.guild.id]) {
            warnFile[message.author.id+message.guild.id] = {
                warns:0,
                maxwarn: 3
             }
         }

         fs.writeFile("./warns.json", JSON.stringify(warnFile), function(err){
            if(err) console.log(err)
            })
        })

        client.on("message", function(message){

        if(message.author.bot) return;

        if(!coinfile[message.author.id]){
            coinfile[message.author.id] = {
                coins: 100
            }
        }

        fs.writeFile("./coins.json", JSON.stringify(coinfile), err =>{
            if(err){
                console.log(err);
            }
        })

        var addXP = Math.floor(Math.random() * 8) + 3;

        if(!xpfile[message.author.id]){
            xpfile[message.author.id] = {
                xp: 0,
                level: 1,
                reqxp: 50
            }

            fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
                if(err) console.log(err)
            })
        }

        xpfile[message.author.id].xp += addXP

        if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp){
            xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // xp abziehen
            xpfile[message.author.id].reqxp *= 1.25 //xp die man braucht erhöhern
            xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) // reqxp
            xpfile[message.author.id].level += 1 // 1 Level hinzufügen

            message.reply("Ist nun Level **"+xpfile[message.author.id].level+"**!")
      }

      fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
          if(err) console.log(err)
      })

      if(message.content.startsWith("!level")){
          let user = message.mentions.users.first() || message.author

          let embed = new Discord.MessageEmbed()
          .setTitle("Level Karte")
          .setColor("GREEN")
          .addField("Level:",xpfile[user.id].level)
          .addField("XP:", xpfile[user.id].xp+"/"+xpfile[user.id].reqxp)
          .addField("Xp bis zum nächsten Level: ", xpfile[user.id].reqxp)
          
          message.channel.send(embed)
        }

        if(message.content.startsWith("!warn")){
            let user = message.mentions.users.first()  
            let grund = message.content.split(" ").slice(2).join 
 
            if(!user) return message.channel.send("Du hast vergessen jemanden zu erwähnen!")
 
            if(!grund) grund = "Kein genannter Grund!"
 
            let embed = new Discord.MessageEmbed()
            .setTitle("Warnung!")
            .setDescription(`Warnung <@!${user.id}>, du wurdest verwarnt!\nGrund: ${grund}`)
            .setColor("RED")
 
            message.channel.send(embed)
 
            if(!warnFile[user.id+message.guild.id]){
                warnFile[user.id+message.guild.id] = {
                    warns:0,
                    maxwarn:3,
                }
            }
 
            warnFile[user.id+message.guild.id].warns += 1
 
            if(warnFile[user.id+message.guild.id].warns > warnFile[user.id+message.guild.id].maxwarns){
                if(message.guild.member(user).kickable == true){
                    message.channel.send(`<@!${user.id}> wurde wegen zu vielen Verstößen gekickt!`)
                    message.guild.member(user).kick("Zu viele verwarnungen!")
                }
               delete warnFile[user.id+message.guild.id]
             }
             
 
             fs.writeFile("./warns.json", JSON.stringify(warnFile), function(err){
                 if(err) console.log(err)
             })
        }
        if(message.content === "!clear 100"){
            message.delete();
            if(!message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.send(`Du hast nicht genügend Rechte um diesen Command auszuführen!`)
                return;
            }
            message.channel.bulkDelete(100);
            message.channel.send("Ich habe die letzten 100 Nachrichten gelöscht!")
        }

        if(message.content === "!clear 10"){
            message.delete();
            if(!message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.send(`Du hast nicht genügend Rechte um diesen Command auszuführen!`)
                return;
            }
            message.channel.bulkDelete(10);
            message.channel.send("Ich habe die letzten 10 Nachrichten gelöscht!")
        }

        if(message.content === "!clear 50"){
            message.delete();
            if(!message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.send(`Du hast nicht genügend Rechte um diesen Command auszuführen!`)
                return;
            }
            message.channel.bulkDelete(50);
            message.channel.send("Ich habe die letzten 50 Nachrichten gelöscht!")
        }

        if(message.content.startsWith("!flip")){

            if(!coinfile[message.author.id]){
                coinfile[message.author.id] = {
                    coins: 100
                }
            }

            let bounty = message.content.split(" ").slice(1, 2).join("");

            let val = message.content.split(" ").slice(2, 3).join("");

            bounty = Number(bounty) 

            if(isNaN(bounty)) return message.reply("Du hast keine Zahl für die Coins angegeben!")

            if(!bounty) return message.reply("Du hast keine Coins angegeben!")

            if(!val) return message.reply("Du hast kein Kopf oder Zahl angegeben!")

            if(coinfile[message.author.id].coins < bounty) return message.reply("Du hast zu wenige Coins!")

            coinfile[message.author.id].coins -= bounty

            coinfile[message.author.id].coins = Number(coinfile[message.author.id].coins)

            let chance = Math.floor(Math.random() * 2);

            if(chance == 0) {
                if(val.toLocaleLowerCase() == "kopf"){
                    message.reply("Und es ist... **Kopf**! Dein Einsatz verdoppelt sich!")

                    bounty = bounty *2

                    coinfile[message.author.id].coins += bounty;

                    coinfile[message.author.id].coins = Number(coinfile[message.author.id].coins)
                }else{

                    if(val.toLocaleLowerCase() == "zahl"){
                        message.reply("Und es ist... **Kopf**! Du hast verloren!")
                    }else{
                        coinfile[message.author.id].coins += bounty

                        coinfile[message.author.id].coins = Number(coinfile[message.author.id].coins)

                        message.reply("Du hast **Kopf** oder **Zahl** falsch geschrieben oder an die falsche stelle gesetzt! ");
                    }
                }
            }else{

                if(val.toLocaleLowerCase() == "zahl"){
                    message.reply("Und es ist... **Zahl**! Dein Einsatz verdoppelt sich!")

                    bounty = bounty *2

                    coinfile[message.author.id].coins += bounty;

                    coinfile[message.author.id].coins = Number(coinfile[message.author.id].coins)
                }else{

                    if(val.toLocaleLowerCase() == "kopf"){
                        message.reply("Und es ist... **Zahl**! Du hast verloren!")
                    }else{
                        coinfile[message.author.id].coins += bounty

                        coinfile[message.author.id].coins = Number(coinfile[message.author.id].coins)

                        message.reply("Du hast **Kopf** oder **Zahl** falsch geschrieben oder an die falsche stelle gesetzt! ");
                    }
                }
            fs.writeFile("./coins.json", JSON.stringify(coinfile), err =>{
                if(err){
                    console.log(err);
                }
            })
            }
        }
         
        if(message.content === "!coins"){
            let embed = new Discord.MessageEmbed()
            .setTitle("Coins von " + message.author.username)
            .setDescription("Deine Coins: " + coinfile[message.author.id].coins)
            .setColor("YELLOW")

            message.channel.send(embed);
        }

        if(message.content.startsWith("!buyrank")){
            let rank;
            let mrank = message.content.split(" ").slice(1).join(" ");
            if(!mrank) return message.reply("Du hast keinen Rang zum kaufen angegeben!");

            for(var i=0;i<ranks.length;i++){
                if(isNaN(ranks[i])){
                    if(mrank.toLowerCase() == ranks[i].toLowerCase()){
                        rank = ranks[i];
                        break; 
                    }
                }
            }

            if(!rank){
                return message.reply("Dieser Rang existiert nicht! Bekomme eine Lister aller Ränge mit dem Command !buyrank list");
            }else{

                for(var i=0;i<ranks.length;i++){
                    if(isNaN(ranks[i]) && ranks[i] !== "list"){
                        if(rank == ranks[i]){
                            if(coinfile[message.author.id].coins < ranks[i+1]){
                                message.reply("Du hast zu wenig Geld um diesen Rang zu kaufen!");
                                return;
                            }

                            let name = message.member.nickname || message.author.username

                            if(name.includes(ranks[i].toUpperCase())){
                                message.reply("Du hast diesen Rang bereits!")
                                return;
                            }

                            coinfile[message.author.id].coins -= ranks[i+1];

                            let coins = ranks[i+1];
                             
                            //Mit Rolle

                            let role = message.guild.roles.cache.find(rl=>rl.name===ranks[i])

                            if(role){

                                message.member.roles.add(role).catch
                            }
                             //mit Nickname
                             
                              if(message.member.nickname){
                                  message.member.setNickname(" ");
                                  name = message.author.username;
                              } 

                              message.member.setNickname(` [${ranks[i].toUpperCase()}] ${name}`).then(()=>{
                                 message.channel.send(`Erfolgreich den rang ${rank} gekauft!`);
                            }).catch(err=>{
                                if(err){
                                   message.channel.send("Konnte den Rang nicht hinzufügen: "+err)
                                   coinfile[message.author.id].coins += coins;
                                   return;
                                }
                            })
                            
                        }  
                    }
                }

                if(rank == "list"){
                    let list = "";

                    for(var i=0;i<ranks.length;i++){
                        if(isNaN(ranks[i]) && ranks[i] !== "list"){
                            list+= `-${ranks[i]} - ${ranks[i+1]}\n\n`
                        }
                    }

                    let embed = new Discord.MessageEmbed()
                    .setTitle("Liste mit Rängen")
                    .setColor("BLACK")
                    .setDescription("Hier ist eine Liste mit allen Rängen und Preisen: \n\n"+list)

                    message.channel.send(embed)
                }
            }

            fs.writeFile("./coins.json",JSON.stringify(coinfile),function(err){
                if(err) console.log(err)
            })
            
        }
    }) 
      command(client, 'Admin', (message) => {
        
        const { guild } = message
        const icon = guild.iconURL()
        const embed = new Discord.MessageEmbed()

        .setTitle(`**Admin-Command Hilfe**`)
        .setThumbnail(icon)
        .setColor(`ff0004`)
        .setFooter('fresh', icon)
        .addFields(
            {
                name: '**Moderation Commands**',
                value: `
                **!ban** <@name> - Bannt den ausgewählten Nutzer! 
                **!kick** <@name> - Kickt den ausgewählten Nutzer!
                **!warn** <@name> - Warnt den ausgewählten Nutzer, dieser wird nach dem 3ten Warn gekickt!
                **!clear** 10,50,100 - Cleart die Letzten 10/50/100 Nachrichten!`
            },
            {
                name: '**Allgemeine Admin Commands**',
                value: `
                **!createwelcomechannel** <Nachricht> - Ein Welcomechannel wird festgellegt + Nachricht was beim beitreten stehen soll!
                **!createtextchannel** - Erstelle ganz einfach einen Text Channel!
                **!addcoins** <@> <Anzahl> - Gebe eine bestimmte Azahl an Coins an User! 
                `
            }
        )
        message.channel.send(embed)
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
    
})
client.login(config.token)
