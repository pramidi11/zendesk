const menus = {
    main:
    `zendesk [command] <options>

    user .............. show users with Id
    ticket ............ show ticket with  Id
    help ............... show help menu for a command,

    --user, -u ..... _id of the user
    --ticket, -t ..... _id of the ticket `
}

module.exports = () => {
    console.log(menus.main)
}