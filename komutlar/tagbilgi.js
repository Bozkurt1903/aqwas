const Discord = require('discord.js');

exports.run = function(client, message) {
  var tagdakiler = 0;
  let tag = ""; // tagınızı yazın
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('**҂**')
.setTimestamp()
.addField(' **Tag Nasıl Alınır**', 'Kullanıcı Adınıza **҂** Sembolü Ekleyerek **<@&756074032549462046>** Rolünü Alabilirsiniz.')
.addField(' **Tag Alınca Ne Olucak**', 'Alımlara Katılabilirsiniz ve Alımlarda Şansınız Dahada Çoğalacaktır.')
.addField(` **Tagımızda Toplam Bulunan Kişiler**`, `<@&756074032549462046> **${tagdakiler}**`)
.setFooter('A S T E R O İ D E', client.user.avatarURL)
.setTimestamp()
.setThumbnail('https://cdn.discordapp.com/attachments/756074094050541619/759107249158226000/litius_gif.gif') // tagınızın tasarımı ve ya bir tane resim
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'tag-bilgi',
  description: 'Tagınızın Bilgisini Gösterir !',
  usage: 'tag-bilgi'
};