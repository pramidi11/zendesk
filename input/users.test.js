const userTest = require('./users')

describe('users tests', () => {
    it('should return matching users', function () {
        const expected = {
            "_id": 24,
            "created_at": "2016-03-02T03:35:41-11:00",
            "name": "Harris Côpeland",
            "subject": [
                "A Catastrophe in Korea (North)",
                "A Catastrophe in Belize",
                "A Nuisance in Macedonia",
                "A Nuisance in Tajikistan"
            ],
            "verified": false
        }
        const ticket = userTest({user:'24'})
        expect(ticket).toStrictEqual(expected)
    });

    it('should return no user', function () {
        const ticket = userTest({ticket:'foo'})
        expect(ticket).toStrictEqual([])

    });
})