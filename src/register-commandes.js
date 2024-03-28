require('dotenv').config();
const{REST, Routes, ApplicationCommandOptionType} =require("discord.js");
const commandes = [
    {
        name:'hello',
        description:'replies with oh Hi!'
    }
]


const commands = [
    {
      name: 'add',
      description: 'Adds two numbers.',
      options: [
        {
          name: 'first-number',
          description: 'The first number.',
          type: ApplicationCommandOptionType.String,
          choices: [
            {
              name: 'one',
              value: '1',
            },
            {
              name: 'two',
              value: '2',
            },
            {
              name: 'three',
              value: '3',
            },
          ],
          required: true,
        },
        {
          name: 'second-number',
          description: 'The second number.',
          type: ApplicationCommandOptionType.Number,
          required: true,
        },
      ],
    },
  ];
  

  

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');
    await rest.put(  //we're making an http request to the discord api and we're telling the compiler to wait 
    
        Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            process.env.GUILD_ID
        ),
        {body: commandes}
    );
    console.log('slash commandes were registred successfully! ');
        } catch (error) {
            console.log(`there was an error: ${error}`);
        };
}) ();

