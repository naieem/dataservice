var apiService = require('../services/api.service');
module.exports = {
    insert: function(req) {
        return new Promise(function(resolve, reject) {
            return apiService.insert(req).then(function(response) {
                debugger;
                resolve(response);
            }, function(error) {
                reject(error);
            });
        });
    },
    getAll: function() {

    }
}