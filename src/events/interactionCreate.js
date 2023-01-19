export default (client) => {

    client.once('interactionCreate', (interaction) => {

        if(!interaction.isCommand()) return
        
        const command = client.commands.get(interaction.commandName)

        if(!command) return

        

        try {
            command.data.execute(interaction)
        } catch (e) {
            console.log(e);
        }
    })


}