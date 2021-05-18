const { prefix } = require('../config.json')

const validatePermissions = (permissions) => {
    const validPermissions = [
'CREATE_INSTANT_INVITE',	
'KICK_MEMBERS',			
'BAN_MEMBERS', 		
'ADMINISTRATOR',	
'MANAGE_CHANNELS', 	
'MANAGE_GUILD',
'ADD_REACTIONS',	
'VIEW_AUDIT_LOG',	
'PRIORITY_SPEAKER',	
'STREAM',	
'VIEW_CHANNEL',		
'SEND_MESSAGES',	
'SEND_TTS_MESSAGES',		
'MANAGE_MESSAGES',
'EMBED_LINKS',	
'ATTACH_FILES',	
'READ_MESSAGE_HISTORY',	
'MENTION_EVERYONE',	
'USE_EXTERNAL_EMOJIS',
'VIEW_GUILD_INSIGHTS',		
'CONNECT',	
'SPEAK',
'MUTE_MEMBERS',	
'DEAFEN_MEMBERS',	
'MOVE_MEMBERS',	
'USE_VAD',	
'CHANGE_NICKNAME',	
'MANAGE_NICKNAMES',	
'MANAGE_ROLES', 
'MANAGE_WEBHOOKS', 
'MANAGE_EMOJIS' 
]

    for (const permission of permissions) {
        if (!validPermissions.includes(permission)) {
           throw new Error(`Unbekannte Permission "${permission}"`)
        }
    }
}

let recentlyRan = []

module.exports = (client, commandOptions) =>  {
   let {
       commands,
       expectedArgs = '',
       permissionError = 'Du hast nicht genug Rechte um diesen Command auszuführen!',
       minArgs = 0, 
       maxArgs = null,
       cooldown = -1,
       permissions = [],
       requiredRoles = [],
       
       callback
   } = commandOptions

   if (typeof commands === 'string') {
       commands = [commands]
   }
   
   if (permissions.length) {
       if (typeof permissions === 'string') {
           permissions = [permissions]
       }

       validatePermissions(permissions)
   }
   // zuhören von nachrichten 
   client.on('message', (message) => {
       const { member, content, guild } = message

       for (const alias of commands) {
           const command = `${prefix}${alias.toLowerCase()}`
            
           if (
            content.toLowerCase().startsWith(`${command} `) ||
            content.toLowerCase() === command
          ) {
              
            for (const permission of permissions) {
                if (!member.hasPermission(permission)) {
                    message.reply(permissionError)
                    return
                }
            }
            
            for (const requiredRole of requiredRoles) {
                const role = guild.roles.cache.find((role) =>
                    role.name === requiredRole)

                    if (!role || !member.roles.cache.has(role.id)) {
                        message.reply(`Du musst "${requiredRole}" besitzen um diesen Command auszuführen!`)
                      
                        return
                    }
                }

                let cooldownString = `${guild.id}-${member.id}-${commands[0]}`
                if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
                    message.reply(`Warte mal ${cooldown} Sekunden!! `)
                    return
                }

         const arguments = content.split(/[ ]+/)

         arguments.shift()

         if (arguments.length < minArgs || ( 
             maxArgs !== null && arguments.length > maxArgs)
         ) {

            message.reply(`Falsche Syntax! Benutze ${prefix}${alias} ${expectedArgs}`)
            return
         }

        if (cooldown > 0) {
            recentlyRan.push(cooldownString)
               
            setTimeout(() => {
                recentlyRan = recentlyRan.filter((string) => {
                    return string !== cooldownString
                })

            }, 1000 * cooldown)
        }

         callback(message, arguments, arguments.join(' '), client)

         return
        }
      }
   })
}