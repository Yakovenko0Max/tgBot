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
        ctx.reply('Напишите название канала twitch')
        ctx.reply('https://www.twitch.tv\n\nhttps://streamersbase.ru \n↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ \nЗдесь можно чекнуть био стримера')
        bot.on('text', ctx => {
                ctx.reply(`https://www.twitch.tv/${ctx.message.text}`) //поиск по twitch
                
        });
    });
    bot.hears('YouTube', ctx => {
        ctx.reply('Напишите название канала youtube')
        ctx.reply('https://www.youtube.com')
        bot.on('text', ctx => {
             
                ctx.reply(`https://www.youtube.com/c/${ctx.message.text}`) //поиск по youtube
        });
    });
    bot.hears('Здесь я', ctx => {
        ctx.reply('https://vk.com/wiwipower\n\nTg - @Mavak1')
    });
    bot.hears('nigger', ctx => {
        ctx.replyWithPhoto(
            'https://img.prosports.kz/news/content//202110/210228_5a4addeafe70e069e358d98a58b1d2a7.png',
            {
                caption: 'Отлетаешь в бан, друг'
            }
        )
    });
    bot.hears('пидор', ctx => {
        ctx.replyWithPhoto(
            'https://img.prosports.kz/news/content//202110/210228_5a4addeafe70e069e358d98a58b1d2a7.png',
            {
                caption: 'Отлетаешь в бан, друг'
            }
        )
    }); 
bot.launch() 


