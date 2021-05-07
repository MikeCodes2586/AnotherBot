let HELP = {
  title: 'Help',
  fields: [
    { name: 'userCheck General', value: '> joined \n> created \n> id \n> pfp \n> tag \n> nick', inline: true },
    { name: 'userCheck States', value: '> typing \n> voicestate \n> roles', inline: true },
    { name: 'userCheck Permissions', value: '> banable \n> kickable \n> manageable \n> permissions \n> permsIn', inline: true },
    { name: 'When you forget the prefix', value: '> Type it\'s name', inline: true },
    { name: 'Contact the dev', value: 'don\'t' }
  ]
}

let USER_CHECK_ARGS_LENGTH_ERROR = {
  title: 'Error',
  fields: [
    { name: 'UserCheck Arguments', value: 'Not enough arguments \nTry `·userCheck [view ·help/userCheck] [target user id] [only with permsIn: target channel id]`' }
  ]
}

let USER_ID_NOT_FOUND_ERROR = {
  title: 'Error',
  fields: [
    { name: 'User not found', value: 'The provided ID didn\'t resolve to a known user \nTry `·userCheck [view ·help/userCheck] [target user id] [only with permsIn: target channel id]`' },
    { name: 'What may have happened', value: '> User isn\'t on a server with the bot \n> Wrong ID' }
  ]
}

module.exports = { HELP, USER_CHECK_ARGS_LENGTH_ERROR, USER_ID_NOT_FOUND_ERROR }
