const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTIxODI2ODI5MDkxNDcxMzYw.DvCExw.YMQHUcFxbgw0t6UzNJ-E_tJJ7DI';

function guild3() {
try {
var guild = client.guilds.get('514042707400720394');
  var role1 = guild.roles.get('521353853296443403');
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

  setTimeout(guild3, 3 * 1e3);
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




client.once("ready", () => {
  guild5();
  guild4();
guild3();

});

client.login(token)





client.on('ready', () => {
 client.user.setPresence({ status: 'dnd', game: { name: `🎀💗 Bot Dev Jia 100% 💗🎀`, type: `WATCHING` } });  
});



