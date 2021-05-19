const api = require("imageapi.js")
const Discord = require('discord.js')

module.exports = {
    commands:'meme',
    callback: async(message) => {
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
}