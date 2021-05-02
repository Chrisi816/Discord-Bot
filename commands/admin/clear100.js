module.exports = {
    commands: ['clear 100'],
    permissions: 'ADMINISTRATOR',

    callback: (message ) => {
        message.delete();
        message.channel.bulkDelete(100);
        message.channel.send("Ich habe die letzten 100 Nachrichten gelöscht!")
    }
}