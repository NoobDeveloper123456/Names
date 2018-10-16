const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDg0MzAyODc0OTg2NDE0MDgw.DmgCVQ.Mf_peOPOsclZUcgMc3hhInTqip8';
const yourID = "481322618264223745"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "//test"
const chalk = require('chalk');

let initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;

const roles = ["Girl", "Boy" ];
const reactions = ["💗", "💙"];

const GreenStyle = chalk.green;
const redStyle = chalk.red;
const pinkStyle = chalk.magentaBright;
const weloStyle = chalk.yellow;
const blackStyle = chalk.magenta;



function guild1() {
try {

console.log(GreenStyle(`   --------------------------------------------------`));
 console.log(pinkStyle(`   ==================================================`));

 console.log(blackStyle(`   <>Start Login`));
  console.log(blackStyle(`   ->Start ${getDateTime()}`));

 console.log(weloStyle(`   <>Servers in Bot (${client.guilds.size})`));
  console.log(weloStyle(`   ->Servers names (${client.guilds.map(guild => guild.name).join(',\n ')})`));

 console.log(redStyle(`   <>Users in Bot (${client.users.size})`));

 console.log(pinkStyle(`   ==================================================`));
 console.log(GreenStyle(`   --------------------------------------------------`));

  setTimeout(guild1, 5 * 1e3);
} catch(e) {}}


client.once("ready", () => {
guild1();


  //process.exit();
  //process.on();
});

client.on('ready', () => {
	
 console.log(GreenStyle(`   --------------------------------------------------`));
 console.log(pinkStyle(`   ==================================================`));

 console.log(blackStyle(`   <>Start Login`));
  console.log(blackStyle(`   ->Start ${getDateTime()}`));

 console.log(weloStyle(`   <>Servers in Bot (${client.guilds.size})`));
  console.log(weloStyle(`   ->Servers names (${client.guilds.map(guild => guild.name).join(',\n ')})`));

 console.log(redStyle(`   <>Users in Bot (${client.users.size})`));

 console.log(pinkStyle(`   ==================================================`));
 console.log(GreenStyle(`   --------------------------------------------------`));

 client.user.setPresence({ status: 'dnd', game: { name: `🎀jia🎀`, type: `WATCHING` } });  

});

client.login(token);

function getDateTime() {

  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  var Total_Time = day + "/" + month + "/" + year + " - " + hour + ":" + min + ":" + sec;

  return Total_Time;
  
  }

client.on('messageReactionAdd', (reaction, user) => {



//var role = guild.roles.get(`480865980558475274`);

//var member = guild.members.get(user)

// guild.member.addRole(role);
//user.addRole(role)
//message.member.addRole(role);
});




//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    //for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
var chat = client.channels.get(`479194894079098880`);

    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                	chat.send(memberObj + `Get rank ${roleObj}`)
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                    chat.send(memberObj + `Remove rank ${roleObj}`)
                }
            }
        }
        })
 
    }   
});

client.on('message', message => {
//	if (message.content === 'test') {
//message.react('🤔');
	//}
});













