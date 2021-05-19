const discord = require('discord.js')

module.exports = {
    commands: "invite",
    description: "Sendet deine Aktuelle Invite List mit Codes!",
    callback: async ( message, args ) => {
    const invite = await message.guild.fetchInvites();

    const user = message.mentions.users.first() || message.author
    const Inv = invite.filter(u => u.inviter && u.inviter.id === user.id)
    
    if(Inv.size <= 0) {
        return message.channel.send(`${user.username} Du hast noch niemanden Eingeladen! `)
    }

    const invCodes = Inv.map(x => x.code).join('\n')
    let i = 0;
    Inv.forEach(inv => i += inv.uses)

    const embed = new discord.MessageEmbed()
    .setTitle(`**Einladungen** von ${user.username} `)
    .addField('Insgesamt:', i )
    .addField('Codes:', invCodes)
    .setColor('BLUE')
    .setTimestamp()
    message.channel.send(embed)
    }
}