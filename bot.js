const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const dateFormat = require('dateformat');
const convert = require("hh-mm-ss")
const fs = require('fs');
const adminprefix = "+";
const devs = ['402043862480322562', '443696811421466624'];
const moment = require('moment');
const ytdl = require('ytdl-core');
const yt = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
var Canvas = require('canvas')
var jimp = require('jimp')
const config = require("./config.json")
const pretty = require('pretty-ms');
const prefix = "+";
var guilds = {};


client.on('ready',  () => {
    console.log('تم تشغيل :dragon  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });
client.on('ready', async () => {
    console.log('I am ready!');

    client.user.setPresence({ game: { name: '+help | +invite', type: 2 } });
});


client.on('message', message => {
    if (message.content === "+bot") {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor("[ Dragon Bot ]", " https://images-ext-2.discordapp.net/external/ahNXTY5REo9rE5-6oa5XGyzSrJis3qbk7eBUv1sEiYI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/459725014237970492/558a210e07b9ae2504e427a4c7c6d297.png?width=455&height=455")
    .addField("**[ Dragon Prefix] :**","**[ + ]**" , true)
    .addField("** [ Dragon ID ] **", "**"+"459725014237970492"+"**",true)
    .addField("** [ Dragon ] **","** دراجون**")
    .addField("**[ Bot Developer ]**","<@!402043862480322562> [! HP , ء Móha,$ 55₅ , .#5555]")
    .addField("**[ Servers ]**" , "**"+`${client.guilds.size}`+" Server**",true)
    .addField("**[ Users ] **",`** ${client.users.size} User**`)
    .setThumbnail(" https://images-ext-2.discordapp.net/external/ahNXTY5REo9rE5-6oa5XGyzSrJis3qbk7eBUv1sEiYI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/459725014237970492/558a210e07b9ae2504e427a4c7c6d297.png?width=455&height=455")
    .setColor("ffffff")
    .setFooter(`+help to see all Dragon commands `, ' https://images-ext-2.discordapp.net/external/ahNXTY5REo9rE5-6oa5XGyzSrJis3qbk7eBUv1sEiYI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/459725014237970492/558a210e07b9ae2504e427a4c7c6d297.png?width=455&height=455')
    message.channel.sendEmbed(embed)
    }
    });

client.on("guildDelete", guild => {
    console.log(` Dragon Left From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
   
var g= guild.members.size
var i= guild.iconURL

const embed = new Discord.RichEmbed()
  
                   .setColor("RANDOM")
                .setFooter(` ©  Dragon™ `)
                .setTitle(" Dragon Left Server !")
                .addField("**Guild Name:**", guild.name )
                 .addField("**Owner:**", guild.owner.user.username )
                 .addField("**Owner id:**", guild.owner.user.id )
                 .addField("**MEMBER COUNT:**", g )
                  .setThumbnail (i)
client.channels.get("427613133826162698").send({ embed: embed });
});


client.on("guildCreate", guild => {
console.log(` Dragon Added From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)

var g= guild.members.size
var i= guild.iconURL

const embed = new Discord.RichEmbed()
  
                   .setColor("RANDOM")
                .setFooter(` ©  Dragon™ `)
                .setTitle(" Dragon Added To Server !")
                .addField("**Guild Name:**", guild.name )
                 .addField("**Owner:**", guild.owner.user.username )
                 .addField("**MEMBER COUNT:**", g )
                  .setThumbnail (i)
client.channels.get("427613133826162698").send({ embed: embed });

});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+moha')){
if (message.author.id !== '402043862480322562') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




client.on('message', message => {
  
    if(message.content.split(' ')[0] == '+sug'){
        if (message.author.bot) return;
      
                            let args = message.content.split(' ').slice(1).join(' ');
                                 if (!args) return message.reply("You Have To Write A Msg !");
    
      let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('**__:mailbox_with_mail: Suggestion Sent !__**')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .addField("**-Sent By :**", message.author.username)
                                                        .addField("**-Sender ID :**", message.author.id)
                                                    .addField("**-Suggest :**", args)
                                                    .setColor("FF0000")
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                   
                                                    
     client.channels.get("468102376495251466").send({ embed: embed });
      let embe = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('**__:mailbox_with_mail: Suggestion Sent Successfully !__**')
                                                    .setThumbnail(message.author.avatarURL)
                                                                                                    .setColor("FF0000")
    
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                    message.channel.sendEmbed({ embed: embed });
               
                                      
    }
    });
    

client.on('message' , message => {

    if (message.author.bot) return;
      if(message.content.startsWith( "+invite")) {
   
  const embed = new Discord.RichEmbed()
    .setFooter(`©  Dragon™ `)
       .setColor(0xd3d0c4)
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle(':arrow_right: Click Here Invite Link اضغط هنا')
  .setURL('https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583')
  
  message.channel.sendEmbed(embed);
  
  }
  });

client.on("message", message => {
  if (message.content === "+help") {
         message.react("✅")
            message.react("📬")
   const embed = new Discord.RichEmbed() 
       .setColor("#ffff00")
       .setDescription(`
 
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
══════════ஜ۩۞۩ஜ════════════ 
       اوامر البوت

اوامر العامة
  └─ **+help-public**
  
اوامر ادارية
  └─ **+help-admin**
 
العاب
  └─**+help-games**

أوامر الأغاني
  └─**+help-music**

  أوامر القرأن الكريم
  └─**+help-quran**

 ══════════ஜ۩۞۩ஜ════════════

 **:link: | الموقع الخاص بالبوت :** http://darknessxd.tk/WebSite/index.html
 🔗 **| دعوة البوت** : https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583
 :exclamation:  **| لدعوة البوت ** : +invite
 :exclamation:  **| لأرسال اقتراح لصاحب البوت** : +sug
  `)
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
     
     
    message.author.sendEmbed(embed)
     
    }
    }); 
//╭━━━╮╱╱╭╮╱╭╮
//┃╭━╮┃╱╱┃┃╱┃┃
//┃╰━╯┣╮╭┫╰━┫┃╭┳━━╮
//┃╭━━┫┃┃┃╭╮┃┃┣┫╭━╯
//┃┃╱╱┃╰╯┃╰╯┃╰┫┃╰━╮
//╰╯╱╱╰━━┻━━┻━┻┻━━╯

 
client.on('message', message => {
    
  if (message.content.startsWith ("+id")) {

if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

       let defineduser = '';
       if (!args[1]) { // If they didn't define anyone, set it to their own.
           defineduser = message.author;
       } else { // Run this if they did define someone...
           let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned;
       }

       const w = ['./img/id6.png','./img/id2.png','./img/id3.png','./img/id41.png','./img/id5.png'];
       var Canvas = require('canvas')
var jimp = require('jimp')

        const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
         dateFormat(now, 'dddd, mmmm dS, yyyy');
             let time = `${dateFormat(defineduser.createdAt)}`
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
            var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
       let Image = Canvas.Image,
           canvas = new Canvas(300, 300),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
 
       fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 300, 300);

})
  var mentionned = message.mentions.users.first();

   var client;
     if(mentionned){
         var client = mentionned;
     } else {
         var client = message.author;
         
     }

var men = message.mentions.users.first();
           var heg;
           if(men) {
               heg = men
           } else {
               heg = message.author
           }
               let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);

                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 112 , 40, 75, 75);
                       
                       
                       
                       
                       var status;
   if (defineduser.presence.status === 'online') {
       status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
 
   } else if (defineduser.presence.status === 'dnd') {
       status = 'DND';
       ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'idle') {
       status = 'IDLE';
       ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'offline') {
       status = 'INVISIABLE';
       ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   }
                       
                       
                                             var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }  
                          
   
                       ctx.font = 'Bold 15px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(status, 70 , 108 );
                       
                        ctx.font = 'Bold 13px Arial';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                      
                       ctx.font = 'Bold 20px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                       ctx.font = 'Bold 15px Arial';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                       var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }
          
                                               //wl
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                       
                       
    
          
                                               //wl
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
                       
message.channel.sendFile(canvas.toBuffer())

           // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
           // seconds after this.
       })
   })




}

})



