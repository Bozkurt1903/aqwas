const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (bot, message, args) => {
  
  if (!message.member.roles.find('id', '756074026811523162')) return message.channel.send('Dostum Bu Komutu Kullanabilmek İçin **__҂ ›› Registery__** Yetkisine Sahip Olman Gerek');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Dostum Etiket Atmayı Unuttun**");
const verilecek = message.guild.roles.find('id', '756074035322028103');

const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`**${user}, Başarılı Şekilde <@&756074035322028103> Rolü Verdim  \n **`)
        .setColor('BLACK')
        .setTimestamp()
        message.channel.send(ky)
        message.react('756203857129767046') //tepki olarak eklenecek emoji ıd
    user.addRole(verilecek)
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["streamer"],
    permLevel: 0
}
exports.help = {
    name: 'streamer',
    description: 'streamer',
    usage: 'streamer'
}