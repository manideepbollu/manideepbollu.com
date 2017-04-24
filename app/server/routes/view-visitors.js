var fs = require('fs');

module.exports = function viewVisitors(req, res) {
    var file = 'app/server/data.json';
    var data = fs.readFileSync(file);
    var obj = JSON.parse(data);
    
    res.json(obj);
}