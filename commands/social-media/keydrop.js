module.exports = {
    commands: ['vAzoniq key'],
    description: 'Link von vAzoniq wird gesendet!',
    callback:(message) => {
        message.channel.send(`Über diesen Link kommst du ganz einfach zu Keydrop, dort kannst du für geringes Geld CSGO Kisten aufmachen, diese Lohnen sich mehr über die Website zu kaufen als im eigendlichen Spiel! https://key-drop.com/?code=RXSQJ0EH (Dies ist ein Affiliate Link)`)
    }
}