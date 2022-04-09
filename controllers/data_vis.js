module.exports.set = function(app){
    app.get('/data_vis', function(req, res){
        res.render("dataVis");
    });
};