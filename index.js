const minimist = require('minimist')

module.exports = () => {
  console.log('Welcome to the zendesk!')

  const args = minimist(process.argv.slice(2))

  let cmd = args._[0]

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  if (args.user || args.u) {
    cmd = 'user'
  }

  if (args.ticket || args.t) {
    cmd = 'ticket'
  }

  switch (cmd) {
    case 'help':
      require('./input/help')()
      break
    case 'version':
      require('./input/version')(args)
      break
    case 'user':
      require('./input/users')(args)
      break
    case 'ticket':
      require('./input/tickets')(args)
      break
    default:
      console.log('Please enter zendesk --help or -h for using this cli')
      break
  }

}