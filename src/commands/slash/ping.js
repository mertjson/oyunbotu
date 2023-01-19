import { SlashCommandBuilder } from "@discordjs/builders";

export const data = {
    name:"ping",
    desc:"Test komutu",
    execute(interaction){
        interaction.deferReply()

        setTimeout(() => {
            interaction.editReply({content:'pong'})
            
        }, 5000);
    }
}

export const slash_data = new SlashCommandBuilder()
.setName(data.name)
.setDescription(data.desc)