const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Returns Info based on input')
        .addSubcommand(subcommand =>
            subcommand
            .setName("user")
            .setDescription("Get Information of a user")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))
        .addSubcommand(subcommand =>
            subcommand
            .setName("server")
            .setDescription("Info about the server")),
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) {
                const userEmbed = new MessageEmbed()
                    .setColor("AQUA")
                    .setTitle(`${user.username}'s Information`)
                    .setAuthor({ name: 'Hacking Club IIIT-H', iconURL: 'https://media.discordapp.net/attachments/872162798136885248/872357628938956810/six1.png', })
                    .setDescription('Your rank is based on your scores')
                    .setThumbnail('https://cdn.discordapp.com/attachments/874265603723108393/875335506970423296/morse_lock_vertical_green_thicc.png')
                    .addFields({ name: `Username:`, value: `Username: ${user.username}`, inline: true }, { name: `\u200B`, value: `\u200B`, inline: true }, { name: `Tag`, value: `Tag: #${user.discriminator}`, inline: true }, )
                    .setTimestamp()
                    .setImage(user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed] });
            } else {
                const userEmbed = new MessageEmbed()
                    .setColor("AQUA")
                    .setTitle(`${interaction.user.username}'s Information`)
                    .setAuthor({ name: 'Hacking Club IIIT-H', iconURL: 'https://media.discordapp.net/attachments/872162798136885248/872357628938956810/six1.png', })
                    .setDescription('Your rank is based on your scores')
                    .setThumbnail('https://cdn.discordapp.com/attachments/874265603723108393/875335506970423296/morse_lock_vertical_green_thicc.png')
                    .addFields({ name: `Username:`, value: `Username: ${interaction.user.username}`, inline: true }, { name: `\u200B`, value: `\u200B`, inline: true }, { name: `Tag`, value: `Tag: #${interaction.user.discriminator}`, inline: true }, )
                    .setTimestamp()
                    .setImage(interaction.user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed] });
            }
        } else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`)
        } else {
            await interaction.reply("No sub command was used!");
        }
    },
};