client.on('message',message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/GnR2unD.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message', message => {
  var prefix = '+';
  if(message.content.startsWith(prefix + 'roleperms')) {
            var msg = message.content.toLowerCase();
              var role2 = msg.split(' ').slice(1).join(" ").toLowerCase(); 
          var role1 = message.guild.roles.filter(r=>r.name.toLowerCase().indexOf(role2)>-1 ).first(); 
               if(role1.hasPermissions('ADMINISTRATOR')) {
                   var permadmin = ":white_check_mark:"
               } else {
                   var permadmin=":x:"
               }
                                if(role1.hasPermissions('VIEW_AUDIT_LOG')) {
                   var permlog = ":white_check_mark:"
               } else {
                   var permlog=":x:"
               }
                                if(role1.hasPermissions('MANAGE_GUILD')) {
                   var permserver = ":white_check_mark:"
               } else {
                   var permserver=":x:"
               }
                                if(role1.hasPermissions('MANAGE_ROLES')) {
                   var permroles = ":white_check_mark:"
               } else {
                   var permroles=":x:"
               }
                                if(role1.hasPermissions('MANAGE_CHANNELS')) {
                   var permchannel = ":white_check_mark:"
               } else {
                   var permchannel=":x:"
               }
                                if(role1.hasPermissions('KICK_MEMBERS')) {
                   var permkick = ":white_check_mark:"
               } else {
                   var permkick=":x:"
               }
                                if(role1.hasPermissions('BAN_MEMBERS')) {
                   var permban = ":white_check_mark:"
               } else {
                   var permban=":x:"
               }
                                if(role1.hasPermissions('CREATE_INSTANT_INVITE')) {
                   var perminvites = ":white_check_mark:"
               } else {
                   var perminvites=":x:"
               }
                                if(role1.hasPermissions('CHANGE_NICKNAME')) {
                   var permnick = ":white_check_mark:"
               } else {
                   var permnick=":x:"
               }
                                if(role1.hasPermissions('MANAGE_NICKNAMES')) {
                   var permmanagenick = ":white_check_mark:"
               } else {
                   var permmanagenick=":x:"
               }
                                                 if(role1.hasPermissions('MANAGE_EMOJIS')) {
                   var permemojis = ":white_check_mark:"
               } else {
                   var permemojis=":x:"
               }
                                                 if(role1.hasPermissions('MANAGE_WEBHOOKS')) {
                   var permhook = ":white_check_mark:"
               } else {
                   var permhook=":x:"
               }
                                                 if(role1.hasPermissions('SEND_MESSAGES')) {
                   var permmessage = ":white_check_mark:"
               } else {
                   var permmessage=":x:"
               }
                                                 if(role1.hasPermissions('SEND_TTS_MESSAGES')) {
                   var permtts = ":white_check_mark:"
               } else {
                   var permtts=":x:"
               }
                                                 if(role1.hasPermissions('MANAGE_MESSAGES')) {
                   var permmanagemessages = ":white_check_mark:"
               } else {
                   var permmanagemessages=":x:"
               }
                                                 if(role1.hasPermissions('EMBED_LINKS')) {
                   var permembed = ":white_check_mark:"
               } else {
                   var permembed=":x:"
               }
                                                 if(role1.hasPermissions('ATTACH_FILES')) {
                   var permattach = ":white_check_mark:"
               } else {
                   var permattach=":x:"
               }
                                                 if(role1.hasPermissions('MENTION_EVERYONE')) {
                   var permmention = ":white_check_mark:"
               } else {
                   var permmention=":x:"
               }
                                                                  if(role1.hasPermissions('USE_EXTERNAL_EMOJIS')) {
                   var permuseemojis = ":white_check_mark:"
               } else {
                   var permuseemojis=":x:"
               }
                                                                  if(role1.hasPermissions('ADD_REACTIONS')) {
                   var permreact = ":white_check_mark:"
               } else {
                   var permreact=":x:"
               }
                                                                  if(role1.hasPermissions('CONNECT')) {
                   var permconnect = ":white_check_mark:"
               } else {
                   var permconnect=":x:"
               }
                                                                  if(role1.hasPermissions('SPEAK')) {
                   var permspeak = ":white_check_mark:"
               } else {
                   var permspeak=":x:"
               }
                                                                                if(role1.hasPermissions('MUTE_MEMBERS')) {
                   var permmute = ":white_check_mark:"
               } else {
                   var permmute=":x:"
               }
                                                                                if(role1.hasPermissions('DEAFEN_MEMBERS')) {
                   var permdeafen = ":white_check_mark:"
               } else {
                   var permdeafen=":x:"
               }
                                                                                if(role1.hasPermissions('MOVE_MEMBERS')) {
                   var permmove = ":white_check_mark:"
               } else {
                   var permmove=":x:"
               }
                               let nat = new Discord.RichEmbed()
               .addField('ADMINISTRATOR',permadmin, true)
               .addField('VIEW_AUDIT_LOG',permlog, true)
               .addField('MANAGE_SERVER',permserver, true)
               .addField('MANAGE_ROLES',permroles, true)
               .addField('MANAGE_CHANNELS',permchannel, true)
               .addField('KICK_MEMBERS',permkick, true)
               .addField('BAN_MEMBERS',permban, true)
               .addField('CREATE_INSTANT_INVITE',perminvites, true)
               .addField('CHANGE_NICKNAME',permnick, true)
               .addField('MANAGE_NICKNAMES',permmanagenick, true)
               .addField('MANAGE_EMOJIS',permemojis, true)
               .addField('MANAGE_WEBHOOKS',permhook, true)
               .addField('SEND_MESSAGES',permmessage, true)
               .addField('SEND_TTS_MESSAGES',permtts, true)
               .addField('MANAGE_MESSAGES',permmanagemessages, true)
               .addField('EMBED_LINKS',permembed, true)
               .addField('ATTACH_FILES',permattach, true)
               .addField('MENTION_EVERYONE',permmention, true)
               .addField('USE_EXTERNAL_EMOJIS',permuseemojis, true)
               .addField('ADD_REACTIONS',permreact, true)
               .addField('CONNECT',permconnect, true)
               .addField('SPEAK',permspeak, true)
               .addField('MUTE_MEMBERS',permmute, true)
               .addField('DEAFEN_MEMBERS',permdeafen, true)
               .addField('MOVE_MEMBERS',permmove, true)
               message.channel.send(nat)
  }
});


   
  client.on("message", async message => {
    if(!message.channel.guild) return;
    var prefix = "+";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});


client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "+";
if(message.content.startsWith(prefix + 'channel')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("Channel Info")
      .setColor("#9932CC")
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("Created At", `${channel.createdAt}`)
      .addField("Channel Type", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });
 

    client.on("message", async message => {
        if(!message.channel.guild) return;
    var prefix = "+";
    if(message.content.startsWith(prefix + 'member')) {
        let guild = await message.guild.fetchMembers()
        let bots = guild.members.filter(m => m.user.bot).size
        let members = guild.memberCount
        let humans = members - bots
        let dndusers = guild.members.filter(member => member.user.presence.status === "dnd")
        let awayusers = guild.members.filter(member => member.user.presence.status === "idle")
        let onlineusers = guild.members.filter(member => member.user.presence.status === "online")
        let offlineusers = guild.members.filter(member => member.user.presence.status === "offline")
        var embed = new Discord.RichEmbed()
              .setColor("#000000")
              .setTitle("Membercount")
              .setDescription("Membercount in " + guild.name)
              .addField("Members", `${members}`, true)
              .addField("Humans", `${humans}`, true)
              .addField("Bots", `${bots}`, true)
              .addField("Status Users", `Online Users: ${onlineusers.size}\nDND Users: ${dndusers.size}\nAway Users: ${awayusers.size}\nOffline Users: ${offlineusers.size}\nTotal Members: ${message.guild.memberCount}`, true)
              .setThumbnail(message.author.avatarURL)
              message.channel.send({ embed: embed });
     
      }
     
        });


        client.on('message', message => {
            var prefix = "+"
      if(message.content.startsWith (prefix  + 'mb')) {
          if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**:battery: حالة اعضاء السيرفر**
         
    **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
    **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
    **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
    **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
     
            message.channel.send()
     
    message.channel.sendEmbed(embed)
    }
    });
    
    client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "+";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

    client.on('message', message => {
        var prefix = "+"
        if(message.content === prefix + "emojis") {
          const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
          message.channel.send(emojiList);
        }
      });


      client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith('+report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
      }
      });

client.on('message', message => {
  if (message.content.startsWith("رابط")) {
    if(!message.guild.member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.reply("**I Don't Have `CREATE_INSTANT_INVITE` Permission**").then(msg => msg.delete(6000))

      message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400,
  }).then(invite =>
    message.author.sendMessage(invite.url)
  )
    message.channel.send("**:link: Invite Linke Sent In DM Successfully**")
  }
}); 

    client.on('message', message => {
        if (message.content.startsWith("+avatar")) {
            var mentionned = message.mentions.users.first();
        var x5bzm;
          if(mentionned){
              var x5bzm = mentionned;
          } else {
              var x5bzm = message.author;
               
          }
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${x5bzm.avatarURL}`)
          message.channel.sendEmbed(embed);
        }
    });

    client.on('message', message => {
        if(!message.channel.guild) return;
    if (message.content.startsWith('+ping')) {
    if(!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`
    var api = `${Math.round(client.ping)}`
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail('https://media.discordapp.net/attachments/417477494950854656/438706305125974017/maxresdefaul1t.jpg?width=339&height=353')
    .setColor('RANDOM')
    .addField('**Time Taken:**',msg + " ms")
    .addField('**WebSocket:**',api + " ms")
    message.channel.send({embed:embed});
    }
    });


 
    client.on('message', message => {
    var prefix = "+";

      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command === "say") {
              message.delete()
        message.channel.sendMessage(args.join(" ")).catch(console.error);
      }
       
      
     
    if (command == "embed") {
        let say = new Discord.RichEmbed()
        .setDescription(args.join("  "))
        .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
      }
     
     
    });
     
    client.on("message", message => {
        const prefix = "+"
                   
              if(!message.channel.guild) return;
       if(message.author.bot) return;
          if(message.content === prefix + "image"){ 
              const embed = new Discord.RichEmbed()
       
          .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
      .setAuthor(message.author.username, message.guild.iconrURL)
        .setColor(0x164fe3)
        .setImage(message.guild.iconURL)
        .setURL(message.guild.iconrURL)
                        .setTimestamp()
     
       message.channel.send({embed});
          }
      });
      
