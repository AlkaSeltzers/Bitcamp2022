var fs = require('fs');


module.exports.set = function(app){
    const read = function(req, res, next){
        var body = fs.readFileSync("resources/data.json").toString('utf-8')
        res.locals.obj = body
        next()
    };
    
    app.use(read);    

    function getVars(req, res, next){
        res.locals.zipcode = req.query.zipcode;
        console.log(req.query.zipcode);
        next();
    }

    app.get('/data_vis', [getVars], function(req, res){
        console.log(res.locals.zipcode);
        res.render("dataVis", {data: res.locals.obj, zipcode:res.locals.zipcode});
        
        //res.render("dataVis");
    });

};


