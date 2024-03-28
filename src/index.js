require('dotenv').config();
const{Client,IntentsBitField, Message}=require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});
client.on('ready',(c)=> {
    console.log(`${c.user.username} is online`);

});


//to add too numbers and show the result 

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'add') {
      const num1 = interaction.options.get('first-number').value;
      const num2 = interaction.options.get('second-number').value;
  
      interaction.reply(`The sum is ${num1 + num2}`);
    }
  });


//some random slash commands

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'hey') {
      return interaction.reply('HIII!');
    }
  
    if (interaction.commandName === 'salam') {
      return interaction.reply('wa alaikoum salam!');
    }
  });


//client.on('messageCreate', (message)=> {
   // if(message.author.bot){
     //   return; //hadi bach ma n5eliwch l bot yrépondi 3la Ro7o
    //}
    //if(message.content=='HAKUNA')
    //message.reply('MATATA')

//});


client.login(process.env.TOKEN);