client.on('message', message =>{
    if(message.content == "+roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});


client.on('message', message => {
    if (message.content === "+rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
         
.addField(':arrow_down:اسماء الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
 

const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "+";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
            .setFooter(`+help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
             message.channel.sendEmbed(Date15);
    }
});


  client.on('message', message => {
    var prefix = "+";
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "user")) {
      message.guild.fetchInvites().then(invs => {
        let member = client.guilds.get(message.guild.id).members.get(message.author.id);
        let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            var embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(message.author.avatarURL)
    .addField("اسمك في السيرفر ", `${message.author.tag} (ID: ${message.author.id})`, true)
    .addField("حالتك :", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
    .addField("يلعب؟ : ", `${message.author.presence.game === null ? "None" :  message.author.presence.game.name}`, true)
    .addField("اسمك في دسكورد ", `${message.member.displayName}`, true)
    .addField("الرتب الذي تمتلكها ", `${message.member.roles.map(r => r.name).join(", ")}`)
    .addField("أعلى رتبه تمتلكها: ", message.member.highestRole.name)
    .addField("دخولك للدسكورد :", `${message.member.joinedAt.toDateString()}`)
    .addField("دخولك للسيرفر : ", `${message.author.createdAt.toDateString()}`)
    .addField(': عدد الدعوات',                         inviteCount,false)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
  if (message.mentions.users.size < 1) return message.channel.send({ embed: embed });
    
  var embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(member.user.avatarURL)
    .addField("اسمه في دسكورد:", `${member.user.tag} (ID: ${member.id})`, true)
    .addField("حالته :", member.presence !== null && member.presence.status !== null ? member.presence.status : "Offline")
    .addField("يلعب :", `${member.user.presence.game === null ? "Nothing" :  member.user.presence.game.name}`, true)
    .addField("اسمه في السيرفر:", `${member.nickname === null ? "None" : member.nickname}`, true)
    .addField("الرتب :", `${member.roles.map(r => r.name).join(", ")}`)
    .addField("اعلى رتبه يمتلكها : :", member.highestRole.name)
    .addField("دخوله لدسكورد :", `${member.joinedAt.toDateString()}`)
    .addField("دخوله للسيرفر", `${member.user.createdAt.toDateString()}`)
    .setTimestamp()
    .setFooter(member.user.username, member.user.avatarURL);
    message.channel.send({ embed: embed });
      })
    }
          
  });

  client.on("message", message => {
    var prefix = "+";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "report-owner")) {
  let reportMember = message.guild.member(message.mentions.members.first());
  let reportReason = args.slice(1).join(" ");
   
  if (message.mentions.users.size === 0) {
    message.channel.send("**منشن الشخص المراد الابلاغ عليه** :x:")
    return;
  } else {
    if(!reportMember) {
        message.channel.send("**هذه الشخص غير موجود في السيرفر** :x:")
        return; }}
    
  if (reportMember.id == message.author.id) {
    message.channel.send("**لا يمكنك الابلاغ عن نفسك** :facepalm:")
    return; }
   
  if (args[1] === undefined) {
    message.channel.send("**ضع سبب الابلاغ** :x:")
    return; }
   
  message.guild.owner.send({embed:{
    fields: [{
        name: "ابلاغ جديد من سيرفر : " + message.guild.name + "!",
        value: "تفاصيل:\n\n**صاحب الأبلاغ:** " + message.author.username + "\n**قام بالأبلاغ عن ::** " + reportMember.user.username + "\n**السبب:** " + reportReason + "\n**الروم المرسل منه الأبلاغ:** " + message.channel
      }
    ],
    thumbnail: {
        url: reportMember.user.displayAvatarURL
    },
    timestamp: new Date(),
    color: 0xFF0000
  }}).catch(err => {
    message.author.send("A error occured sending your report to the server owner! Error: " + err)
    return;
  })
  message.channel.send("تم ارسال الأبلاغ بنجاح\n\nمعلومات عن الأبلاغ:\n  **قمت بالابلاغ عن :** " + reportMember.user.username + "\n  **السبب:** " + reportReason + "\n  **الروم الذي قمت بأرسال الابلاغ منه:** " + message.channel)
   
  }
  });


  client.on('message', message => {
  var prefix = "+";

           if (message.content === prefix + "dt") {
           if (!message.channel.guild) return message.reply('** This command only for servers **');  
           var currentTime = new Date(),
              hours = currentTime.getHours() + 4 ,
              hours2 = currentTime.getHours() + 3 ,
              hours3 = currentTime.getHours() + 2 ,
              hours4 = currentTime.getHours() + 3 ,
              minutes = currentTime.getMinutes(),
              seconds = currentTime.getSeconds(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
               var h = hours
    if(hours > 12) {
                 hours -= 12;
              } else if(hours == 0) {
                  hours = "12";
              }  
               if(hours2 > 12) {
                 hours2 -= 12;
              } else if(hours2 == 0) {
                  hours2 = "12";
               
              }  
  if(hours3 > 12) {
                 hours3 -= 12;
              } else if(hours3 == 0) {
                  hours3 = "12";
              } 
              if (minutes < 10) {
                  minutes = '0' + minutes;
              }
   
   
              var suffix = 'صباحاَ';
              if (hours >= 12) {
                  suffix = 'مساء';
                  hours = hours - 12;
              }
              if (hours == 0) {
                  hours = 12;
              }
    
   
                  var Date15= new Discord.RichEmbed()
                  .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                  .setTitle( "「التاريخ  والوقت」")
                  .setColor('RANDOM')
                  .setFooter(message.author.username, message.author.avatarURL)
                  .addField('الامارات',
                  "「"+ hours + ":" + minutes +":"+ seconds + "」")
                   .addField('مكه المكرمه',
                  "「"+ hours2 + ":" + minutes +":"+ seconds  + "」") 
                  .addField('مصر',
                  "「"+ hours3 + ":" + minutes +":"+ seconds  + "」") 
                   
                  .addField('Date',
                  "「"+ Day + "-" + Month + "-" + Year +  "」")
   
                   message.channel.sendEmbed(Date15);
          }
      });
   

       
      
      client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!devs.includes(message.author.id)) return;
          
      if (message.content.startsWith(adminprefix + 'ply')) {
        client.user.setGame(argresult);
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      } else 
        if (message.content === (adminprefix + "Percie")) {
        message.guild.leave();        
      } else  
      if (message.content.startsWith(adminprefix + 'wt')) {
      client.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      } else 
      if (message.content.startsWith(adminprefix + 'ls')) {
      client.user.setActivity(argresult , {type:'LISTENING'});
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      } else     
        if (message.content.startsWith(adminprefix + 'setname')) {
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : Done :>`)
      return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
      } else
        if (message.content.startsWith(adminprefix + 'setavatar')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
            } else     
      if (message.content.startsWith(adminprefix + 'st')) {
        client.user.setGame(argresult, "https://www.twitch.tv/idk");
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      }
        if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
            console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(`⚠️ Bot restarting... ⚠️`);
            console.log("===============================================\n\n");
            client.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`Bot Successfully Restarted`);
        }
      
      });

client.on('message', message => {
  var prefix = "+"

    if(message.content.startsWith(prefix + "inforole")) {
     var args = message.content.split(" ").slice(1);
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var kakrole = args.slice(1).join(' ');
  if(!kakrole) return message.reply('please, specify a role to get info...');

  var role = message.guild.roles.find("name", kakrole);
  if(!role) return message.reply("i didn't find no role with that name! Try again later :thumbsdown:");

  var roleCreated = role.createdAt.toString().split(' ');
  const embed = new Discord.RichEmbed()
  .setTitle("Dragon")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter('', '')
  .setImage()
  .setThumbnail('https://png.icons8.com/metro/540/edit-user-male.png')
  .setTimestamp()
  .setURL('')
  .addField(`Role name`, `${role.name}`, true)
  .addField(`Role Id`, `${role.id}`, true)
  .addField(`Role Position`, `${role.position}`, true)
  .addField(`Members`, `${role.members.size} with this role`, true)
  .addField(`Mentionable`, `${role.mentionable}`, true)
  .addField(`Role Color`, `${role.hexColor}`, true)
  .addField(`Created At`, `${roleCreated[1]} ${roleCreated[2]} ${roleCreated[3]}`)

  message.channel.send({embed});
}
});


client.on('message' , async message => {
  if(message.author.bot) return;
  var prefix = "+";     
  if (message.content.startsWith(prefix + "voice")) {
  var guild = message.guild
if(message.channel.type == 'dm') return;
const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setAuthor("Voice Online", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setFooter(` العدد : ${guild.members.filter(member => member.voiceChannel).size}`)
    .setDescription(`\n${guild.members.filter(member => member.voiceChannel).map(m => m.user.tag).join('\n')}`);
  message.channel.sendEmbed(embed);
}// لو تبي تغير الوقت اللي تنرسل فيه الرساله غير رقم 30 الى عدد الدقائق اللي تبيهه ..
});

client.on('message', message => {
  if(message.content == '+menbans'){
      message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
             message.channel.send('\`#\` <@'+ user.id + '>');
          });
      });
  }
});
  client.on('message', message => {
    var prefix = "+";     

    if(message.content.startsWith(prefix +"bans")) {
       message.guild.fetchBans()
       .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
 .catch(console.error);
}
});


client.on('message', async message => {
  var prefix = "+";     
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "info-invite")) {
    if(!args) return message.reply('**آرسل كود الدعوة مثال : ``SQe7wJa``**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('صاحب الدعوة',inv.inviter,true)
      .addField('روم الدعوة',inv.channel,true)
      .addField('تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('الاستخدامات',inv.uses || inv.maxUses,true)
      .setFooter('Requested by '+message.author.username, message.author.avatarURL)
      message.channel.sendEmbed(embed);
    });
  }
});

    client.on("message", message => {
if (message.content === "+help-public") {
message.react("✅")
message.react("😵")
 const embed = new Discord.RichEmbed() 
     .setColor("#fff")
     .setDescription(`
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
     
 ══════════ஜ۩۞۩ஜ════════════
 **       اوامر عامة    
+bot
  └─ يعرض لك معلومات عن البوت
+server
  └─ يعرض لك معلومات السيرفر
+user 
  └─ أمر الايدي
+id
  └─ أمر الايدي بشكل مميز
+menbans
  └─ يمنشن الي متبندين بالسيرفر
+bans
  └─ يعرض لك عدد المتبندين
+voice
  └─ يعرض لك عدد اعضاء الي برومات الصوتية مع اسمائهم
+roleperms
  └─ لمعرفة خصائص رتبتك او خصائص رتبة معينه عن طريق اسم الرتبة
+mb
  └─ لمعرفة حالة الاعضاء 
+member
  └─ عدد وحالة اعضاء السيرفر 
+report
  └─ للابلاغ عن شخص
      └─ملاحظة: يجب انشاء روم بأسم report لتلقي الابلاغات
+report-owner
  └─ لأرسال ابلاغ لصاحب السيرفر 
+date
  └─ لمعرفه التاريخ
+dt
  └─ لمعرفة التاريخ والوقت لدولة مصر والسعودية والامارات  
+ping
  └─ لمعرفه سرعه البوت
+emojis
  └─ يعرض لك ايموجيات حقت السيرفر
+rooms
  └─ لعرض عدد واسماء الرومات
+roles
  └─ لعرض اسماءالرتب
+channel
  └─ يعرض لك معلومات عن الروم
+inforole
  └─ يعرض لك معلومات عن رتبة
+embed
  └─ خاصيه غرد لكن بغير طريقه
+say
  └─ لي يكرر الكلام الذي تقوله
رابط
  └─ لارسال رابط السيرفر على الخاص
+invites
  └─ يعرض لك كم جبت اعضاء لهذة السيرفر
+info-invite
  └─ يعرض لك معلومات عن رابط دعوة
+invite-codes
  └─ يرسل لك على الخاص جميع الروابط التي قمت بأنشائها لهذة السيرفر
+top
  └─ يعرض لك جميع روابط دعوات التي تم انشائها مع عدد الاشخاص الي دخلو من الرابط
+avatar
  └─ لي عرض صورتك او صوره اي شخص
+image
  └─ لي عرض صوره السيرفر**

══════════ஜ۩۞۩ஜ════════════

**:link: | الموقع الخاص بالبوت :** http://darknessxd.tk/WebSite/index.html
🔗 **| دعوة البوت** : https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583
:exclamation:  **| لدعوة البوت ** : +invite
:exclamation:  **| لأرسال اقتراح لصاحب البوت** : +sug
 `)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
 
  
   
   
message.author.send({ embed: embed });
   
}
}); 
                        
