const { generateRandomId } = require("../utils/utils");

let customers = [
    {
        customerId: '12345',
        name: 'Ahmad Joni',
        email: 'ahmadjoni@gmail.com',
        balance: 5000.00
    },
    {
        customerId: '67890',
        name: 'John da',
        email: 'johnda@example.com',
        balance: 5000.00
    }
];

const getAllCustomers = () => {
    return customers;
}

const getCustomers = (customerId) => {
    return customers.find((c) => c.customerId === customerId);
}

const createCustomers = (name, email, balance) => {
    let newCustomers = 
        {
            customerId: generateRandomId(),
            name: name,
            email: email,
            balance: balance
        }
    customers.push(newCustomers);
    return newCustomers;
}

module.exports = {
    getAllCustomers, getCustomers, createCustomers
}
