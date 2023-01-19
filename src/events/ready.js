import { ActivityType } from "discord.js";
import { bot } from "../configs/settings.js";
import check_commands from '../utils/check_commands.js'

export default (client) => {

    client.once('ready', () => {
        client.user.setPresence({
            activities: [{ name: bot.activty, type: ActivityType.Watching }],
            status: bot.status,
        });
        check_commands(client)

    })


}