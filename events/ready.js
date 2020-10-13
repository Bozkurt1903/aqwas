const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Bot Dosyalari Korunuyor`
  );
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]  Koruma Calisiyor.`);
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] Sunucu Aktif!`);
  client.user.setActivity(`A S T E R O İ D E | .help`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/asteroide"
  });
  console.log(`Hazir Sunucuyu Baslatin...`);
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] Vaxe.`);
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] Sunucu Aktif!`);
};
