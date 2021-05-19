module.exports = {
    commands: ['vAzoniq insta'],
    description: 'Link von vAzoniq wird gesendet!',
    callback:(message) => {
        message.channel.send(`Über diesen Link kommst du ganz einfach zum Insta Account von vAzoniq! https://www.instagram.com/twitch.vazoniq7882/`)
    }
}