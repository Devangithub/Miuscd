const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  denyemoji 
} = require(`../config.json`);

module.exports = {
  name: `help`,
  description: `Gives you a list of all help Commands`,
  aliases: ["h","commands"],
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message,args,client) {
     
    let commands = message.client.commands.array();
 
    let helpEmbed = new MessageEmbed()
      .setTitle("Musicium Help")
      .setDescription(`**Version:** \`v2.8\` \n**PREFIX:** \`${PREFIX}\``)
      .setFooter( client.user.username +`Type: ${PREFIX}help <Command>  for more information!`, "https://cdn.discordapp.com/avatars/769642999227351070/f1b78891507308fb76c0a66b56f4bcd6.webp")
      .setColor("#c219d8");

      let ifargstruedothis = -1;
      
      switch(args[0]){

         case "loop":
            ifargstruedothis=0;
          break;
          case "lyrics":
            ifargstruedothis=1
          break;
          case "nowplaying":
            ifargstruedothis=2
          break;
          case "pause":
            ifargstruedothis=3
          break;
          case "play":
            ifargstruedothis=4
          break;
          case "playlist":
            ifargstruedothis=5
          break;
          case "queue":
            ifargstruedothis=6
          break;
          case "radio":
            ifargstruedothis=7
          break;
          case "remove":
            ifargstruedothis=8
          break;
          case "resume":
            ifargstruedothis=9
          break;
          case "search":
            ifargstruedothis=10
          break;
          case "shuffle":
            ifargstruedothis=11
          break;
          case "skip":
            ifargstruedothis=12
          break;
          case "skipto":
            ifargstruedothis=13
          break;
          case "stop":
            ifargstruedothis=14
          break;
          case "volume":
            ifargstruedothis=15
          break;
          case "help":
            ifargstruedothis=16
          break;
          default:        
            commands.forEach((cmd) => {
              helpEmbed.addField(
                `**${message.client.prefix}${cmd.name}**`,
                `${cmd.description}`,
                true
              );
            });
          if(!message.guild) {
            if(!args[0]) {message.react(approveemoji);return message.author.send(helpEmbed);}
            return
            }
            message.react(approveemoji);
            message.author.send(new MessageEmbed().setColor("#c219d8")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`))
            message.author.send(helpEmbed)
            message.channel.send( new MessageEmbed().setColor("#c219d8")
            .setDescription(`**👍 ${message.author} Check your \`direct messages\` for a list of Commands!**`)
            );
           
        break;
       }
     
       if(ifargstruedothis>=0){
         let aliases = commands[ifargstruedothis].aliases;
         if(aliases === undefined || !aliases) aliases="No Aliases!";
         let cooldown = commands[ifargstruedothis].cooldown;
         if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";


        helpEmbed.addField(
          `**${message.client.prefix}${commands[ifargstruedothis].name}**`,
          `\`\`\`fix\n${commands[ifargstruedothis].edesc}\n\`\`\`\n\`${commands[ifargstruedothis].description}\``
        );
        helpEmbed.addField(
          `**:notes: Aliases:**`,
          `\`${aliases}\``
        );
        helpEmbed.addField(
          `**:wrench: Cooldown:**`,
          `\`${cooldown}\``
        );
        if(!message.guild) return message.author.send(helpEmbed);
          message.author.send(helpEmbed)
          message.channel.send( new MessageEmbed().setColor("#c219d8")
          .setDescription(`**👍 ${message.author} Check your \`direct messages\` for a list of Commands!**`)
          );
       }

}
} 
