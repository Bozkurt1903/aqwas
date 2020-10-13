const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, prefix, ayar, emoji) => {
  let erkekRolü = "756074039092707328";
  let kızRolü = "756074038207709204";
  let ekipRolü = "756074032549462046";
  const embeddd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setDescription(
    `**<a:litius_tac:756203772539175042>・Toplam Üye : ${
        message.guild.memberCount
      }** \n **<a:litius_kitap:758627695336095754>・Toplam Aktif Üye : ${
        message.guild.members.filter(b => b.presence.status !== "offline").size
      
      }** \n **<a:litius_tac1:756497603969155193>・Erkek Üye : ${
        message.guild.roles.get(erkekRolü).members.size
      
      }** \n **<a:litius_parilti:758969116295561216>・Kız Üye : ${
        message.guild.roles.get(kızRolü).members.size
      
      }** \n **<a:litius_rnkliyldz:758627690290348033>・Taglı Üye : ${
        message.guild.roles.get(ekipRolü).members.size
      
      }** \n **<a:litius_yuklenio:756204116237090847>・Aktif Erkek Üye : ${
        message.guild.roles
          .get(erkekRolü)
      
          .members.filter(x => x.presence.status !== "offline").size
      }**  \n **<a:litius_mvikalp:758973355755175957>・Aktif Kız Üye : ${
        message.guild.roles
          .get(kızRolü)
      
          .members.filter(x => x.presence.status !== "offline").size
      }** \n **<a:litius_parilti:758969116295561216>・Aktif Taglı Üye : ${
        message.guild.roles
          .get(ekipRolü)
      
          .members.filter(x => x.presence.status !== "offline").size
      }** \n **<a:litius_mavi:758970897477664789>・Ses Kanalında Bulunan : ${
        message.guild.members.filter(a => a.voiceChannel).size
      }**`
    );
  message.channel.send(embeddd);
  message.react('756203772539175042')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sunucudaki üyeleri sayar.",
  usage: "-say",
  kategori: "moderasyon"
};