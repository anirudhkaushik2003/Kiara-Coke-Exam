var j = 1;
const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Balance = require('../schemas/balance');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {

        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else if (interaction.isSelectMenu()) {
            if (interaction.customId == "color-select") {
                let colours = "";
                await interaction.values.forEach(async value => {
                    colours += `${value} `
                });
                await interaction.reply({ content: `${colours} is/are a fkin bich ass colour(s)` });
            }
        } else if (interaction.isButton()) {
            if (interaction.customId.includes('-scoreboard')) {
                j = 1;
                if (interaction.customId.includes('forward')) {
                    await interaction.message.delete();
                    const exampleEmbed = new MessageEmbed()
                        .setColor('0x109319')
                        .setTitle('Hacking Club Leaderboard')
                        .setURL('https://discord.js.org/')
                        .setAuthor({ name: 'Hacking Club IIIT-H', iconURL: 'https://media.discordapp.net/attachments/872162798136885248/872357628938956810/six1.png', })
                        .setDescription('Your rank is based on your scores')
                        .setThumbnail('https://cdn.discordapp.com/attachments/874265603723108393/875335506970423296/morse_lock_vertical_green_thicc.png')
                        .setTimestamp()
                        .addFields({ name: 'ID', value: `\u200B`, inline: true }, { name: 'Ethereum', value: `\u200B`, inline: true }, { name: 'Score', value: `\u200B`, inline: true },);


                    const balanceProfile = await Balance.find();
                    var item = [];
                    balanceProfile.forEach(member => {
                        item.push(member);
                    });
                    j += 1;
                    var i = (6 * (j - 1));

                    while (item[i]) {
                        if (i <= 6 * j) {
                            exampleEmbed.addFields({ name: String(item[i].memberName), value: `\u200B`, inline: true }, { name: String(item[i].ethereum), value: `\u200B`, inline: true }, { name: String(item[i].score), value: `\u200B`, inline: true },);
                            i += 1;
                        } else {
                            break;
                        }
                    }
                    const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId(`backward-scoreboard`)
                                .setEmoji("◀️")
                                .setStyle("PRIMARY"),

                            new MessageButton()
                                .setCustomId(`forward-scoreboard`)
                                .setEmoji("▶️")
                                .setStyle("PRIMARY"),
                        );

                    await interaction.message.channel.send({ ephermal: true, embeds: [exampleEmbed], components: [row] });
                } else if (interaction.customId.includes('backward')) {
                    await interaction.message.delete();
                    const exampleEmbed = new MessageEmbed()
                        .setColor('0x109319')
                        .setTitle('Hacking Club Leaderboard')
                        .setURL('https://discord.js.org/')
                        .setAuthor({ name: 'Hacking Club IIIT-H', iconURL: 'https://media.discordapp.net/attachments/872162798136885248/872357628938956810/six1.png', })
                        .setDescription('Your rank is based on your scores')
                        .setThumbnail('https://cdn.discordapp.com/attachments/874265603723108393/875335506970423296/morse_lock_vertical_green_thicc.png')
                        .setTimestamp()
                        .addFields({ name: 'ID', value: `\u200B`, inline: true }, { name: 'Ethereum', value: `\u200B`, inline: true }, { name: 'Score', value: `\u200B`, inline: true },);


                    const balanceProfile = await Balance.find();
                    var item = [];
                    balanceProfile.forEach(member => {
                        item.push(member);
                    });
                    if (j > 0) {
                        j -= 1;
                    }
                    var i = (6 * (j - 1));

                    while (item[i]) {
                        if (i <= 6 * j) {
                            exampleEmbed.addFields({ name: String(item[i].memberName), value: `\u200B`, inline: true }, { name: String(item[i].ethereum), value: `\u200B`, inline: true }, { name: String(item[i].score), value: `\u200B`, inline: true },);
                            i += 1;
                        } else {
                            break;
                        }
                    }
                    const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId(`backward-scoreboard`)
                                .setEmoji("◀️")
                                .setStyle("PRIMARY"),

                            new MessageButton()
                                .setCustomId(`forward-scoreboard`)
                                .setEmoji("▶️")
                                .setStyle("PRIMARY"),
                        );

                    await interaction.message.channel.send({ ephermal: true, embeds: [exampleEmbed], components: [row] });
                } else if (interaction.customId.includes('primary')) {
                    await interaction.reply({ content: `Colour Danger: #5865F2` });

                }
            }
        }
    },
}