//urlshortener.js


module.exports = function(app){

    //get
    app.get('/', function(req, res){
        res.send('Hello_World');
    })
}
