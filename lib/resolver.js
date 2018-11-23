const api = require('./api');

module.exports = {
    customer: (customerData) => {
        const { id } = customerData;
        console.log('Good =====');
        const customer = api.searchCustomerById(id);
        return {
            ...customer,
            accounts: () => api.searchAccountsByCustomerId(id),
            cards: () =>  api.searchCardsByCustomerId(id)
        }
    }
};