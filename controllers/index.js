var homepage = require('./homepage');
var data_vis = require('./data_vis');

module.exports.set = function(app){
    homepage.set(app);
    data_vis.set(app);

};