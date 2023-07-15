const { getAllCustomers, createCustomers } = require('../models/customers');

const get_customers = (req, res) => {
    res.status(200).send(getAllCustomers());
}

const add_customers = (req, res) => {
    try {
        const { name, email, balance } = req.body;

        if (!name || !email || !balance) {
            throw new Error('Invalid parameter')
        }

        createCustomers(name, email, balance);
        res.status(201).json({ message: "New Customers Created Successfully"});
    } catch (e) {
        res.status(400).json({ message: e.message });        
    }
}

module.exports = {
    get_customers, add_customers
}