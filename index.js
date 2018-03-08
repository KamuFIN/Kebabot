const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == '!hä'){
        message.channel.send('<:teemu:421318643650134026>');
    }

    if(message.content == '!server mute'){
        message.channel.send('Ei se noin toimi');    
    
    }

    if(message.content == '!apuwa'){
        message.reply('Kyl tälläset pitäis vähä urpommanki kaverin jo tietää >:(')
        message.channel.send('`!hä`')
        message.channel.send('`!server mute`');
        
        
    }

})

bot.login(process.env.BOT_TOKEN);
