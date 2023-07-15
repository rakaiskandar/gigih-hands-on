const { getCustomers } = require('../models/customers');
const { createTransactions } = require('../models/transactions');

const transfer = (sourceId, destinationId, amount) => {
    let sourceAccount = getCustomers(sourceId);
    let destinationAccount = getCustomers(destinationId);

    if (!sourceAccount.customerId || !destinationAccount.customerId) {
        throw new Error('Invalid source');
    }

    if (sourceAccount.balance < amount) {
        throw new Error('Insufficient balance');
    }

    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
    createTransactions(sourceAccount.customerId, destinationAccount.customerId, amount);
    return;
}

module.exports = transfer;