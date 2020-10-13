const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var embed = new Discord.RichEmbed()

    .setTitle(`A S T E R O İ D E REGİSTER`)
    .setAuthor(`Bot Bilgi`, message.author.avatarURL)
    .setColor("GOLD")
    .setThumbnail(client.user.avatarURL)
    .addField(
      ` **<a:litius_tac:756203772539175042>・Botun Kullanıcı Sayısı**`,
      client.users.size
    )
    .addField(
      ` **<a:litius_rnkliyldz:758627690290348033>・Botun Olduğu Sunucu Sayısı**`,
      client.guilds.size
    )
    .addField(
      ` **<a:litius_kitap:758627695336095754>・Bottaki Komut Sayısı**`,
      client.commands.size
    )
    .addField(
      ` **<a:litius_tac1:756497603969155193>・Sahip**`,
      `<@447096605921771561>`,
      true
    )
    .addField(
      ` **<a:litius_yuklenio:756204116237090847>・Botun Geliştiricisi**`,
      `<@447096605921771561>`,
      true
    )
    .addField(
      ` **<a:litius_elmas:758982090674012188>・Bot Discord.js Versiyon**`,
      Discord.version
    )
    .addField(` **<a:litius_parilti:758969116295561216>・Bot İd**`, client.user.id)
    .setTimestamp();
  message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımcım"],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "Yapım Ekibini Gösterir",
  usage: "-yapımcım"
};
