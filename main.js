const Discord = require('discord.js')
const client = new Discord.Client()

const { token, prefix } = require('./info.json')

let embed = new Discord.MessageEmbed() // sets embed defaults
  .setColor('#ff00f3')

client.on('ready', () => {
  console.log(`Bot as ${client.user.tag}`)
})

client.on('message', msg => {
  if (msg.author === client.user) {return}

  const channel = msg.channel

  if (msg.content === 'Another Bot' || msg.mentions.has(client.user)) {
    embed.setTitle('Help')
    embed.addField('Prefix', `The prefix is \`${prefix}\``)
    channel.send(embed)
    embed.fields = []
  }

  if (msg.content.startsWith(prefix)) {
    if (msg.content === prefix) {
      embed.setTitle('Error')
      embed.addField('No command', `Try \`${prefix}help\` to learn more`)
      channel.send(embed)
      embed.fields = []
    }

    let withoutPrefix = msg.content.slice(1)
    let inputAsArray = withoutPrefix.split(' ')
    let cmnd = inputAsArray[0]
    let args = inputAsArray.splice(0, 1)

    if (cmnd === 'help') {
      embed.setTitle('Help')
      embed.addFields(
        { name: 'Here are the commands', value: '> help \n> ' },
        { name: 'When you forget the prefix', value: '> Ping the bot or \n> type it\'s name'},
        { name: 'Contact the dev', value: 'don\'t' }
      )
      channel.send(embed)
      embed.fields = []
    }
  }
})

client.login(token)
