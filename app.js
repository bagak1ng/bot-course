const TelegramApi = require('node-telegram-bot-api')
const token = '5610101755:AAGm-QeXXL5VbXs_JoeW4BmLIctPbKXPVt0'
const bot = new TelegramApi(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветсвие'},
    {command: '/info', description: 'Получить информацию'}
])

const start = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/cody_epamlab/png/1.png')
            return bot.sendMessage(chatId, 'Welcome)')
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, 'Тебя зовут');
        }
        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!')
    })
}
start()