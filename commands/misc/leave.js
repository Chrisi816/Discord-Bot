module.exports = {
    commands: 'leave',
    description: 'stop the bot and leave the channel',
    callback: async (message, args) => {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Du musst in einem Channel sein um die Musik zu stopen!");
        await voiceChannel.leave();
        await message.channel.send('Verlassen vom Channel :smiling_face_with_tear:')
 
    }
}