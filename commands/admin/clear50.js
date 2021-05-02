module.exports = {
    commands: ['clear 50'],
    permissions: 'ADMINISTRATOR',

    callback: (message ) => {
        message.delete();
        message.channel.bulkDelete(50);
        message.channel.send("Ich habe die letzten 50 Nachrichten gelöscht!")
    }
}