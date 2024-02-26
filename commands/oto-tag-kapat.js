const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-tag-kapat",
    description: '💙 Oto-tag sistemini kapatırsın!',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageNicknames)) return interaction.reply({content: "<:x_:1211729272364990465> | İsimleri Yönet Yetkin Yok!", ephemeral: true})
    db.delete(`ototag_${interaction.guild.id}`)
    interaction.reply({content: "<:tik1:1211728664123674734> | Başarıyla sistemi sıfırladım!"})
}

};
