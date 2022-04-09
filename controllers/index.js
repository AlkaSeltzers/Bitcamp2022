var homepage = require('./homepage');
var data_vis = require('./data_vis');
var about = require('./about');

module.exports.set = function(app){
    homepage.set(app);
    data_vis.set(app);
    about.set(app);

};