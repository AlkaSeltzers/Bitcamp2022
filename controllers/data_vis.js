var fs = require('fs');


exports.middleWare = function(req, res, next){
    var body = fs.readFileSync("resources/data.json").toString('utf-8')
    var obj = JSON.parse(body)
    res.locals.obj = obj
    next()
};

module.exports.set = function(app){
    app.get('/data_vis', function(req, res){
        res.render("dataVis", {data: "hello"});
        //res.render("dataVis");
    });
};