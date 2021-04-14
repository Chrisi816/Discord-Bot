module.exports = {
    commands: ['deletechannel', 'delchannel'],
    maxArgs: 0,
    permissionError: 'Du musst Admin oder höher sein um diesen command zu benutzen!',
    permissions: 'ADMINISTRATOR',
    callback: (message, arguments, text) => {
        message.channel.delete()
    }
}