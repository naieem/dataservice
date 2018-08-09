var apiService = require('../services/api.service');
module.exports = {
    generateData: function() {
        return new Promise((resolve, reject) => {
            apiService.generateData().then((response) => {
                debugger;
                resolve(response);
            }, (error) => {
                reject(reject);
            });
        });
    }
}