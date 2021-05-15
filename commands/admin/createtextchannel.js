module.exports = {
    commands:'createtext',
    callback: async(message) => {
       const name = message.content.replace('!createtext', '')

       message.guild.channels
       .create(name, {
           type: 'text',
        })
        .then((channel) => {
            console.log(channel)
        })
    },
    permissions: 'ADMINISTRATOR'
}