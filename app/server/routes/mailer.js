var fs = require('fs');

module.exports = function handleMailer(req, res) {
    var file = 'app/server/data.json';
    var prevData = fs.readFileSync(file);
    var prevObj = JSON.parse(prevData);
    var obj = {
        name: req.body.name.value,
        email: req.body.email.value,
        message: req.body.message.value,
        time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') 
    };
    prevObj.visitors.push(obj);
    var data = JSON.stringify(prevObj, null, 2);
    console.log(data);
 
    fs.writeFileSync(file, data);
    res.json({info: "Success"});
}