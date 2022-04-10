var fs = require('fs');

module.exports.set = function(app){
    const read = function(req, res, next){
        var body = fs.readFileSync("resources/data.json").toString('utf-8')
        res.locals.obj = body
        next()
    };
    
    app.use(read);    
    
    app.get('/data_vis', function(req, res){
        res.render("dataVis", {data: res.locals.obj});
        //res.render("dataVis");
    });
};