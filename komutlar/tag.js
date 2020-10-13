const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("> <a:litius_tac:756203772539175042> **Tagımızı Alarak Ailemize Katılmış Olursun Tagımız : ҂** <a:litius_parilti:758969116295561216>")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "tag",
  usage: "tag"
};
 