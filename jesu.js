import { readdirSync } from "fs";
import { Client, Collection } from "discord.js";
import { bot } from "./src/configs/settings.js";


const client = new Client({
    intents:[
        'Guilds',
        "GuildMembers",
        "GuildMessages",
        "MessageContent",
        "DirectMessageReactions",
        "DirectMessages",
        "DirectMessageTyping"
    ]
})

// Collection
client.commands = new Collection()

// Event Loader
readdirSync('./src/events/').forEach(async file => {
    const event = await import(`./src/events/${file}`).then(e => e.default)
    event(client)
})


// Command Handler
readdirSync('./src/commands/').forEach(category => {
    readdirSync(`./src/commands/${category}`).forEach(async file => {
        const command = await import(`./src/commands/${category}/${file}`)
        client.commands.set(command.data.name, command)
    })
})


client.login(bot.token).then(() => { console.log('Oyun botu aktif <3') }).catch(err => { console.log(`Bir hata ile karşılaşıldı Hata: ${err}`) })