//╭━━━╮╱╭╮
//┃╭━╮┃╱┃┃
//┃┃╱┃┣━╯┣╮╭┳┳━╮
//┃╰━╯┃╭╮┃╰╯┣┫╭╮╮
//┃╭━╮┃╰╯┃┃┃┃┃┃┃┃
//╰╯╱╰┻━━┻┻┻┻┻╯╰╯


client.on('message' , message => {
    var prefix = "+";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
       .setFooter('Requested by '+message.author.username, message.author.avatarURL)
        message.channel.sendEmbed(embed)
    }
  });
  

  
  

client.on('message', message => {
  var prefix = "+";
  const guild = message.guild;

  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} Banned From The Server By : <@${message.author.id}> ! :airplane: **  `)
  
guild.owner.send(`سيرفر : ${guild.name}
**تم تبنيد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`)

}
});

client.on('message', message => {
  var prefix = "+";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers :x:**');
   const guild = message.guild;
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
  if (!message.guild.member(user).kickable) return message.reply("**Can't Kick A Higher Role Than Me !**");
  message.channel.send(`**:white_check_mark: ${user.tag} Kicked Form The Server By : <@${message.author.id}> ! :airplane:** `)
  guild.owner.send(`سيرفر : ${guild.name}
**تم طرد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}
});
  
  
     client.on("message", async message => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(/(?:https?:\/)?discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
        message.delete();
        let inviteEmbed = new Discord.RichEmbed()
  
        .setDescription("__**Auto Suppression**__")
        .addField("> Envoyé par :", `<@${message.author.id}> avec l'ID ${message.author.id}`)
        .addField("> Suppression dans :", message.channel)
        .addField(`> Raison :`, `Envoie une invitation discord : ${message.content}`)
        .setColor(violet);
  
        let incidentchannel = message.guild.channels.find(`name`, "log");
        if(!incidentchannel) return message.channel.send(":no_entry: Je n'est pas trouvé le channel 'logs' !");
        return incidentchannel.send(inviteEmbed);
    }
  }
  });
  

  
 
  client.on('message', message =>{
    var prefix = "+";
      if(message.author.bot) return;
      if(!message.content == (prefix+'clear'))
  if(!true) return;
      if(message.content.split(' ')[0] == (prefix+'clear')){
      var lmt = message.content.split(' ')[1]
      ,  hang = 0
      ,  max  = 0;
      
      if(!lmt) lmt = 200;
      if(typeof lmt !== 'number') return;
      if(lmt > 100){
          for(;lmt > 100;){
          lmt--;
          hang++;
          }
          }
       message.channel.fetchMessages({limite:lmt}).then(msgs=>{
       msgs.channel.bulkDelete(msgs);
       });
       if(hang > 100){
           hang = 100;
       }
          message.channel.fetchMessages({limite:hang}).then(msgs=>{
          message.channel.bulkDelete(msgs);
       });
       
      max= hang+lmt;
      message.reply(` **Done, i have delete ${max} messages!**.`).catch(()=>{
          message.reply(` **Sorry, i can only bulk delete messages that are under 14 days old**.`)
      });
      }
  }); 
  
  
client.on('message', async message =>{
    var prefix = "+";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return;
  var command = message.content.split(" ")[0];
    let mention = message.mentions.members.first();
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
      if(command == "mute") {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
      if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(m => m.delete(5000));
   
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(m => m.delete(5000));
      if(tomute.hasPermission("MANAGE_MESSAGES"))return;
      let muterole = message.guild.roles.find(`name`, "Muted");
      //start of create role
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      //end of create role
      let mutetime = args[1];
      if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
    
      await(tomute.addRole(muterole.id));
      message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    
      setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
      }, ms(mutetime));
    
    
    //end of module
    }
  
  });
  client.on('message', async message =>{
    var prefix = "+";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(msg => msg.delete(6000))
  
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });
client.on('message', message => {
    var prefix = '+';
if (message.content.startsWith(prefix + "nickname" && prefix + "nick")) {
  let args = message.content.split(' ').slice(1).join(' ');
  let args2 = message.content.split(' ').slice(2).join(' ');
if (message.member.hasPermission("CHANGE_NICKNAME")) {
  let mention = message.mentions.members.first();

  let clientbot = message.guild.me
  if (clientbot.hasPermission("MANAGE_NICKNAMES")) {
    if (message.mentions.users.size === 0) {
      if (args.length === 0) {
        if (message.member.nickname != null) {
          message.member.setNickname(args2)
          const embed = new Discord.RichEmbed()
          .setColor("#fff")
          .setTitle(" أمثله على الأوامر : ")
          .setDescription(`
          **+nick** : لحذف اسمك في السيرفر
          **+nickname @Moha Someone** : لتغيير اسم شخص ما في السيرفر`)
          .setFooter('Requested by '+message.author.username, message.author.avatarURL)

        message.channel.send({ embed: embed }); 
      } else {
        const embed1 = new Discord.RichEmbed()
        .setTitle("No Succes!")
        .setColor("#fff")
        .setDescription("**:x: | لا يمكنني حذف اسمك لانه لا يوجد آسم من الأصل**")

        message.channel.send({ embed: embed1 });
      }
    } else {
      if (args.length < 32) {
        if (message.author.id === message.guild.owner.id) {
          const embed2 = new Discord.RichEmbed()
          .setColor("#fff")
          .addField("**:x: | ❌ Permission Error ❌**", `**Because you are the owner of the guild, I can't change your nickname!**`)
          message.channel.send({ embed: embed2 });
        } else {
          message.member.setNickname(args)
          const embed3 = new Discord.RichEmbed()
            .setColor("#fff")
            .setTitle("Succes!")
            .setDescription(`**:white_check_mark:| Nickname changed to:** **${args}**`)
            message.channel.send({ embed: embed3 });
        }
      } else {
        const embed4 = new Discord.RichEmbed()
          .setColor("#fff")
          .setDescription("**:x: | يجب آن يكون عدد الأحرف لا يتعدى 32 حرفاّ**")
          message.channel.send({ embed: embed4 });
      }
    }
} else {
  if (message.member.hasPermission("MANAGE_NICKNAMES")) {
    if (clientbot.hasPermission("MANAGE_NICKNAMES")) {
      if (args2.length === 0) {
        let mentionednick1 = message.mentions.members.first()
        let mgn1 = message.guild.members.get(mentionednick1.id)
          if (mgn1.nickname != null) {
            mgn1.setNickname(args2)
              const embed5 = new Discord.RichEmbed()
                .setColor("#fff")
                .setTitle("Succes!")
                .setDescription(`**:white_check_mark:| Nickname of ${mgn1.user.username} Removed!\nDefault Username:** **${mgn1.user.username}**`)

          message.channel.send({ embed: embed5 });
        } else {
          mgn1.setNickname(args2)
          const embed6 = new Discord.RichEmbed()
          .setTitle("No Succes!")
          .setDescription(`**:x: | Can't remove the username of\n${mgn1.user.username} because he/she doesn't have a nickname!**`)
          .setColor("#fff")

        message.channel.send({ embed: embed6 });
      }
    } else {
      let embed7 = message.mentions.members.first()
      let mgn2 = message.guild.members.get(mentionednick2.id)
      mgn2.setNickname(args2)
      const args2nickname = new Discord.RichEmbed()
        .setColor("#fff")
        .setTitle("Succes!")
        .setDescription(`**:white_check_mark:| Nickname of ${mgn2.user.username} changed to:** **${args2}**`)

        message.channel.send({ embed: embed7 });
      }
    } else {
      const embed8 = new Discord.RichEmbed()
        .setColor("#fff")
        .addField("**:x: |  ❌ Permission Error ❌**", `**I don't have perms to change nicknames of other users!\nNeeded Permission:** **MANAGE_NICKNAMES**`)

        message.channel.send({ embed: embed8 });
    }
} else {
  const embed9 = new Discord.RichEmbed()
    .setColor("#fff")
    .addField("**:x: | ❌ Permission Error ❌**", `**You don't have perms to change nicknames of other users!\nNeeded Permission:** **MANAGE_NICKNAMES**`)

    message.channel.send({ embed: embed9 });
  }
}
} else {
  const embed10 = new Discord.RichEmbed()
    .setColor("#fff")
    .addField("**:x: | ❌ Permission Error ❌**", `**I don't have perms to change nicknames!\nNeeded Permission:** **MANAGE_NICKNAMES**`)
    message.channel.send({ embed: embed10 });
}
} else {
message.react("❌")
}
}
});
  
  
      client.on('message', message => {
        var prefix = "+";
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("Please mention a user to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Try again.");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("User muted successfully.");
        }
      }
    });
    client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });
   
  
client.on('message', message => {
  if(!message.channel.guild) return;
  var prefix = "+";
if(message.content.startsWith(prefix + 'move')) {
  var cmdrole = message.guild.roles.find("name", config.cmdrole)
     if (message.member.hasPermission("MOVE_MEMBERS")) {
if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**I Don't Have `MOVE_MEMBERS` Permission**").then(msg => msg.delete(6000))
            if (message.mentions.users.size === 0) { const embed = new Discord.RichEmbed()
                   .setColor("#fff")
                   .setTitle(" أمثله على الأوامر : ")
                   .setDescription(`
         **+move @Moha**: لسحب شخص ما الى الروم الصوتي الخاص بك
         **+move all**: لسحب جميع الاعضاء الى روم الصوتي الخاص بك`)
                   .setFooter('Requested by '+message.author.username, message.author.avatarURL)
               
                 message.channel.send({ embed: embed });
            }
            if (message.member.voiceChannel != null) {
                   if (message.mentions.members.first().voiceChannel != null) {
                          var authorchannel = message.member.voiceChannelID;
                          var usermentioned = message.mentions.members.first().id;
                         var embed = new Discord.RichEmbed()
                            .setTitle("Succes!")
                            .setColor("#fff")
                            .setDescription(`**:white_check_mark:| لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك**`)
                            .setFooter('Requested by '+message.author.username, message.author.avatarURL)

                          var embed = new Discord.RichEmbed()
                            .setTitle(`You are Moved in ${message.guild.name}`)
                            .setColor("#000000")
                            .setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
                            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
                                                        message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                          message.guild.members.get(usermentioned).send(embed)
                   } else {
                          message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
                   }
            } else {
                   message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
            }
     } else {
            message.react("❌")
     }
  }
  });

  
