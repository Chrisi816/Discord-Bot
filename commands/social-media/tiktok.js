module.exports = {
    commands: ['vAzoniq tiktok'],
    description: 'Link von vAzoniq wird gesendet!',
    callback:(message) => {
        message.channel.send(`Über diesen Link kommst du ganz einfach zum Tiktok Account von vAzoniq! https://www.tiktok.com/@twitch.vazoniq7882?lang=de-DE`)
    }
}