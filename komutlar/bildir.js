const Discord = require("discord.js");

exports.run = function(client, message, args) {
  let mesaj = args.slice().join(" ");
  if (!mesaj) return message.reply("lütfen Hata Bildirimini yazın");
  message.delete();
  client.users
    .get("599221285385404437")
    .send(
      new Discord.RichEmbed()
        .addField("Eylem", "Hata Bildirimi")
        .addField("Kullanıcı", message.author.tag)
        .addField("Sunucu", message.guild.name)
        .addField("Hata", mesaj)
    )
    .then(a =>
      message.channel.send(
        "***Hatayı Bildirdiğiniz İçin Teşkkürler En Kısa Zamanda Düzelicektir İyi Günler.***"
      )
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hatabildir", "hata-bildir"],
  permLevel: 0
};

exports.help = {
  name: "bildir",
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: "hata <mesaj>"
};
