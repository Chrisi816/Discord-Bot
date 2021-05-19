const Discord = require('discord.js')

module.exports = {
    commands: "ssp",
    description: "Schere, Stein, Papier",

    callback: async(message, args) => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Schere, Stein, Papier")
            .setDescription("Reagiere um zu spielen!")
            .setTimestamp()
            const msg = await message.channel.send(embed)
            await msg.react("✂")
            await msg.react("🗻")
            await msg.react("📃")

            const filter = (reaction, user) => {
                return ['✂', '🗻', '📃'].includes(reaction.emoji.name)&& user.id === message.author.id
            }

            const choices = ['✂', '🗻', '📃']
            const me = choices[Math.floor(Math.random() * choices.length)]
            msg.awaitReactions(filter, {max: 1, time: 6000, error: ["time"]}).then(
                async(collected) => {
                    const reaction = collected.first()
                    let result = new Discord.MessageEmbed()
                    .setTitle("Ergebnis")
                    .addField("Deine Wahl", `${reaction.emoji.name}`)
                    .addField("Meine Wahl", `${me}`)
                    await msg.edit(result)

                    if((me === "🗻"&& reaction.emoji.name === "✂") ||
                    (me === "✂" && reaction.emoji.name === "📃") ||
                    (me === "📃" && reaction.emoji.name === "🗻")) {
                        message.reply("Du hast verloren!");
                    } else if (me === reaction.emoji.name) {
                        return message.reply("Wir haben das gleiche!")
                    } else {
                        return message.reply("Du hast gewonnen!")
                    }
                    
                })
                .catch(collected => {
                    message.reply('Das Spiel ist zu Ende, du hast es nicht geschafft, in der angegeben Zeit zu interagieren! ')
                })
            
    }
}