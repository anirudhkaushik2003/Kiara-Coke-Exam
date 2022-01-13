const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies'),
    async execute(interaction) {
        choices = ["what do you want, _bitch_", "what", "who said you can talk to me", "sup", "hey", "yo", "fkin watch rick and morty or something", "can u repair sinks?", "69 is the sex number", "hello bitch", "ew!, you have a face even 2 mothers can't love bitch", "i say bitch a lot bitch", "how u like them apples _bitch_"];
        var index = Math.floor(Math.random() * choices.length);
        await interaction.reply(choices[index]);
    },
};