var nodemailer = require('nodemailer');

module.exports = function handleMailer(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'always.bollu@gmail.com', // Your email id
            pass: 'Scintin410' // Your password
        }
    });

    var text = req.body.message + '\n\n' + req.body.name + '\n' + req.body.email;

    var mailOptions = {
        from: 'always.bollu@gmail.com', // sender address
        to: 'manideep@msn.com', // list of receivers
        subject: 'Contacted by ' + req.body.name, // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
}