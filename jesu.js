import { readdirSync } from "fs";
import { Client } from "discord.js";
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



// Event Loader
readdirSync('./src/events/').forEach(async file => {
    const event = await import(`./src/events/${file}`)
    event(client)
})





client.login(bot.token).then(() => { console.log('Oyun botu aktif <3') }).catch(err => { console.log(`Bir hata ile karşılaşıldı Hata: ${err}`) })