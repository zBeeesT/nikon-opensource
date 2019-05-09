const Discord = require('discord.js'); 
const Util = require('discord.js');
const fs = require('fs');
const moment = require('moment'); 
const coins = require("./coins.json")
const devs = ["348143440405725184", "523836549390139392", "569841293837074432", "476503634411257858"]; //The Masters :)
const emojis = '566320808121729088';
var database = {};
const client = new Discord.Client({disableEveryone: true});
const prefix = "?"

//The Bot Is Online ?
client.on('ready',  () => {

    console.log('~ Bot On !  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });
  


//muteChannel & unmuteChannel
client.on('message', message => {
var prefix = "?";
       if(message.content === prefix + "mc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "unmc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});


//CreateTextRoom
client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
message.channel.send('**Done**') 
                message.guild.createChannel(`${argrst}`, 'text')
      }
});


//CreateVoiceRoom
client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
message.channel.send('**Done**')
                message.guild.createChannel(`${argrst}`,'voice')
         
        }
});


//JoinedServer
client.on("guildCreate", async guild => {
  let guildCreateChannel = client.channels.get("ID"); 
  
  
    
    let joinEmbed = new Discord.RichEmbed()
      .setThumbnail(guild.iconURL) // هنا هيديك صورة السيرفر
      .setAuthor(`NikonBot. Joined A Server ✅`)
      .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
      
    guildCreateChannel.send(joinEmbed);

}); 


//LeaveServer
client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("ID"); 
  
  let leaveEmbed = new Discord.RichEmbed()
    .setThumbnail(guild.iconURL)
  .setAuthor(`NikonBot. left A Server ❎`)
  .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
  guildCreateDelete.send(leaveEmbed); 
});

//Help
client.on('message', msg => {
	if(msg.content === "?help")
	var embed = new Discord.RichEmbed()
	.setDescription(`**• __General Commands__ :
\`\`?fm\`\` , \`\`?ping\`\` , \`\`?top-servers\`\` , \`\`?stats\`\` , \`\`?support\`\` , \`\`?invite\`\` , \`\`?avatar\`\` , \`\`?npm\`\` , \`\`?google\`\` , \`\`?id\`\` , \`\`?register\`\` , \`\`?skin\`\` و \`\`?servers\`\`
• __Staff Commands__ :
\`\`?kick\`\` , \`\`?ban\`\` , \`\`?mute\`\` , \`\`?unmute\`\` , \`\`?server\`\` , \`\`?setIcon\`\` , \`\`?setName\`\` , \`\`?ct\`\` , \`\`?cv\`\` , \`\`?mc\`\` , \`\`?unmc\`\`
• __Personal Commands__ :
\`\`?coins\`\` , \`\`?claim\`\` , \`\`?pay\`\`
• __Safety Commands__ :
\`\`?antijoin\`\`
• __Tickets Commands__ :
\`\`?setcategory\`\` , \`\`?setrole\`\` , \`\`?new\`\` , \`\`?close\`\` , \`\`?add\`\` , \`\`?remove\`\` , \`\`?rename\`\` , \`\`?forceclose\`\`
**`)
.setFooter('New Commands Soon') 
msg.channel.send(embed)
})

//Support
client.on('message', message => {
  let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "partner");
  
	if(message.content === "?support")
    message.channel.send(`${em1} | **Server Support** : \nhttps://discord.gg/P96Cjzh `)
});
    
//invite    
client.on('message', message => {
  let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "partner");
   

	if(message.content === "?invite")
    message.channel.send(`${em1} | **Bot Invite** : \nhttps://discordapp.com/api/oauth2/authorize?client_id=574939069084205066&permissions=8&scope=bot`)
});

client.on('message', message => {
  let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "partner");
   

	if(message.content === "?inv")
    message.channel.send(`${em1} | **Bot Invite** : \nhttps://discordapp.com/api/oauth2/authorize?client_id=574939069084205066&permissions=8&scope=bot`)
});



  
client.login("Token");
