const Discord = require('discord.js')

module.exports ={
   commands: "howgay",
   description: "test how gay you are!",
   callback: async (message, args) => {
          const member = message.mentions.users.first() || message.author

          let rng = Math.floor(Math.random() * 101)

          const embed = new Discord.MessageEmbed()
          .setTitle(`**Gay Maschine**`)
          .setDescription(`${member} ist zu ` + rng + "% Gay")
          .setColor("RED")

          message.channel.send(embed)
    }

}