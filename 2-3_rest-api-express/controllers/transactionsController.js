const { getAllTransactions }  = require("../models/transactions");
const transfer = require("../service/transfers");

const get_transactions = (req, res) => {
    res.status(200).send(getAllTransactions());
}

const add_transactions = (req, res) => {
    try {
        const { sourceAccount, destinationAccount, amount } = req.body;
        if (!sourceAccount || !destinationAccount || !amount) {
            throw new Error('Invalid parameter');
        }

        transfer(sourceAccount, destinationAccount, amount);
        res.status(201).json({ message: "Transaction created successfully"});
    } catch (e) {
        res.status(400).json({ message: e.message});
    }
};

module.exports = {
    add_transactions, get_transactions
};

