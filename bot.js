const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTAxNzI4NzkyNjUwMTg2ODAy.DqiAJw.W6mzrM8hcqpueuMaYDFiP-fUBGI';

function guild3() {
try {
var guild = client.guilds.get('497791215727542285');
  var name1 = guild.members.get('481362937622036481');//.setNickname("some nickname");

name1.edit({
 
nick: '𝗠𝗔𝗥𝗜𝗔',
})

name1.edit({
 
nick: 'ᴹᴬᴿᴵᴬ',
})
name1.edit({
 
nick: '𝗠𝗔𝗥𝗜𝗔',
})
name1.edit({
 
nick: 'ᴹᴬᴿᴵᴬ',
})
name1.edit({
 
nick: '𝗠𝗔𝗥𝗜𝗔',
})

  setTimeout(guild3, 10 * 1e3);
} catch(e) {}}


function guild1() {
try {


  var guild = client.guilds.get('497791215727542285');
  var role1 = guild.roles.get('497818922951770113');
  var ch1 = role1


ch1.edit({

color: '#FCD0F5',
})

  
ch1.edit({

color: '#FF5D05',
})

  
ch1.edit({

color: '#FF0000',
})

  
ch1.edit({

color: '#FF57AE',
})
  
  
ch1.edit({

color: '#EE82EE',
})
   
  
ch1.edit({

color: '#3700FF',
})   

  
ch1.edit({

color: '#0DFF00',
})  

  
ch1.edit({

color: '#1b1b1b',
})
   



  setTimeout(guild1, 5 * 1e3);
} catch(e) {}}

function guild4() {
try {


  var guild = client.guilds.get('497791215727542285');
  var role1 = guild.roles.get('503821595979022336');
  var ch1 = role1


ch1.edit({
color: '#ff0000',
}) 
ch1.edit({
color: '#ff0000',
})
ch1.edit({
color: '#ff0000',
}) 
ch1.edit({
color: '#0d0d0d',
}) 
  setTimeout(guild4, 4 * 1e3);
} catch(e) {}}

function guild5() {
try {


  var guild = client.guilds.get('497791215727542285');
  var role1 = guild.roles.get('503821595278704651');
  var ch1 = role1


ch1.edit({
color: '#cc0066',
}) 
ch1.edit({
color: '#cc0066',
})
ch1.edit({
color: '#cc0066',
}) 
ch1.edit({
color: '#0d0d0d',
}) 
  setTimeout(guild5, 4 * 1e3);
} catch(e) {}}

function guild2() {
try {
var guild = client.guilds.get('497791215727542285');
  var name1 = guild.members.get('309640010892574720');//.setNickname("some nickname");

name1.edit({
 
nick: '𝗣𝗔𝗡𝗢𝗦',
})

name1.edit({
 
nick: '𝙿𝙰𝙽𝙾𝚂',
})
name1.edit({
 
nick: '𝗣𝗔𝗡𝗢𝗦',
})
name1.edit({
 
nick: '𝙿𝙰𝙽𝙾𝚂',
})
name1.edit({
 
nick: '𝗣𝗔𝗡𝗢𝗦',
})



  setTimeout(guild2, 10 * 1e3);
} catch(e) {}}


client.once("ready", () => {
  guild5();
  guild4();
guild3();
guild2();
guild1();
});

client.login(token)





client.on('ready', () => {
 client.user.setPresence({ status: 'dnd', game: { name: `🎀💗 Bot Dev Jia 100% 💗🎀`, type: `WATCHING` } });  
});



