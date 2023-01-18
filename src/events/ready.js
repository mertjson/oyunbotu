import { ActivityType } from "discord.js";
import { bot } from "../configs/settings.js";

export default (client) => {

    client.on('ready', () => {
        client.user.setPresence({
            activities: [{ name: bot.activty, type: ActivityType.Watching }],
            status: bot.status,
        });
    })

}