const users = require('../users.json');
const tickets = require('../tickets.json');

module.exports = (userid) => {
    const id = userid.u || userid.user
    console.log(`Searching user with tickets for _id ${id}`);
    let user = users.filter((u) => u._id==id);
    if(user.length<1) {
        console.log('No users found')
        return []
    }
    const ticketsList = tickets.filter((ticket) => ticket.assignee_id==id);
    let subject=[];
    ticketsList.forEach(t => subject.push(t.subject))
    user[0].subject = [...subject]
    console.log(user[0])
    return user[0];
}