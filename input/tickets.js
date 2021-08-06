const users = require('../users.json');
const tickets = require('../tickets.json');

module.exports = (ticketId) => {
    const id = ticketId.t || ticketId.ticket
    console.log(`Searching tickets for ticket _id ${id}`);
    let ticket = tickets.filter((t) => t._id===id);
    if(ticket.length<1) {
        console.log('No tickets found')
        return []
    }
    const user = users.filter((u) => u._id===ticket[0].assignee_id)
    ticket[0].assigee_name=user[0].name
    console.log(ticket[0])
    return ticket[0];
}