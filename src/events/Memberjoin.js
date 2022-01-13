module.exports = {
    name: 'guildMemberAdd',
    async execute() {
        var role = interaction.guild.roles.cache.find(role => role.name === "script_kiddie");
        client.roles.add(role)
        console.log("client")
    },
};