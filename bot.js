//init bot
const TeleBot = require('telebot');
const bot = new TeleBot('461721692:AAHKxW50YSFcZpohLNVloouPWJGHEkKHSfk');
//first command
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));   
bot.start();
