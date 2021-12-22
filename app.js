const { Telegraf } = require('telegraf')

const bot = new Telegraf('5026206926:AAEfVlPQLaqpeVGzGg3GZeWR0Vud7csPE6E') //сюда помещается токен, который дал botFather
 
bot.start((ctx) => {
    ctx.reply('Привет!Хочешь найти питомца? Я помогу тебе в этом.\nЕсли хочешь узнать мой функционал, напиши /help', {
            "reply_markup": {
                "keyboard": [["Кот","Собака"], ["Кролик","Паук"]]
            }
        })
    });

bot.help((ctx) => {
    ctx.reply('Я отправляю готовую ссылку, где ты можешь купить понравившегося питомца. За тобой только выбрать') 
    });   

    bot.hears('Кот', ctx => {
        ctx.reply('Приятного поиска\nhttps://www.avito.ru/moskva/koshki')
    })
    bot.hears('Собака', ctx => {
        ctx.reply('Приятного поиска\nhttps://www.avito.ru/moskva/sobaki')
    })
    bot.hears('Кролик', ctx => {
        ctx.reply('Приятного поиска\nhttps://www.avito.ru/moskva/drugie_zhivotnye?q=кролик')
    })
    bot.hears('Паук', ctx => {
        ctx.replyWithHTML(`<b> Серьезно ты выбрал это? </b>`+ `\nhttps://www.avito.ru/moskva/drugie_zhivotnye?q=пауки`)
    })
    
    bot.on('text', ctx => {
        ctx.reply('Я глупый и не понимаю, что вы написали(0(')
    });
      

bot.launch() // запуск бота


