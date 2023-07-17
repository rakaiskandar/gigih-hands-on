const generateRandomId = () => {
    return Math.random().toString(10).substring(2, 12)
}

module.exports = {
    generateRandomId
};