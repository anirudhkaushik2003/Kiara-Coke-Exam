const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Balance = require('../../schemas/balance');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scoreboard')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        // inside a command, event listener, etc.
        const balanceProfile = await Balance.find();
        var item = [];
        balanceProfile.forEach(member => {
            item.push(member);
        });
        var j = 1;
        const exampleEmbed = new MessageEmbed()
            .setColor('0x109319')
            .setTitle('Hacking Club Leaderboard')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Hacking Club IIIT-H', iconURL: 'https://media.discordapp.net/attachments/872162798136885248/872357628938956810/six1.png', })
            .setDescription('Your rank is based on your scores')
            .setThumbnail('https://cdn.discordapp.com/attachments/874265603723108393/875335506970423296/morse_lock_vertical_green_thicc.png')
            .setTimestamp()
            .addFields({ name: 'ID', value: `\u200B`, inline: true }, { name: 'Ethereum', value: `\u200B`, inline: true }, { name: 'Score', value: `\u200B`, inline: true }, );

        var i = (6 * (j - 1))
        for (it of item) {
            if (i <= 6 * j) {
                console.log(it.memberId, it.score, it.ethereum);
                exampleEmbed.addFields({ name: String(it.memberName), value: `\u200B`, inline: true }, { name: String(it.ethereum), value: `\u200B`, inline: true }, { name: String(it.score), value: `\u200B`, inline: true }, );
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
        await interaction.reply("working on it...");
        await interaction.editReply({ ephermal: true, embeds: [exampleEmbed], components: [row] });
    },
};