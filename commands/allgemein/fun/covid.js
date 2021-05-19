const covid = require('covidapi')
const Discord = require('discord.js')
module.exports = {
    commands:'covid',
    callback: async(message) => {
        const img = 'https://s12.directupload.net/images/210510/3ue7d6xv.png'
        const data = await covid.all()
        const embed = new Discord.MessageEmbed()
        .setThumbnail(img)
        .setDescription("**Covid-19 Statistik**")
        .setColor("RED")
        .addField("Positive Fälle (insgesamt)", data.cases)
        .addField("Aktive Fälle", data.active)
        .addField("Heutige Fälle", data.todayCases)
        .addField("Kritische Fälle", data.critical)
        .addField("Tode", data.deaths)
        .addField("Heutige Tode", data.todayDeaths )
        .addField("Genesende", data.recovered)
        .addField("Befallende Länder", data.affectedCountries)
        .addField("Tests", data.tests)
        message.channel.send(embed)
    }
}