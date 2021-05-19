const economy = require('../../mongo/econemy')
const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')

module.exports = {
    commands: 'work',
    cooldown: '20000',
    callback: async(message, args) => {
        const user = message.author
        const author = await db.fetch(`worked_${message.guild.id}_${user.id}`)
        const target = message.mentions.users.first() || message.author
        const guildId = message.guild.id
        const userId = target.id
        const timeout = 100

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            const coins = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, coins)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
        }
        const coins = Math.floor(Math.random() * 400) ;

        const newCoins = await economy.addCoins(guildId, userId, coins)
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`Jobcenter `)
        .addField(`Du hast etwas gearbeitet und`, `${coins} 💰 erhalten` )
        .addField(`Dein neuer Kontostand beträgt:`, `${newCoins} 💰`)
        .setColor(`YELLOW`)
        message.channel.send(embed)
    }
}