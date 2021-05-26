module.exports = async (client) => {
    const guild = client.guilds.cache.get('775033960300019732');
    setInterval(() => {
        const channel = guild.channels.cache.get('847197527827939398');
        channel.setName(`Role-Count: ${guild.roles.cache.size}`);
        console.log('Updating Role Count');
    } , 1000000000);
}