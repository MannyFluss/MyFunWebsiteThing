import nodemailer from "nodemailer";
//have fun hacking this email
//a19fluesil@hotmail.com
//pass1234P??P4321ssap
//nated1356@gmail.com
const myHtmlMsg = `
    <h1>Hello Nathan</h1>
    <p>prepare for a hug</p>
`;
async function sendEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Host for Outlook/Hotmail
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'a19fluesil@hotmail.com',
            pass: 'pass1234P??P4321ssap'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });
    const mailOptions = {
        from: '"beep boop" <a19fluesil@hotmail.com>', // sender address
        to: 'manny.fluss@gmail.com', // change to 'test@gmail.com'
        subject: 'I see you', // Subject line
        text: 'Hello Nathan\nprepare for a hug', // plain text body
        html: myHtmlMsg // html body  
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    }
    catch (error) {
        console.error('Error sending email: ', error);
    }
}
sendEmail();
