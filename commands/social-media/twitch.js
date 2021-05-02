module.exports = {
    commands: ['vAzoniq twitch'],
    description: 'Link von vAzoniq wird gesendet!',
    callback:(message) => {
        message.channel.send(`
        Über diesen Link kommst du ganz einfach zum Twitch Kanal von vAzoniq! 
        https://www.twitch.tv/vazoniq7882`)
    }
}

