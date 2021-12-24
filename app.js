const { Telegraf } = require('telegraf')

require('dotenv').config();
const bot = new Telegraf(process.env.token);
 
bot.start((ctx) => {
    ctx.reply('Привет!Хочешь чекнуть стрим или видео? Я помогу тебе в этом.\nЕсли хочешь узнать мой функционал, напиши /help', {
            "reply_markup": {
                "keyboard": [["Twitch","YouTube"], ["Здесь я"]]
            }
        })
    });

bot.help((ctx) => {
    ctx.reply('Я отправляю готовую ссылку, где ты можешь посмотреть стрим или видео. За тобой только ник(Напиши его правильно пж)') 
    });   

    bot.hears('Twitch', ctx => {
        ctx.reply('https://www.twitch.tv\n\nhttps://streamersbase.ru \n↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ \nЗдесь можно чекнуть био стримера')
    });
    bot.hears('YouTube', ctx => {
        ctx.reply('https://www.youtube.com')
    });
    bot.hears('Здесь я', ctx => {
        ctx.reply('https://vk.com/wiwipower\n\nTg - @Mavak1')
    });
    
    bot.on('text', ctx => {
        console.log(ctx.message);
        
            ctx.reply(`https://www.twitch.tv/${ctx.message.text}\n\n\nhttps://www.youtube.com/c/${ctx.message.text}`) //поиск по twitch и youtube
    });

   
   
   
bot.launch() 


