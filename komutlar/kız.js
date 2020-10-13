const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.roles.has("756074026811523162"))
    return message.channel.send("Bu komudu kullanmak için yeterli yetkin yok!");

  let member = message.mentions.members.first();
  let isim = args[1];
  let yaş = args[2];
  let al = "756074039671259147"; ///alınacak rol idsi
  let ver = "756074038207709204"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  member.setNickname(`҂ ${isim} ' ${yaş}`);

  member.addRole(ver);
  member.removeRole(al);

  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("A S T E R O İ D E | Kayıt Sistemi")
    .setThumbnail(message.author.avatarURL)
    .setImage(`https://cdn.discordapp.com/attachments/757943519884083241/759440590865432576/litius_gif.gif`)
    .setDescription(
      `<a:litius_tac:756203772539175042>・Kayıt Edilen Kullanıcı : **${member.user}** \n <a:litius_parilti:758969116295561216>・Kayıt Eden Yetkili : ${message.author.username} \n <a:litius_yuklenio:756204116237090847>・Kayıt Islemınde Verılen Rol : <@&${ver}> \n <a:litius_mvikalp:758973355755175957>・Alınan Rol : <@&${al}>`
    );
  client.channels.get("759439178969776198").send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız", "Kız", "k"],
  permLevel: 0
};
exports.help = {
  name: "KIZ",
  description: "kız Kayıt Sıstemı",
  usage: "Kız isim yaş"
};
