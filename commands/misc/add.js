module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'Du musst ein Admin oder höher sein um diesen Command zu nützen!',
    minArgs: 2,
    maxArgs: 2,
    cooldown: 10,
    description: 'Adds two numbers',
    callback: (message, arguments, text) => {
        // Todo: Add the numbers
    }, 
    permissions: 'ADMINISTRATOR',
    requiredRoles: [], 
}