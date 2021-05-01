module.exports = async (client) => {
    const guild = client.guilds.cache.get('775033960300019732');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('829067744380321874');
        channel.setName(`Member: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    } , 40000);
   
}