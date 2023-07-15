const { generateRandomId } = require("../utils/utils");

let transactions = [
    {
        transactionsId: '98765432',
        sourceId: '12345',
        destinationId: '67890',
        amount: 5.0,
        timestamp: '2023-07-14T00:00:00.000Z'
    }
]

const getAllTransactions = () => {
    return transactions;
}

const createTransactions = (sourceId, destinationId, amount) => {
    let newTransfers = 
        {
            transactionsId: generateRandomId(),
            sourceId: sourceId,
            destinationId: destinationId,
            amount: amount,
            timestamp: new Date().toISOString()
        }
    
    transactions.push(newTransfers);
    return transactions;
}

module.exports = {
    createTransactions, getAllTransactions
};