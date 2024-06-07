
require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType}=require('discord.js');

const commands=[
    {
        name:'hey',
        description: 'Replies with HELLO',
    },
    {

        name:'qrcode',
        description: 'Generates',
        options:[ {
            name: 'qrtext',
            description: 'Enter Text to generate QR code',
            type: ApplicationCommandOptionType.String,
            required: true,
        }],
    },
    {
        name:'sum',
        description: 'sum of three number is returned',
        options: [
            {
                name:'first-no',
                description:'first number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name:'One',
                        value: 1,
                    },
                    {
                        name:'Two',
                        value:2,
                    }
                ],
                required: true,
            },
            {
                name:'second-no',
                description:'second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name:'third-no',
                description:'Third number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
    },
];

const rest= new REST({ version: '10'}).setToken(process.env.TOKEN);//to access REST

(async()=> {
    try{
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID,
            ),
            {body: commands}
        );
        console.log('Slash Commands were registered Successfully !@!@!');
    }catch(error) {
        console.log(`Ther was an error:${error}`);
    }
})();