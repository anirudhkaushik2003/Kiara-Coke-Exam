const { SlashCommandBuilder } = require('@discordjs/builders');
const Balance = require('../../schemas/balance');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Returns Info based on user\'s balance')
        .addSubcommand(subcommand =>
            subcommand
            .setName("user")
            .setDescription("Get Information of a user")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned"))),
    async execute(interaction, client) {
        let user = (interaction.options.getMember("target") ? interaction.options.getMember("target") : interaction.user);
        const balanceProfile = await client.createBalance(interaction.member);
        await interaction.deferReply();
        await interaction.editReply({ content: `${interaction.user.tag} has ${balanceProfile.ethereum} ethereum` })
    },
};