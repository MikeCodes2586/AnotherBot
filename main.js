const Discord = require('discord.js')
const client = new Discord.Client()

const { token, prefix } = require('./info.json')
const { HELP, USER_CHECK_ARGS_LENGTH_ERROR, USER_ID_NOT_FOUND_ERROR } = require('./embedData.js')

let embed = new Discord.MessageEmbed() // sets embed defaults
  .setColor('#ff00f3')

client.on('ready', () => {
  console.log(`Bot as ${client.user.tag}`)
})

function makeEmbed(Command, channel, args) {
  embed.setTitle(Command.title)
  embed.fields = Command.fields
  channel.send(embed)
  embed.fields = []
}

client.on('message', msg => {
  if (msg.author === client.user) {return}

  const channel = msg.channel

  if (msg.content === 'Another Bot') {
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
    let args = inputAsArray.slice(1)

    if (cmnd === 'help') {
      makeEmbed(HELP, channel)
    } else if (cmnd === 'userCheck') {
      if (args.length === 0 || args.length === 1) {
        makeEmbed(USER_CHECK_ARGS_LENGTH_ERROR, channel)
        return
      }

      const user = msg.guild.members.cache.get(args[1])
      if (!user) {makeEmbed(USER_ID_NOT_FOUND_ERROR, channel); return}

      if (args[0] === 'joined') {
        embed.setTitle('Info')
        embed.fields = [
          { name: `${user.displayName} joined:`, value: `${user.joinedAt}` }
        ]
        channel.send(embed)
        embed.fields = []
      } else if (args[0] === 'created') {
        embed.setTitle('Info')
        embed.fields = [
          { name: `${user.displayName} created:`, value: `${user.user.createdAt}` }
        ]
        channel.send(embed)
        embed.fields = []
      }
    }
  }
})

client.login(token)
