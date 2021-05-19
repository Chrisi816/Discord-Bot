module.exports = {
    commands: ['vAzoniq gaming'],
    description: 'Link von vAzoniq wird gesendet!',
    callback:(message) => {
        message.channel.send(`Über diesen Link kommst du ganz einfach zu Instant Gaming, dort kannst du ganz billig Spiele kaufen! https://www.instant-gaming.com/?igr=vAzoniq-7882 (Dies ist ein Affiliate Link)`)
    }
}