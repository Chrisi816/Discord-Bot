const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
    commands: ['lv', 'leave', 'stop'],
    description: 'Stop command for the Music Bot',
    callback: async (message, args, cmd, client, Discord) => {

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Du musst in einem Kanal sein um diesen Command auszuführen!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Du hast nicht die Ausreichenden Rechte um diesen Command auszuführen!');
        if (!permissions.has('SPEAK')) return message.channel.send('Du hast nicht die Ausreichenden Rechte um diesen Command auszuführen!');
        const server_queue = queue.get(message.guild.id);

        let song = {};

        await voice_channel.leave();
        await message.channel.send('Verlassen vom Channel :smiling_face_with_tear:')

        const queue_constructor = {
            voice_channel: voice_channel,
            text_channel: message.channel,
            connection: null,
            songs: []
        }

        stop_song(message, server_queue);
        queue.set(message.guild.id, queue_constructor);
        queue_constructor.songs.push(song);

        try {
            const connection = await voice_channel.join();
            queue_constructor.connection = connection;
            video_player(message.guild, queue_constructor.songs[0]);
        } catch (err) {
            queue.delete(message.guild.id);
            message.channel.send('Ich kann dem Kanal nicht joinen!');
            throw err;
        }

        
    }
}
const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        
        queue.delete(guild.id);
        return;
    }
}
const stop_song = async (message, server_queue) => {
    
    if (!message.member.voice.channel) return message.channel.send('Du musst in einem Kanal sein um diesen Command auszuführen!');
    song_queue.voice_channel.leave();
    server_queue.connection.dispatcher.end();
}

