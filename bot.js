const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTAxNzI4NzkyNjUwMTg2ODAy.Dqdp_w.wtLFMdkIYr3G9ZOysoS_-0-9Sqo';

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

name1.edit({
 
nick: 'MARIA',
})

  setTimeout(guild3, 1 * 1e3);
} catch(e) {}}

client.once("ready", () => {
guild3();


  //process.exit();
  //process.on();
});




client.login(token)









