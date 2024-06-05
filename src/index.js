
require('dotenv').config();
const {Client, IntentsBitField}=require("discord.js");

const client= new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,//access discord member
        IntentsBitField.Flags.MessageContent,//read messages
        IntentsBitField.Flags.GuildMessages,//listen to messages
    ]
});

client.on('ready',(c)=>{
    console.log(`✔✔ <-- ${c.user.tag} is online --> ✔✔`);
});

client.on('messageCreate', (msg)=>{
    if(msg.content==="Hi"){
        msg.reply("Hello I am your lovely bot");
    }
    //REPLICATE THE ABOVE FOR THE SAME
});

client.on('interactionCreate', (interaction)=>{
    if(!interaction.isChatInputCommand())return;

    if(interaction.commandName==='hey'){
        interaction.reply("Hey");
    }

    if(interaction.commandName==='sum'){
        const num1= interaction.options.get('first-no').value;//set ? for optionality
        const num2= interaction.options.get('second-no').value;
        const num3= interaction.options.get('third-no').value;
        interaction.reply(`The sum of three number is ${num1+num2+num3}`);
    }
});

client.login(process.env.TOKEN);