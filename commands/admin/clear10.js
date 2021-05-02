module.exports = {
    commands: ['clear 10'],
    permissions: 'ADMINISTRATOR',

    callback: (message ) => {
        message.delete();
        message.channel.bulkDelete(10);
        message.channel.send("Ich habe die letzten 10 Nachrichten gelöscht!")
    }
}