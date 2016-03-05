import mjml from 'mjml';
import nodemailer from 'nodemailer';
import First from './templates/First';
import Handlebars from "handlebars";

/*
  Compile an mjml string
*/
//const htmlOutput = mjml.mjml2html(First);
// console.log(FirstComponent);
// var firstComponent = React.createFactory(FirstComponent);
// console.log(firstComponent);
//const htmlOutput = ReactDOMServer.renderToStaticMarkup(<FirstComponent />);
const htmlOutput = First({people:["Sean", "Jack"]});

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('ENTER SMTP SERVER HERE');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"ENTER FROM EMAIL HERE', // sender address
    to: ['ENTER TO EMAIL HERE'], // list of receivers
    subject: 'MJML Test', // Subject line
    text: 'MJML Test', // plaintext body
    html: htmlOutput // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});