const accountsData = require("./data/accounts.json");
const cardsData = require("./data/cards.json");
const customersData = require("./data/customers.json");

module.exports = {
    searchCustomerById (id) {
        console.log('searching for customer by id', id)
        return customersData[id];
    },
    
    searchCardsByCustomerId(id) {
        console.log('searching for cards by customer id', id)
        return cardsData[id];
    },

    searchAccountsByCustomerId(id) {
        console.log('searching for accounts by customer id', id)
        return accountsData[id];
    }
}