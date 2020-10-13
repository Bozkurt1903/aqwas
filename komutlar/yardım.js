const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    message.react('744886943405441055')
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('<a:litius_yuklenio:756204116237090847> **Yapımcım: **', '@ァ ` Λ U Я O Я Λ#0001')
    .addField('<a:litius_yuklenio:756204116237090847> **Bot Kullanım Talimatı','Yetkililere Özel**')
    .addField('<a:litius_yuklenio:756204116237090847> **.yasakla etiket (sebeb)','Ban Hammer Özel Sebebsiz Atılmaz**')
    .addField('<a:litius_yuklenio:756204116237090847> **.mute etiket','Mute Hammer Sebebsiz Atılmaz**')
    .addField('<a:litius_yuklenio:756204116237090847> **.avatar','Profil Göz Atma**')
    .addField('<a:litius_yuklenio:756204116237090847> **.say','Sunucu istatik**')
    .addField('<a:litius_yuklenio:756204116237090847> **.ReklamTaraması','Özel Durumunda Reklam Olanları Gösterir**')
    .addField('<a:litius_yuklenio:756204116237090847> **.uyar Sebep','Belirtilen Kullanıcıya Uyarı Ekler**')
    .addField('<a:litius_yuklenio:756204116237090847> **.uyarılar (etiket)','Üyenin Kaç Uyarısı Var Bakar (+3 Uyarı Ban)**')
    .addField('<a:litius_yuklenio:756204116237090847> **.uyarısil (etiket)','Üye Uyarısını Siler**')
    .addField('<a:litius_yuklenio:756204116237090847> **.tagBilgi ','Tag Alınca Neler Olacağını Gösterir**')
    .addField('<a:litius_yuklenio:756204116237090847> **.afk','Afk Olursanız Kimse Etiket Atamaz**')
   message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};




