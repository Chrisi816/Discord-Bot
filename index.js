const Discord = require ('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./commands')
const commands = require('./commands')

client.on('ready', () => {
    console.log('Ich bin Bereit!')

})
  client.on('ready', () => {

   command(client, 'twitch', (message) => {
       message.channel.send('Über diesen Link kommst du ganz einfach zum Twitch Kanal von vAzoniq! https://www.twitch.tv/vazoniq7882')

    })

    command(client, 'gaming', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zu Instant Gaming, dort kannst du ganz billig Spiele kaufen! https://www.instant-gaming.com/?igr=vAzoniq-7882 (Dies ist ein Affiliate Link)')
 
     })

    command(client, 'key', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zu Keydrop, dort kannst du für geringes Geld CSGO Kisten aufmachen, diese Lohnen sich mehr über die Website zu kaufen als im eigendlichen Spiel! https://key-drop.com/?code=RXSQJ0EH (Dies ist ein Affiliate Link)')
 
     })
 
    command(client, 'insta', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zum Insta Account von vAzoniq! https://www.instagram.com/twitch.vazoniq7882/')
 
    })

     command(client, 'tiktok', (message) => {
        message.channel.send('Über diesen Link kommst du ganz einfach zum Tiktok Account von vAzoniq! https://www.tiktok.com/@twitch.vazoniq7882?lang=de-DE')
     })

     command(client, 'maushaus', (message) => {
        message.channel.send('Mit diesem Link kommst du zum Besten Youtuber auf Yt! ;) https://www.youtube.com/channel/UCqoQRnEXO1GaJMTSTFzpFBQ ')
 
     })

    // !member -> So viele Member sind aufm Server von vAzoniq!

   command(client, 'member', (message) => {
       client.guilds.cache.forEach((guild) => {
         message.channel.send(
             `${guild.name} hast a total of ${guild.memberCount} members`
         )
       })
   })

   command(client, 'status', (message) => {
       const content = message.content.replace('!status ', '')
       // "!status hello world" -> "hello world"

       client.user.setPresence({
           activity: {
               name: content,
               type: 0,
           },
       })
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
    
    command(client, 'embad', (message) => {
        const logo = 
              'https://s18.directupload.net/images/210330/ta7643ol.png'

        const embed = new Discord.MessageEmbed()
        .setTitle('```Update V.1.1```')
        .setURL('https://docs.google.com/document/d/1JEgRshmmPRpjmBPYUuu9l395VmLSzX3opC8B0KX4vx8/edit?usp=sharing')
        .setAuthor(message.author.username)
        .setImage(logo)
        .setThumbnail(logo)
        .setFooter('Fresh', logo) 
        .setColor('00AAFF')

        message.channel.send(embed)
    })

    command(client, 'serverinfo', (message) => {
        const { guild } = message

        const { name, region, owner, memberCount, channelCount , afkTimeout } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Server info für "${name}"`)
        .setThumbnail(icon)
        .addFields(
           {
               name: 'Inhaber',
               value: owner.user.tag,
           },
           {
               name: 'Region',
               value: region,
           },
           {
               name: 'Members',
               value: memberCount,
           }, 
           {
               name: 'AFK Timeout',
               value: afkTimeout / 60,
           },
           )

        message.channel.send(embed)
        })

            command(client, 'help', (message) => {
                message.channel.send(`
Das sind all unsere commands:

**!help** - Help Menü
**!twitch** - Link zum Twitch Kanal von vAzoniq wird gepostet!
**!insta** - Link zum Insta Account von vAzoniq wird gepostet!
**!tiktok** - Link zum Tiktok Account von vAzoniq wird gepostet!
**!gaming** - Link zu Instant-Gaming wird gepostet!
**!key** - Link zu keydrop wird gepostet!
                                     `)
                    })
                    const { prefix } = config
                client.user.setPresence({
            activity: {
            name: `${prefix}help for help (Developed by Chrisi)`
        },
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
})

client.login(config.token)
