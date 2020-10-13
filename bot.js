const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db"); 
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express(); 
app.get("/", (request, response) => {
  console.log(Date.now() + "Anemon | Public Server");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
}; 

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    }); 
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   lordCreative(chalk.bgBlue.green(e.replace(regTokenfynx 'that was redacted')));
// }); //DEVİLHOUSE//

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
//----------------------------------OTOTAG----------------------------------//
client.on("userUpdate", async (old, nev) => {
  if (old.username !== nev.username) {
    if (
      !nev.username.includes("҂") &&
      client.guilds
        .get("755726832283942963") //Kanal ıd
        .members.get(nev.id)
        .roles.has("756074032549462046") //tag rolü ıd
    ) {
      client.guilds
        .get("755726832283942963")
        .members.get(nev.id)
        .removeRole("756074032549462046"); //tag rolü ıd
      client.channels
        .get("756074087943766077") //kanal ıd
        .send(
       `**${nev}, "**҂**" Tagını çıkardığı için ҂ A S T E R O İ D E tarafından ҂'Fâmily Of Asteroide rolü alındı!**`
        );
    }
    if (
      nev.username.includes("҂") &&
      !client.guilds
        .get("756074087943766077") //kanal
        .members.get(nev.id)
        .roles.has("756074032549462046") //rol
    ) {
      client.channels
        .get("756074087943766077") //Kanal
        .send(
          `**${nev}, "**҂**" Tagını aldığı için ҂ A S T E R O İ D E tarafından ҂'Fâmily Of Asteroide rolü verildi!**`
        );
      client.guilds
        .get("755726832283942963") //kanal
        .members.get(nev.id)
        .addRole("756074032549462046"); // rol
    }
  }
});

//---------------------------------KOMUTLAR---------------------------------\\
///Sesli Kanal 

client.on("ready", () => {
  client.channels.get("756512455894761592").join();
});

///OTO CEVAP SİSTEMİ

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "tag") {
    msg.reply("**҂**");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "litius") {
    msg.reply(
      "**<a:litius_tac:756203772539175042> Litius ? Kimse Baş EDEMEZ ? <3 <a:litius_tac:756203772539175042>**"
    );
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "emre") {
    msg.reply(
      "**<a:litius_tac:756203772539175042> __Kralınız geldi diz çökün bükemediğiniz eli öpeceksiniz__ <3 <a:litius_tac:756203772539175042>**"
    );
  }
}); 
  ///HOJGELDİN MESAJI 

client.on("guildMemberAdd", async member => {
    var üs = üyesayısı.match(/([0-9])/g)
  await member.addRole(`756074039671259WEQ7`); //id yazan yere verilecek rol (unregistered)
  await member.setNickname(`҂ İsim | Yaş`); //yeni gelen kullanıcının adını değiştirme
  let member2 = member.user;
  let zaman = new Date().getTime() - member2.createdAt.getTime();
  var user = member2;
  var takizaman = []; var üyesayısı = member.guild.members.size.toString().replace(/ /g, "    ")
  if (zaman < 604800000) {
    takizaman = "<a:litius_uyari:758628423484178433> Güvenilir Değil!";
  } else {
    takizaman = `<a:litius_tik:756203857129767046> Güvenli`;
  }
  require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime();
  const gecen = moment
    .duration(zaman1)
    .format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`);
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`);
  let message = member.guild.channels.find(x => x.id === `759439088595501066`); //id yazan kısma kanal id'si [orn: register-chat]
  const taki = new Discord.RichEmbed()
    .setTitle(
      "<a:litius_tac1:756497603969155193> A S T E R O İ D E | Kayıt Sistemi <a:litius_tac1:756497603969155193>"
    )
    .setTimestamp()
    .setDescription(
`<a:litius_tac:756203772539175042> **・** **Sunucumuza Hoş geldin** ${member} 
   
<a:litius_elmas:758982090674012188> **・Seninle Beraber**  ${message.guild.memberCount} **Kişiyiz**

<a:litius_mavi:758970897477664789> **・** **Kaydının Yapılması İçin Ses Teyit Odalarından Birine Girmelisin...**

<a:litius_yuklenio:756204116237090847> **・** **<@&756074026811523162>** **Rolündeki Yetkililer Seninle İlgilenecektir**

<a:litius_parilti:758969116295561216> **・** **Sunucumuzun Sınırsız Davet Bağlantısı : https://discord.gg/TUuFe4a**


<a:litius_kitap:758627695336095754> **・** **Hesap Açılalı** ${gecen} **Olmuş**
<a:litius_yuklenio:756204116237090847> **・** **Bu Kullanıcı** **|** **${takizaman}**`
    )
    .setImage(
      "https://media.discordapp.net/attachments/756417425272078406/758408288428752916/ezgif.com-video-to-gif_1-3.gif"
    )

    .setColor("#ff0000");
  message.send(taki);
});

////HOŞ GELDİN MESAJI

//-----------------------sthg----------------------\\     

client.on("guildMemberAdd", member => {  
    var üyesayısı = member.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:litius_sifir:756859638082699305>`,
    '1': `<a:litius_bir:756859120019308675>`,
    '2': `<a:litius_iki:756859205478121522>`,
    '3': `<a:734839508285259837:757943752487862374>`,
    '4': `<a:734839508188659721:757944753839931523>`,                       
    '5': `<a:734839508003979424:757944804184293456>`,
    '6': `<a:734839508146716735:757944924921659512>`,
    '7': `<a:734839507370901516:757944977132093560>`,
    '8': `<a:734847675005927526:757945009201872947>`,
    '9': `<a:734839508326940735:757945088264503376>`}[d];
      })
    }
    const kanal = "758602674576424960"; 
    let user = client.users.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    const embed = new Discord.RichEmbed()
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = ' **Hesap Güvenilir Değil**'
  if (kurulus > 1296000000) kontrol = ' **Hesap Güvenilir**'
    moment.locale("tr");
    let stg = client.channels.get(kanal);
  stg.send("**<a:750747432522088609:758211262604771419>  • Hoşgeldin! " + member + " Seninle "+ üyesayısı +" Kişiyiz.**  \n\n** <a:750756218829537280:758614904470110228> • Müsait olduğunda Teyit Odalarından Birine Geçip Kaydını Yaptırabilirsin..**  \n\n**<a:743828941080494130:758213599042207784> • <@&758602547337887755> Rolüne Sahip Kişiler Seninle İlgilenecektir.**\n\n**<a:689444595507134521:758211440413769738> • Hesabını" + moment(member.user.createdAt).format(" YYYY DD MMMM dddd (hh:mm:ss) ") +  " Tarihinde Oluşturmuşsun.** \n\n**<a:750595944407367701:758213437091872768> • Hesap Durumu:** "  + kontrol + "   \n\n**<a:747992284594962542:757947778503671898> • Tagımızı alarak `仒` bize destek olabilir ve kayıt olabilirsin.** \n\n"
    );
  });
  
//-----------------------sthg----------------------\\     
  