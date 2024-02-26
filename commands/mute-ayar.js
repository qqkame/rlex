const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"mute-ayar",
    description: '💙 Mute ayarlarını yaparsın.',
    type:1,
    options: [
        {
            name:"rol",
            description:"Muteli rolünü ayarla!",
            type:8,
            required:true
        },
        {
            name:"yetkili",
            description:"Mute yetkilisini ayarla!",
            type:8,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:x_:1211729272364990465> | Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    const yetkili = interaction.options.getRole('yetkili')
    db.set(`rol_${interaction.guild.id}`, rol.id)
    db.set(`yetkili_${interaction.guild.id}`, yetkili.id)
    interaction.reply({content: "<:tik1:1211728664123674734> | Muteli rolü <@&"+rol+"> olarak ayarlandı, Yetkilisi ise <@&"+yetkili+"> olarak ayarlandı!"})
}

};