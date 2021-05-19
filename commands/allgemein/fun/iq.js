module.exports = {
    commands:'iq',
    callback: async(message) => {
        const zahl = Math.floor(Math.random() * 130) + 50
        message.reply(`Dein IQ liegt bei ${zahl}`)
    }
}