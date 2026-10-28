
const TelegramBot = require('node-telegram-bot-api');

const token = '9113088442:AAEOhBp9nt9d45naFMVuYTc9RKOwkCb5uG8';

const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Received your message');
});

bot.on('text', (msg) => {
  const text = msg.text.toLocaleLowerCase();

  bot.sendMessage(msg.chat.id, 'Ты писал: ' + text);
})