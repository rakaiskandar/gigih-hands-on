const generateRandomId = () => {
    return Math.random().toString(10).substring(2,10);
}

module.exports = {
    generateRandomId
}