client.on('message', message => {
  var prefix = "+";
  if(message.content.startsWith(prefix + 'move all')) {
   if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
     if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
  if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
   var author = message.member.voiceChannelID;
   var m = message.guild.members.filter(m=>m.voiceChannel)
   message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
   m.setVoiceChannel(author)
   })
   .setColor("#fff")
   .setTitle("Succes!")
   .setDescription(`**:white_check_mark:| تم سحب جميع الأعضاء الى الروم الصوتي الخاص بك`)
             .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
   }
     });
  client.on("message", message => {
      var prefix = "+";
      const command = message.content.split(" ")[0];
   
      if(command == prefix+"voicekick"){
   
          if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
              return message.reply('you do not have permission to perform this action!');
          }
   
          var member = message.guild.members.get(message.mentions.users.array()[0].id);
          if(!message.mentions.users){
              message.reply("please mention the member")
              return;
          }
   
      if(!member.voiceChannel){
      message.reply("i can't include voice channel for member!")
      return;
      }
                message.guild.createChannel('voicekick', 'voice').then(c => {
                  member.setVoiceChannel(c).then(() => {
                      c.delete(305).catch(console.log)
   message.reply(' has been successfullly kicked from voice.');
       
        });
       });
      }
  });
  
  client.on("message", message => {
      var prefix = "+";
      var args = message.content.split(' ').slice(1); 
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if( msg.toLowerCase().startsWith( prefix + 'fljhlflsh' ) ){
   if (!message.member.hasPermission("ADMINISTRATOR"))  return message.reply("**للأسف ليس لديك صلاحية `ADMINISTRATOR`**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**I Don't Have `ADMINISTRATOR` Permission**").then(msg => msg.delete(6000));
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().removeRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.removeRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
          }   
      } else {
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
          } 
      } 
  });

client.on('message', message => {
  var prefix = '+';

  if (message.content.startsWith(prefix + "removerole")) {
    let clientbot = message.guild.me;
if (clientbot.hasPermission("MANAGE_ROLES")) {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**')
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**')
    message.react("❌")
  } else {
    let args = message.content.split(' ').slice(1).join(' ');
  let args2 = message.content.split(' ').slice(2).join(' ');
  if (message.mentions.users.size === 0) {
    const embed = new Discord.RichEmbed()
    .setColor("#fff")
    .setTitle(" أمثله على الأوامر : ")
    .setDescription(`
    **+role @Moha Mod** : لأعطاء رتبة لشخص 
    **+remove @Moha Mod** : لأزاله رتبة من شخص
    **+role all Guest** : لاعطاء رتبة للجميع
    **+role bots System** : لاعطاء رتبة لجميع البوتات
    **+role humans User** : لاعطاء رتبة للأشخاص فقط`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)

  message.channel.send({ embed: embed });
  } else {
    var mentioned = message.mentions.members.first().id;
    var mgm = message.guild.members.get(mentioned)
    var role = message.guild.roles.find("name", args2)
    let hasrole = mgm.roles.has("name", args)
    if (args2) {
      if (role) {
        if (mgm.roles.has(role.id)) {
        mgm.removeRole(role)
        const roleremoved = new Discord.RichEmbed()
          .addField(`**Role Removed!!**`, `**:white_check_mark:| The role **${args2}** has been removed from <@${mgm.id}>**`)
          .setColor("#fff")
          message.channel.send(roleremoved)
        } else {
          message.channel.send("**:x: |"+mgm.user.tag+"** doesn't have the role **" + role.name + "**!")
        }
      } else {
        message.channel.send("**:x: |The role Named **``"+args2+"``** doesn't exist!**")
      }

    } else {
      const embed1 = new Discord.RichEmbed()
      .setColor("#fff")
      .setTitle(" أمثله على الأوامر : ")
      .setDescription(`
      **+role @Moha Mod** : لأعطاء رتبة لشخص 
      **+remove @Moha Mod** : لأزاله رتبة من شخص
      **+role all Guest** : لاعطاء رتبة للجميع
      **+role bots System** : لاعطاء رتبة لجميع البوتات
      **+role humans User** : لاعطاء رتبة للأشخاص فقط`)
      .setFooter('Requested by '+message.author.username, message.author.avatarURL)

    message.channel.send({ embed: embed1 });    }
  }
}
} else {
const botnoperm = new Discord.RichEmbed()
        .setColor("#fff")
        .addField("❌ Permission Error ❌", `I don't have perms to add roles to users!\nNeeded Permission: **MANAGE_ROLES**`)

        message.channel.send(botnoperm)
}
}
});
  
      client.on('message', message => {
        var prefix = "+";
        if(message.content.startsWith(prefix + 'deafen')) {
      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
        return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
      }
      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
        return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x:').catch(console.error);
      }
     
      const deafenMember = (member) => {
        if (!member || !member.voiceChannel) return;
        if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);
        member.setDeaf(true).catch(console.error);
        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
      };
     
      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
        }
        
    });  
     
    client.on('message', async message =>{
      var prefix = "+";
      if(message.content.startsWith(prefix + 'undeafen')) {
     
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x: ').catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
    }
     
    const undeafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };
     
    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
    }
    });
  
  
  
  
   
  client.on("message", message => {
      var prefix= "+";

      if(message.content.startsWith(prefix + 'ct')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'text') // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
        message.channel.send(`:white_check_mark:  تم عمل الروم الكتابي : \`${nam}\``);
      }
      });
   
  client.on("message", message => {
  var prefix= "+";

      if(message.content.startsWith(prefix + 'cv2')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;   
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'voice')
        message.channel.send(`:white_check_mark:  تم عمل الروم الصوتي : \`${nam}\``);
      }
      });
  
  client.on("message", message => {
  var prefix= "+";

      if(message.content.startsWith(prefix + 'cc')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'category') //  
        message.channel.send(`:white_check_mark:  تم عمل مجموعة : \`${nam}\``);
      }
      });
  


  client.on('message', async message => {
    if(message.content.startsWith(prefix + "tv")) {
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
      await message.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === message.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
  
     
      message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  
  
  
  e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    message.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        message.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
  })
  
  client.on('message', message => {
    var prefix = "+";
  if(message.content === prefix + "muteall") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: false
  
  }).then(() => {
      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
  
  });
  }
     
  
  
  });
    client.on('message', message => {
      var prefix = "+";
  if(message.content === prefix + "unmuteall") {
            if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: true
  
  }).then(() => {
      message.reply("**__تم فتح الشات__:white_check_mark:**")
  });
    }
     
  
  
  });
  
            client.on("message", (message) => {
              if (message.content.startsWith('+delet')) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
                  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("ليس لديك خاصية `MANAGE_CHANNELS` Premissions ");
           
                  let args = message.content.split(' ').slice(1);
                  let channel = message.client.channels.find('name', args.join(' '));
                  if (!channel) return message.reply('**مافي روم بهل اسم -_-**').catch(console.error);
                  channel.delete()
              }
          });
  
  client.on('message', message => {
         var prefix= "+";

      if(message.content === prefix + "hidechannel") {
      if(!message.channel.guild) return;
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))

      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**Channel Hided Successfully ! :white_check_mark:  **')            
 }
});


