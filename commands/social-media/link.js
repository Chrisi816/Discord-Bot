module.exports = {
    commands: ['link'],
    description: 'Link von vAzoniq wird gesendet!',
    callback:(message) => {
        message.channel.send(`Einladungslink vom Bot: https://bit.ly/2QtBVGi`)
    }
}