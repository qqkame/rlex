const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"resimli-giriş-çıkış",
    description: '💙 Resimli Giriş Çıkış Sistemini Ayarlarsın!',
    type:1,
    options: [
        {
            name: "kanal",
            description: "Giriş çıkış kanalını ayarlarsın!",
            type: 7,
            required: true,
            channel_types: [0]
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "<:x_:1211729272364990465> | Kanalları Yönet Yetkin Yok!", ephemeral: true})
    const kanal2 = interaction.options.getChannel('kanal')
    db.set(`canvaskanal_${interaction.guild.id}`, { channel: kanal2.id, } )
   interaction.reply("<:tik1:1211728664123674734> | Resimli Giriş Çıkış Kanalı Başarıyla <#"+kanal2+"> Olarak Ayarlandı!")
}

};