client.on('message', message => {
         var prefix= "+";

      if(message.content === prefix + "showchannel") {
      if(!message.channel.guild) return;
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))

      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Channel Showed Successfully ! :white_check_mark:  **')            
 }
});
   
  
  client.on('message', message => {
      var prefix= "+";

      if(message.content === prefix + 'createcolors') {
                           if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
           if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

        message.guild.createRole({
                    name: "1",
                      color: "#FFB6C1",
                      permissions: []
       })
             message.guild.createRole({
                    name: "2",
                      color: "#FFC0CB",
                      permissions: []
       })
                  message.guild.createRole({
                    name: "3",
                      color: "#FF69B4",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "4",
                      color: "#FF1493",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "5",
                      color: "#DB7093",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "6",
                      color: "#C71585",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "7",
                      color: "#E6E6FA",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#D8BFD8",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#DDA0DD",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "9",
                      color: "#DA70D6",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "10",
                      color: "#EE82EE",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "11",
                      color: "#FF00FF",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "12",
                      color: "#BA55D3",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "13",
                      color: "#9932CC",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "14",
                      color: "#9400D3",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "15",
                      color: "#8A2BE2",
                      permissions: []
       })
                                 message.guild.createRole({
                    name: "16",
                      color: "#8B008B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "17",
                      color: "#800080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "18",
                      color: "#9370DB",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "19",
                      color: "#7B68EE",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "20",
                      color: "#6A5ACD",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "21",
                      color: "#483D8B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "22",
                      color: "#663399",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "23",
                      color: "#4B0082",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "24",
                      color: "#FFA07A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "25",
                      color: "#FA8072",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "26",
                      color: "#E9967A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "27",
                      color: "#F08080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "28",
                      color: "#CD5C5C",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "29",
                      color: "#DC143C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "30",
                      color: "	#FF0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "31",
                      color: "#B22222",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "32",
                      color: "#8B0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "33",
                      color: "#FFA500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "34",
                      color: "#FF8C00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "35",
                      color: "#FF7F50",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "36",
                      color: "#FF6347",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "37",
                      color: "#FF4500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "38",
                      color: "#FFD700",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "39",
                      color: "#FFFFE0",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "40",
                      color: "#FFFACD",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "41",
                      color: "#FAFAD2",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "42",
                      color: "	#FFEFD5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "43",
                      color: "#FFE4B5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "44",
                      color: "#FFDAB9",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "45",
                      color: "#EEE8AA",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "46",
                      color: "#F0E68C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "47",
                      color: "#BDB76B",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "48",
                      color: "#ADFF2F",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "49",
                      color: "#7FFF00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "50",
                      color: "#7CFC00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "51",
                      color: "#00FF00",
                      permissions: []
       })  
       
                                           message.guild.createRole({
                    name: "52",
                      color: "#32CD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "53",
                      color: "#98FB98",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "54",
                      color: "#90EE90",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "55",
                      color: "#00FA9A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "56",
                      color: "#00FF7F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "57",
                      color: "#3CB371",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "58",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "59",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "60",
                      color: "#008000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "61",
                      color: "#006400",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "62",
                      color: "#9ACD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "63",
                      color: "#6B8E23",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "64",
                      color: "#556B2F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "65",
                      color: "#66CDAA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "66",
                      color: "#8FBC8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "67",
                      color: "#20B2AA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "68",
                      color: "#008B8B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "69",
                      color: "#008080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "70",
                      color: "#00FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "71",
                      color: "#E0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "72",
                      color: "#AFEEEE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "73",
                      color: "#7FFFD4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "74",
                      color: "#40E0D0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "75",
                      color: "#48D1CC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "76",
                      color: "#00CED1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "77",
                      color: "#5F9EA0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "78",
                      color: "#4682B4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "79",
                      color: "#B0C4DE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "80",
                      color: "#ADD8E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "81",
                      color: "#B0E0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "82",
                      color: "#87CEFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "83",
                      color: "#87CEEB",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "84",
                      color: "#6495ED",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "85",
                      color: "#00BFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "86",
                      color: "#1E90FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "87",
                      color: "#4169E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "88",
                      color: "#0000FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "89",
                      color: "#0000CD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "90",
                      color: "#00008B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "91",
                      color: "#000080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "92",
                      color: "#191970",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "93",
                      color: "#FFF8DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "94",
                      color: "#FFEBCD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "95",
                      color: "#FFE4C4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "96",
                      color: "#FFDEAD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "97",
                      color: "#F5DEB3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "98",
                      color: "#DEB887",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "99",
                      color: "#D2B48C",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "100",
                      color: "#BC8F8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "101",
                      color: "#F4A460",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "102",
                      color: "#DAA520",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "103",
                      color: "#B8860B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "104",
                      color: "#CD853F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "105",
                      color: "#D2691E",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "106",
                      color: "#808000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "107",
                      color: "#8B4513",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "108",
                      color: "#A0522D",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "109",
                      color: "#A52A2A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "110",
                      color: "#800000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "111",
                      color: "#FFFFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "112",
                      color: "#FFFAFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "113",
                      color: "#F0FFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "114",
                      color: "#F5FFFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "115",
                      color: "#F0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "116",
                      color: "#F0F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "117",
                      color: "#F8F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "118",
                      color: "#F5F5F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "119",
                      color: "#FFF5EE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "120",
                      color: "#F5F5DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "121",
                      color: "#FDF5E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "122",
                      color: "#FFFAF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "123",
                      color: "#FFFFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "124",
                      color: "#FAEBD7",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "125",
                      color: "#FAF0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "126",
                      color: "#FFF0F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "127",
                      color: "#FFE4E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "128",
                      color: "#DCDCDC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "129",
                      color: "#D3D3D3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "130",
                      color: "#C0C0C0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "131",
                      color: "#A9A9A9",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "132",
                      color: "#696969",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "133",
                      color: "#808080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "134",
                      color: "#778899",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "135",
                      color: "#708090",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "136",
                      color: "#2F4F4F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "137",
                      color: "#000000",
                      permissions: []
       })     
  
       
            message.channel.sendMessage({embed: new Discord.RichEmbed()
       .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
      }
      });


client.on('message',async message => {
  if(message.content === '+unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });
    

  client.on("guildBanAdd", (guild, member) => {
    client.setTimeout(() => {
      guild.fetchAuditLogs({
          limit: 1,
          type: 22
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username);
          try {
            client.fetchUser(member.id).then(myUser => {
              guild.owner.send(`سيرفر : ${guild.name}
              **${myUser.username} تم تبنيد  
             بواسطة : ${exec}**`).catch(e => {
              console.log(e);
            });
            });
          } catch (e) {
            console.log(e);
          }
        });
    }, 1000);
  });

  
client.on("message", message => {
  if (message.content === "+help-admin") {
   message.react("✅")
message.react("📬")
   const embed = new Discord.RichEmbed() 
 .setColor("#ffff00")
 .setDescription(`
 
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯

  ══════════ஜ۩۞۩ஜ════════════ 
**       اوامر ادارية    
+bc
  └─ للبرودكاست بأمبد
+allbc 
  └─ للبرودكاست بدون أمبد
+onlinebc 
  └─ لأرسال برودكاست للاونلاين فقط
+rolebc 
  └─ لأرسال برودكاست لرتبة معينه
+ownerbc 
  └─ لأرسال برودكاست لأونر السيرفر
+nick
  └─ لحذف اسمك
+nickname
  └─ لتغيير اسم شخص ما
+muteall 
  └─ لقفل الشات
+unmuteall
  └─ لفتح الشات
+hidechannel 
  └─ لأخفاء الشات
+showchannel
  └─ لأظهار الشات الشات  
+mute
  └─ لاعطاء ميوت لشخص 
+mutevoice
  └─ لاعطاء ميوت صوتي 
+unmutevoice
  └─ لفك ميوت صوتي
+deafen
  └─ لأعطاء ديفن 
+undeafen 
  └─ لفك الديفن
+unmute 
  └─ لفك الميوت
+createcolors 
  └─ لعمل 137 لون مرتب 
+deletecolors
  └─ لمسح جميع الألوان بالسيرفر
+ban
  └─ لتعطي شخص باند مع السبب
+unban
  └─ لفك الباند عند شخص محدد 
+unbanall
  └─ لفك الباند عن الجميع 
+kick
  └─ لتعطي شخص كيك مع السبب   
+clear
  └─ لمسح الشات   
+tc
  └─ لانشاء روم صوتي وكتابي مؤقت
+cc
  └─ لانشاء كاتجوري 
+cv
  └─ لانشاء روم صوتي دائم 
+ct
  └─ لانشاء روم كتابي دائم  
+delet
  └─ يحذف الـروم سواء صوتي او كتابي
+role 
  └─ لأعطاء رتبة
+removerole
  └─ أزالة رتبة
+role all 
  └─ لأعطاء جميع الي في سيرفر رتبة
+role bots
  └─ لأعطاء جميع البوتات رتبة
+role humans
  └─ لأعطاء جميع الناس معدى البوتات رتبة 
+voicekick
  └─ لطرد شخص من روم صوتي
+move
  └─ لسحب الشخص الى الروم صوتي الخاص بك
+move all
  └─ لسحب جميع الاشخاص الموجودون بالرومات الصوتية أليك**
  
 ══════════ஜ۩۞۩ஜ════════════  
 
 **:link: | الموقع الخاص بالبوت :** http://darknessxd.tk/WebSite/index.html
 🔗 **| دعوة البوت** : https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583
 :exclamation:  **| لدعوة البوت ** : +invite
 :exclamation:  **| لأرسال اقتراح لصاحب البوت** : +sug
  `)
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)

     
     
    message.author.sendEmbed(embed)
     
    }
    }); 



  
  client.on('message' , msg => {
    var prefix = "+";
    if(msg.author.bot) return;
    if(msg.channel.type == 'dm') return;
    if(msg.content.startsWith(prefix + "deletecolors")) {
      if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
      if(!msg.guild.member(client.user).hasPermission("MANAGE_ROLES")) return msg.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

    msg.guild.roles.filter(msg => isNaN(msg)).forEach(dragon => dragon.delete())
    }
    });
      

          
//╭━━╮╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭╮┃╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╭╯╰╮
//┃╰╯╰┳━┳━━┳━╯┣━━┳━━┳━━┳━┻╮╭╯
//┃╭━╮┃╭┫╭╮┃╭╮┃╭╮┃╭━┫╭╮┃━━┫┃
//┃╰━╯┃┃┃╰╯┃╰╯┃╭╮┃╰━┫╭╮┣━━┃╰╮
//╰━━━┻╯╰━━┻━━┻╯╰┻━━┻╯╰┻━━┻━╯
    
    client.on('message', msg => {
  var prefix = "+";
    if(msg.author.bot) return;
      if(msg.content.startsWith(prefix + "ownerbc")) {
        let args = msg.content.split(" ").slice(1);
           if(!args[0]) {
              msg.channel.send("** -bcowner <message> **")
                return;
                  }      
                   var embed = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${msg.guild.name} 
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${msg.author.username}#${msg.author.discriminator}`)
       msg.guild.owner.send(embed);
      msg.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );
    
     client.on('message', message => {
                  if(!message.channel.guild) return;
        var prefix = "+";
        if(message.content.startsWith(prefix + 'bc')) {
        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "Dragon";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
         
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
         
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
         
        reaction1.on("collect", r => {
        message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
        var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('Server', message.guild.name)
           .addField('Sender', message.author.username)
           .addField('Message', args)
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        });
     client.on('message' , message => {
          var prefix = "+";
          if(message.author.bot) return;
         
          if(message.content.startsWith(prefix + "rolebc")) {
            if (!message.member.hasPermission("ADMINISTRATOR"))  return;
            let args = message.content.split(" ").slice(1);
         
            if(!args[0]) {
              message.channel.send("قم بمنشنة الرتبة | !rolebc @everyone message")
                return;
            }
            if(!args[1]) {
              message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
                return;
            }
         
              if(args[0] == "@everyone") {
                message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
                message.guild.members.forEach(m => {
                  m.send(
                  "**" + "السيرفر :" + "\n" +
                  `${message.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${message.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                return;
              }
         
                  var role = message.mentions.roles.first();
                    if(!role) {
                      message.reply("لا توجد رتبة بهذا الاسم")
                        return;
                    }
                message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
                  n.send(
                  "**" + "السيرفر :" + "\n" +
                  `${message.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${message.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
            }
        });
    
     client.on('message',async message => {
    var prefix = "+";
    if(message.content.startsWith(prefix + "allbc")) {
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {
  
      let awaitM = message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
        let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 20000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
          message.guild.members.forEach(member => {
            msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
            collected.first().delete();
            member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
          });
          }
        });
      });
      });
    }
  });
    
                    client.on("message", message => {
                         var prefix = "+";
                        if (message.content.startsWith(prefix + "onlinebc")) {
                                     if (!message.member.hasPermission("ADMINISTRATOR"))  return;
              let args = message.content.split(" ").slice(1);
              var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
             m.send(`${argresult}\n ${m}`);
            })
             message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
             message.delete(); 
            };     
            });


            


const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');

const youtube = new YouTube(GOOGLE_API_KEY);



const queue = new Map();



client.on('warn', console.warn);



client.on('error', console.error);



client.on('ready', () => console.log('Yo this ready!'));



client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));



client.on('reconnecting', () => console.log('I am reconnecting now!'));


client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	var embed = new Discord.RichEmbed()
	if (!msg.content.startsWith(PREFIX)) return undefined;



	const args = msg.content.split(' ');

	const searchString = args.slice(1).join(' ');

	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

	const serverQueue = queue.get(msg.guild.id);



	let command = msg.content.toLowerCase().split(" ")[0];

	command = command.slice(PREFIX.length)

	if (command === `play`) {
    
		const voiceChannel = msg.member.voiceChannel;
        
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');

		const permissions = voiceChannel.permissionsFor(msg.client.user);

		if (!permissions.has('CONNECT')) {

			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');

		}

		if (!permissions.has('SPEAK')) {

			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');

		}



		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);

			const videos = await playlist.getVideos();

			for (const video of Object.values(videos)) {

				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop

				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop

			}

			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);

		} else {

			try {

				var video = await youtube.getVideo(url);

			} catch (error) {

				try {

					var videos = await youtube.searchVideos(searchString, 10);

					let index = 0;

					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**اختار رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
					.setFooter("")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					// eslint-disable-next-line max-depth


					// eslint-disable-next-line max-depth

					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {

							maxMatches: 1,

							time: 10000,

							errors: ['time']

						});

					} catch (err) {

						console.error(err);

						return msg.channel.send('No or invalid value entered, cancelling video selection.');

					}

					const videoIndex = parseInt(response.first().content);

					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);

				} catch (err) {

					console.error(err);

					return msg.channel.send('🆘 I could not obtain any search results.');

				}

			}

			return handleVideo(video, msg, voiceChannel);

		}
    
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');

		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');

		serverQueue.connection.dispatcher.end('Skip command has been used!');

		return undefined;

	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');

		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');

		serverQueue.songs = [];

		serverQueue.connection.dispatcher.end('Stop command has been used!');

		return undefined;

	} else if (command === `vol`) {

		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');

		if (!serverQueue) return msg.channel.send('There is nothing playing.');

		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);

		serverQueue.volume = args[1];

		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);

		return msg.channel.send(`I set the volume to: **${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is nothing playing.');

		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);

	} else if (command === `queue`) {

		if (!serverQueue) return msg.channel.send('There is nothing playing.');

		return msg.channel.send(`

__**Song queue:**__



${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}



**Now playing:** ${serverQueue.songs[0].title}

		`);

	} else if (command === `pause`) {

		if (serverQueue && serverQueue.playing) {

			serverQueue.playing = false;

			serverQueue.connection.dispatcher.pause();

			return msg.channel.send('⏸ Paused the music for you!');

		}

		return msg.channel.send('There is nothing playing.');

	} else if (command === `resume`) {

		if (serverQueue && !serverQueue.playing) {

			serverQueue.playing = true;

			serverQueue.connection.dispatcher.resume();

			return msg.channel.send('▶ Resumed the music for you!');

		}

		return msg.channel.send('There is nothing playing.');

	}



	return undefined;

});


async function handleVideo(video, msg, voiceChannel, playlist = false) {

	const serverQueue = queue.get(msg.guild.id);

	console.log(video);

	const song = {

		id: video.id,

		title: Util.escapeMarkdown(video.title),

		url: `https://www.youtube.com/watch?v=${video.id}`

	};

	if (!serverQueue) {

		const queueConstruct = {

			textChannel: msg.channel,

			voiceChannel: voiceChannel,

			connection: null,

			songs: [],

			volume: 5,

			playing: true

		};

		queue.set(msg.guild.id, queueConstruct);



		queueConstruct.songs.push(song);



		try {

			var connection = await voiceChannel.join();

			queueConstruct.connection = connection;

			play(msg.guild, queueConstruct.songs[0]);

		} catch (error) {

			console.error(`I could not join the voice channel: ${error}`);

			queue.delete(msg.guild.id);

			return msg.channel.send(`I could not join the voice channel: ${error}`);

		}

	} else {

		serverQueue.songs.push(song);

		console.log(serverQueue.songs);

		if (playlist) return undefined;

		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);

	}

	return undefined;

}



