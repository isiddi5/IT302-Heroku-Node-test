const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'poop');

hmac.update('password');
console.log(hmac.digest('hex'));

const hmacs = crypto.createHmac('sha256', 'poops');

hmacs.update('password');
console.log(hmacs.digest('hex'));

function isValid(Username, Password){
    const hmac = crypto.createHmac('sha256', 'poop');
    hmac.update('password');
    console.log(hmac.digest('hex'));
}

// Prints:
//   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e