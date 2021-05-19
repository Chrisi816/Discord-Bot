module.exports = {
    commands:'createvoice',
    callback: async(message) => {
       const name = message.content.replace('!createvoice', '')

       message.guild.channels
       .create(name, {
           type: 'voice',
        })
        .then((channel) => {
            console.log(channel)
        })
    },
    permissions: 'ADMINISTRATOR'
}