function play(guild, song) {

	const serverQueue = queue.get(guild.id);



	if (!song) {

		serverQueue.voiceChannel.leave();

		queue.delete(guild.id);

		return;

	}

	console.log(serverQueue.songs);



	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))

		.on('end', reason => {

			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');

			else console.log(reason);

			serverQueue.songs.shift();

			play(guild, serverQueue.songs[0]);

		})

		.on('error', error => console.error(error));

	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);



	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);

}

client.on("message", message => {
  if (message.content === "+help-music") {
         message.react("✅")
            message.react("📬")
   const embed = new Discord.RichEmbed() 
       .setColor("#fff")
      .setDescription(`

╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
      
══════════ஜ۩۞۩ஜ════════════  
 **      اوامر الاغاني   

+play 
  └─ لتشغيل اغنية عبر الأسم او رابط
+stop 
  └─ لأيقاف الأغنيه
+skip 
  └─ لتخطي الأغنية
+queue 
  └─ لمعرفة الأغنية الأغنية الذي تم تشغيلها
+vol
  └─ لتغيير درجة صوت
+pause
  └─ لأيقاف الأغنية مؤقتاّ
+resume
  └─ لأستمرار الأغنية**

══════════ஜ۩۞۩ஜ════════════ 

**:link: | الموقع الخاص بالبوت :** http://darknessxd.tk/WebSite/index.html
🔗 **| دعوة البوت** : https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583
:exclamation:  **| لدعوة البوت ** : +invite
:exclamation:  **| لأرسال اقتراح لصاحب البوت** : +sug
 `)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
 
    message.author.sendEmbed(embed)
    
    }
    }); 


