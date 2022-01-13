const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription('Asks your favourite color'),
    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('color-select')
                .setPlaceholder('Nothing is selected')
                .setMinValues(1)
                .setMaxValues(2)
                .addOptions([{
                        label: "Red",
                        description: "Your fav color is red.",
                        value: `red`
                    },
                    {
                        label: "Blue",
                        description: "Your fav color is blue.",
                        value: `blue`
                    },
                    {
                        label: "Green",
                        description: "Your fav color is Green.",
                        value: `Green`
                    },
                    {
                        label: "yellow",
                        description: "Your fav color is yellow.",
                        value: `yellow`
                    },
                    {
                        label: "orange",
                        description: "Your fav color is orange.",
                        value: `orange`
                    },
                ])
            );

        await interaction.reply({ content: `What is your fav color?`, components: [row] });
    },
};