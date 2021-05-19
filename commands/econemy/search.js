const economy = require('../../mongo/econemy')
const Discord = require('discord.js')

module.exports = {
    commands: 'search',
    cooldown: '400',
    callback: async(message, args) => {
        const target = message.mentions.users.first() || message.author
        const guildId = message.guild.id
        const userId = target.id
        var min = 110;
        var max = 380;
        const coins = Math.floor(Math.random() * (max - min))
        let ort = ["im Busch","unterm Bett","in der Mülltonne","im Polizeirevier","im Bankautomat","in deiner Mutter","im Auto deines Vaters","in den Abwasserrohren deiner Stadt","in der Sofa Ritze","in der Toilette","hinter dem Sofa","in deinem Pc","in deinm Butterbrot", 
        "in der Gießkanne","im Kafe","unterm Bett","neben dem Bett","hinter dem Fernseher","hinter deinem Schreibtisch","in deinem Essen",
        "in deinem PC","in deiner Schultasche", "in deinem Mäpchen","in deiner Tastatur","in deinem Hund","in deiner Katze","in deinem Arschloch", 
        "in deiner Nintendo Switch","in deiner Ps4", "in deiner Ps5","in deiner XBOX 360","in deiner XBOX One","in deiner Hose","in deinem T-Shirt","in deiner Unterhose","in deinen Socken","in deinen Schuhen","in deinen Haaren",
        "in der Küche","in deinem Wohnzimmer","in deinem Bad"
    ]
        let result = Math.floor((Math.random() * ort.length))
        
        const newCoins = await economy.addCoins(guildId, userId, coins)
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`Du hast ${ort[result]} gesucht!`)
        .addField(`Du erhältst`, `${coins} 💰`  )
        .addField(`Dein neuer Kontostand:`, `${newCoins} 💰`)
        .setColor(`YELLOW`)
        message.channel.send(embed)
    }
}