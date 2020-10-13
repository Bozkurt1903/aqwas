const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let msg = message
   const bune = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Litius Bot  \' İstatistiklerim', bot.user.avatarURL)
  .addField("<a:litius_yuklenio:756204116237090847> »**Botun Sahibi**", "<@447096605921771561>")
  .addField("<a:litius_yuklenio:756204116237090847> »**Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("<a:litius_yuklenio:756204116237090847> »**Çalışma süresi**", bune)
  .addField('<a:litius_yuklenio:756204116237090847> »**Kullanıcılar**:', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField("<a:litius_yuklenio:756204116237090847> »**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("<a:litius_yuklenio:756204116237090847> »**Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("<a:litius_yuklenio:756204116237090847> »**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("<a:litius_yuklenio:756204116237090847> »**Node.JS sürüm**", `${process.version}`, true)
  .addField("<a:litius_yuklenio:756204116237090847> »**Ping**", bot.ping+" ms", true)
  .addField("<a:litius_yuklenio:756204116237090847> »**Bit**", `\`${os.arch()}\``, true)
  .addField("<a:litius_yuklenio:756204116237090847> **» Destek Sunucusu**", " [TIKLA](https://discord.gg/ru4WgSJ)", )   
 return message.channel.send(annencilermaldır);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};