module.exports = {
    commands:'test',
    callback: async(message) => {
        number = 6;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1 
        message.channel.send ("Wer mag keine Frauen?", {files: ['../../../images/' + imageNumber + ".jpg"]})
    }
}