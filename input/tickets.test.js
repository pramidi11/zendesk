const ticketsTest = require('./tickets')

describe('ticket tests', () => {
    it('should return matching ticket', function () {
        const expected = {
            _id: '436bf9b0-1147-4c0a-8439-6f79833bff5b',
            created_at: '2016-04-28T11:19:34-10:00',
            type: 'incident',
            subject: 'A Catastrophe in Korea (North)',
            assignee_id: 24,
            tags: [
                'Ohio',
                'Pennsylvania',
                'American Samoa',
                'Northern Mariana Islands'
            ],
            assigee_name: 'Harris Côpeland'
        }
        const ticket = ticketsTest({ticket:'436bf9b0-1147-4c0a-8439-6f79833bff5b'})
        expect(ticket).toStrictEqual(expected)
    });

    it('should return no ticket', function () {
        const ticket = ticketsTest({ticket:'foo'})
        expect(ticket).toStrictEqual([])

    });
})