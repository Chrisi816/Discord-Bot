// Copyright by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#0001 \\

const Discord = require ('discord.js')
module.exports = {
    name: 'Sugestion',
    commands: ['suggestion', 'vorschlag'],
    permissions: [],
    description: 'Erstelle eine Umfrage bzw. einen Vorschlag!',
    callback(message, args){
          const channel = message.guild.channels.cache.find(ch => ch.name === '╠═丨❗𝕔𝕠𝕞𝕞𝕒𝕟𝕕𝕤', 'Umfragen');
          if(!channel) return message.channel.send('Umfragen/Vorschlag Channel existiert nicht! Erstelle mindestens ein Channel der "Umfragen" heißt!')
        
          let messageArgs = args.join(' ');
          const embed = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(messageArgs);

          channel.send(embed).then((msg) =>{
              msg.react('👍');
              msg.react('👎');
              message.delete();
          }).catch((err)=>{
              throw err;
          })
    }
}