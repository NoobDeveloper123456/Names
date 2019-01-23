const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTMwODk5Mjk5Mjc4NzgyNDY0.DxGGOQ.h8njOgFrdp_9W0mly-Nm-TaiCDw';

function guild3() {
try {
var guild = client.guilds.get('514042707400720394');
  var role1 = guild.roles.get(`521353853296443403`);
  
  var ch1 = role1

ch1.edit({
 
color: '#ff0000',
})
ch1.edit({
 
color: '#ff4000',
})

ch1.edit({
 
color: '#ffff00',
})
ch1.edit({
 
color: '#bfff00',
})

ch1.edit({
 
color: '#00ffff',
})
ch1.edit({
 
color: '#00bfff',
})

ch1.edit({
 
color: '#0000ff',
})
ch1.edit({
 
color: '#4000ff',
})
)

 

  setTimeout(guild3, 3 * 1e3);
} catch(e) {}}



function guild4() {
try {


  var guild = client.guilds.get('514042707400720394');
  var role1 = guild.roles.get('521829694275059723');
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


  var guild = client.guilds.get('514042707400720394');
  var role1 = guild.roles.get('521829663857704972');
  var ch1 = role1


ch1.edit({
  name: 'Black',
color: '#cc0066',
}) 
ch1.edit({
  name: 'Pink',
color: '#cc0066',
})
ch1.edit({
  name: 'BlackPink',
color: '#cc0066',
}) 
ch1.edit({
  name: 'In your area',
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



