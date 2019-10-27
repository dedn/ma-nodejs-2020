/**
 * Task 2
 *
 */

const user = {
    firstName: 'test',
    lastName: 'Doe',
    rate: 0.3,
    address: {
        line1: '15 Macon St',
        line2: '',
        city: 'Gotham'
    },
    phoneNumbers: [
        {
            type: 'MOBILE',
            number: '(555) 555-1234'
        },
        {
            type: 'LINE',
            number: '(555) 555-5678'
        }
    ]
};

let checkingPhoneNumber = (objects) => {
    const MOBILE = 'MOBILE ';
    const LINE = 'LINE';
    const VOIP = 'VOIP';
    const PHONEREG = /^\(([0-9]{3})\)[ ]([0-9]{3})[-]([0-9]{4})$/;

    return objects.every(obj => obj.type === MOBILE || LINE || VOIP && PHONEREG.test(obj.number));
};

let checkField = (obj) => {
    if (
        typeof obj.firstName === 'string' &&
        typeof obj.lastName === 'string' &&
        typeof obj.rate === 'number' &&
        obj.rate >= 0 && obj.rate <= 1 &&
        obj.address && Object.keys(obj.address).length > 0 &&
        obj.address != null &&
        Object.keys(obj.address).every(x => typeof(obj.address[x]) === 'string') &&
        obj.phoneNumbers.length >= 1 &&
        checkingPhoneNumber(obj.phoneNumbers)

    ) {
        console.log('true');
    } else {
        console.log('false');
    }
};

checkField(user);
