import { REST } from '@discordjs/rest' 
import { Routes } from 'discord-api-types/v9'
import { bot } from '../configs/settings.js'

export default async (guild) => {
    const {client} = guild

    const rest = new REST({ version:'9' }).setToken(bot.token)

    const body = client.commands.map(command => command.slash_data)

    try {
        
        await rest.put(
            Routes.applicationGuildCommands(bot.id, bot.guild_id),
            { body }
        )
        
    } catch (e) {
        console.log(e);
    }
}