//╭━━━┳━━━┳━╮╭━┳━━━┳━━━╮
//┃╭━╮┃╭━╮┃┃╰╯┃┃╭━━┫╭━╮┃
//┃┃╱╰┫┃╱┃┃╭╮╭╮┃╰━━┫╰━━╮
//┃┃╭━┫╰━╯┃┃┃┃┃┃╭━━┻━━╮┃
//┃╰┻━┃╭━╮┃┃┃┃┃┃╰━━┫╰━╯┃
//╰━━━┻╯╱╰┻╯╰╯╰┻━━━┻━━━╯


            let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));
            
            client.on('message', message => {
            if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
              };
            if (message.content.startsWith(prefix + 'لغز')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
            
            const type = require('./fkk/quiz.json');
            const item = type[Math.floor(Math.random() * type.length)];
            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };
            message.channel.send('**لديك 15 ثانيه لحل هذه الغز**').then(msg => {
            
                        
            msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                    .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من حل هذه الغز بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                        let won = collected.first().author;
                        points[won.id].points++;
                      })
                      .catch(collected => {
                        message.channel.send(`:x: **لم يتمكن احد من حل هذه الغز  في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                      })
                    })
                })
            }
            });
            
            client.on('message', message => {
              if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
                };
              if (message.content.startsWith(prefix + 'فكك')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
              
              const type = require('./fkk/fkk.json');
              const item = type[Math.floor(Math.random() * type.length)];
              const filter = response => {
                  return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
              };
              message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {
              
                    
              msg.channel.send(`${item.type}`).then(() => {
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                      .then((collected) => {
                  message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                          message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
                    console.log('[Typing] Error: No one type the word.');
                        })
                  })
                })
              }
              });
            client.on('message', async message => {
              var prefix = "+";     
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "wasted")) {
            var jimp = require('jimp')
      
            if(message.mentions.users.size < 1) {
                Jimp.read(message.author.avatarURL).then(function (photo) {
                    photo.resize(512, 512).grayscale().gaussian(2)
                    Jimp.read('./wasted.png').then(function (lenna) {
                        photo.composite(lenna,0,0)
                        photo.getBuffer(Jimp.MIME_PNG, function (err, image) { 
                            message.delete();
                            message.channel.send({files:[{attachment:image,name:"file.png"}]}) 
                        })
                    })
                })
            } else if (message.mentions.users.size > 1) {
                message.channel.sendEmbed(new Discord.RichEmbed()
                    .addField('Error!', `Please mention a single user!`)
                    .setColor(0xff5454)
                );
                return;
            } else {
                let mention = message.guild.member(message.mentions.users.first());
                Jimp.read(mention.user.avatarURL).then(function (photo) {
                    photo.resize(512, 512).grayscale().gaussian(2)
                    Jimp.read('./wasted.png').then(function (lenna) {
                        photo.composite(lenna,0,0)
                        photo.getBuffer(Jimp.MIME_PNG, function (err, image) { 
                            message.delete();
                            message.channel.send({files:[{attachment:image,name:"file.png"}]}) 
                        })
                    })
                })
            }
        };
      });

              client.on('message', message => {
                if (!points[message.author.id]) points[message.author.id] = {
                  points: 0,
                  };
                if (message.content.startsWith(prefix + 'ركب')) {
                  if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                
                const type = require('./fkk/RKB.json');
                const item = type[Math.floor(Math.random() * type.length)];
                const filter = response => {
                    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                };
                message.channel.send('**لديك 15 ثانيه لتركيب الكلمه**').then(msg => {
                
                      
                msg.channel.send(`${item.type}`).then(() => {
                        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                        .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تركيب الكلمه بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                            let won = collected.first().author;
                            points[won.id].points++;
                          })
                          .catch(collected => {
                            message.channel.send(`:x: **لم يتمكن احد من تركيب الكلمه في الوقت المناسب**`);
                      console.log('[Typing] Error: No one type the word.');
                          })
                    })
                  })
                }
                });
            
              client.on('message', message => {
                if (!points[message.author.id]) points[message.author.id] = {
                  points: 0,
                  };
                if (message.content.startsWith(prefix + 'رياضيات')) {
                  if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                
                const type = require('./fkk/math.json');
                const item = type[Math.floor(Math.random() * type.length)];
                const filter = response => {
                    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                };
                message.channel.send('**لديك 15 ثانيه لحل المسئله**').then(msg => {
                
                      
                msg.channel.send(`${item.type}`).then(() => {
                        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                        .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من أجابه عن معادله بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                            let won = collected.first().author;
                            points[won.id].points++;
                          })
                          .catch(collected => {
                            message.channel.send(`:x: **لم يتمكن احد من حل معادله في الوقت المناسب**`);
                      console.log('[Typing] Error: No one type the word.');
                          })
                    })
                  })
                }
                });

                client.on('message', message => {
                    if (!points[message.author.id]) points[message.author.id] = {
                        points: 0,
                      };
                    if (message.content.startsWith(prefix + 'عواصم')) {
                        if(!message.channel.guild) return
                     
                    const type = require('./fkk/3wasm.json');
                    const item = type[Math.floor(Math.random() * type.length)];
                    const filter = response => {
                        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                    };
                    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
                     
                                 
                    msg.channel.send(`${item.type}`).then(() => {
                            message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                            .then((collected) => {
                            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
                    لمعرفة نقطاك الرجاء كتابة +نقاطي**`);
                            console.log(`[Typing] ${collected.first().author} typed the word.`);
                                let userData = points[message.author.id];
                                userData.points++;
                              })
                              .catch(collected => {
                                message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                                console.log('[Typing] Error: No one type the word.');
                              })
                            })
                        })
                    }
                    });
            
            client.on('message', message => {
            if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
              };
            if (message.content.startsWith(prefix + 'شقلب')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
            
            const type = require('./fkk/SHAKLEB.json');
            const item = type[Math.floor(Math.random() * type.length)];
            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };
            message.channel.send('**لديك 15 ثانيه لشقلبة الكلمه**').then(msg => {
            
                        
            msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                    .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت,لقد تمكنت من شقلبة الكلمة في الوقت المناسب**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                        let won = collected.first().author;
                        points[won.id].points++;
                      })
                      .catch(collected => {
                        message.channel.send(`:x: **لم يتمكن احد من شقلبة الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                      })
                    })
                })
            }
            });
            
                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'كتابة')) {
                    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                  
                  const type = require('./fkk/type.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                      console.log(`[Typing] ${collected.first().author} typed the word.`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                            })
                      })
                    })
                  }
                  });

                  client.on('message', message => {
                    if(message.content.startsWith ("+marry")) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **')
                    var proposed = message.mentions.members.first()
                   
                    if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
                    if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
                     if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
                      if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
                            message.channel.send(`**${proposed} 
               بدك تقبلي عرض الزواج من ${message.author}
               العرض لمدة 15 ثانية 
               اكتب موافقة او لا** `)
              
              const filter = m => m.content.startsWith("موافقة");
              message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
              .then(collected =>{ 
                  message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
              })
                 .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
                 
                 const filte = m => m.content.startsWith("لا");
              message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
              .then(collected =>{ 
                 message.channel.send(`**${message.author} تم رفض عرضك**`);
              })
                      
                
                           
                  
                }
              }); 
                   
var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
    client.on('message', message => {
var prefix = "+";

        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var lo = new Discord.RichEmbed()
     .setFooter(`©  Dragon™ `)
.setImage(viper[Math.floor(Math.random() * viper.length)])
message.channel.sendEmbed(lo);
    }
});
 
 
 
const secreT = [
    "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
    "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
    "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
    "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
    "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
    "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
    "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
    "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
    "**المناقشات العقيمة لا تنجب افكارا**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  ]
   
   
   client.on('message', message => {
     if (message.content.startsWith("+خواطر")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
   
     .setThumbnail(message.author.avatarURL) 
     .setFooter(`©  Dragon™ `)
   .addField('لعبه خواطر' ,
    `${secreT[Math.floor(Math.random() * secreT.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[id] Send By: ' + message.author.username)
      }
  });
 
 
 
const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
client.on('message', message => {
  if (message.content.startsWith("+كت تويت")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
     .setFooter(`©  Dragon™ `)
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});
 
 const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("+حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
     .setFooter(`©  Dragon™ `)
   .setThumbnail(message.author.avatarURL) 
 .addField('حب' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
    }
});
    
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
var prefix = "+";

        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
     .setFooter(`©  Dragon™ `)
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
 
const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',                                                                                                                                            
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('+صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
     .setFooter(`©  Dragon™ `)
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});  

  client.on('message', message => {
  
if(message.content.split(' ')[0] == '+srh'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");


 
 
 var user = message.mentions.users.first();

       
        if(user === message.author) return; 
          let em  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Msg : " , arg)

 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
                 message.delete()                                    
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(em)
           

 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
  
if(message.content.split(' ')[0] == '+srh1'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");


 
 
 var user = message.mentions.users.first();

       
        if(user === message.author) return; 
          let e  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Sent By :" , message.author.tag)
.addField("◆ Msg : " , arg)

 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
    message.delete()                                           
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(e)
                                  



 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});

client.on("message", message => {
  if (message.content === "+help-games") {
         message.react("✅")
            message.react("📬")
   const embed = new Discord.RichEmbed() 
       .setColor("#fff")
      .setDescription(`
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
      
══════════ஜ۩۞۩ஜ════════════  
 **       أوامر الألعاب

+فكك
  └─ لعبة فكك يعرض لك كلمه وعليك تفكيكها
+لغز
  └─ لعبة لغز يعرض عليك لغز ولازم تحله
+كتابة
 └─ لعبة لغز يعرض عليك كلمة وعليك كتابتها بأسرع وقت
+رياضيات
  └─ لعبة رياضيات يعرض عليك معادلة وعليك حلها
+شقلب
  └─ لعبة شقلب يعرض عليك كلمها وعليك عكسها
+ركب
  └─ لعبة ركب يعرض عليك كلمها مفكوكه وعليك تجميعها
 +حب
  └─ يعرض لك كلام حب
+كت تويت
  └─ يعرض لك اسئله جميله للكت تويت
+لو خيروك 
  └─ لعبة لو خيروك يعرض شيء يخيرك بينهم
+خواطر 
  └─ يعرض لك كلام جميل ومفيد
+صراحه
  └─ لعبة صراحه يعرض عليك اسئله محرجه وعليك جواب بكل صدقيه
+animal
  └─ يعطيك صور حيوانات
+marry
  └─ لعبة زواج تطلب زواج من أي شخص تريده
+srh
  └─ لأرسال صراحة بدون ذكر اسم المصارح
+srh1
  └─ لأرسال صراحة مع ذكر اسم المصارح**
 
══════════ஜ۩۞۩ஜ════════════ 

**:link: | الموقع الخاص بالبوت :** http://darknessxd.tk/WebSite/index.html
🔗 **| دعوة البوت** : https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583
:exclamation:  **| لدعوة البوت ** : +invite
:exclamation:  **| لأرسال اقتراح لصاحب البوت** : +sug
 `)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
 
    message.author.sendEmbed(embed)
    
    }
    }); 



//╭━━━╮╱╱╱╱╱╱╱╱╱╱╭╮╭━╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱╱┃┃┃╭╯
//┃┃╱┃┣╮╭┳━┳━━┳━╮┃╰╯╯╭━━┳━┳┳╮╭╮
//┃┃╱┃┃┃┃┃╭┫╭╮┃╭╮┫╭╮┃┃╭╮┃╭╋┫╰╯┃
//┃╰━╯┃╰╯┃┃┃╭╮┃┃┃┃┃┃╰┫╭╮┃┃┃┃┃┃┃
//╰━━╮┣━━┻╯╰╯╰┻╯╰┻╯╰━┻╯╰┻╯╰┻┻┻╯
//╱╱╱╰╯



client.on("message", message => {
  if (message.content === "+help-quran") {
         message.react("✅")
            message.react("📬")
   const embed = new Discord.RichEmbed() 
       .setColor("#fff")
      .setDescription(`
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
      
══════════ஜ۩۞۩ஜ════════════  
 **       أوامر القرأن الكريم

+quran
  └─ يشغل قرأن الكريم كاملآ
+quran-stop
  └─ يوقف قرأن الكريم كاملآ
+alkahf 
  └─ يشغل سورة الكهف
+alkahf-stop
  └─ يوقف سورة الكهف
+albaqara
 └─ يشغل سورة البقرة
+albaqara-stop
  └─ يوقف سورة البقرة
+yasin
  └─ يشغل سورة يس
+yasin-stop
  └─ يوقف سورة يس
+alkursi
  └─ يشغل آية الكرسي
+alkursi-stop
  └─ يوقف آية الكرسي**
 
══════════ஜ۩۞۩ஜ════════════ 

**:link: | الموقع الخاص بالبوت :** http://darknessxd.tk/WebSite/index.html
🔗 **| دعوة البوت** : https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583
:exclamation:  **| لدعوة البوت ** : +invite
:exclamation:  **| لأرسال اقتراح لصاحب البوت** : +sug
 `)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
 
    message.author.sendEmbed(embed)
    
    }
    }); 
    client.on('message', message => {
        if (message.content.startsWith('+quran')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+quran-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });

      client.on('message', message => {
        if (message.content.startsWith('+alkahf')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=sOML64y5dfQ', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+alkahf-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });
      
      client.on('message', message => {
        if (message.content.startsWith('+albaqara')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=gIYaTs1Kw90', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+albaqara-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });
      client.on('message', message => {
        if (message.content.startsWith('+yasin')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=KpNqGctH-p0', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+yasin-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });

      client.on('message', message => {
        if (message.content.startsWith('+alkursi')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=fcoQCIBMuRg', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+alkursi-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });
            client.login(process.env.BOT_TOKEN);

  
