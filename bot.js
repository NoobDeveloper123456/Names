const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTAxNzI4NzkyNjUwMTg2ODAy.DqiAJw.W6mzrM8hcqpueuMaYDFiP-fUBGI';

function guild3() {
try {
var guild = client.guilds.get('497791215727542285');
  var name1 = guild.members.get('481362937622036481');//.setNickname("some nickname");

name1.edit({
 
nick: 'M',
})

name1.edit({
 
nick: 'Ma',
})
name1.edit({
 
nick: 'Mar',
})
name1.edit({
 
nick: 'Mari',
})
name1.edit({
 
nick: 'Maria',
})

  setTimeout(guild3, 10 * 1e3);
} catch(e) {}}

client.once("ready", () => {
guild3();
});




client.login(token)





client.on('ready', () => {
 client.user.setPresence({ status: 'dnd', game: { name: `🎀💗 Bot Dev Jia 100% 💗🎀`, type: `WATCHING` } });  
});



