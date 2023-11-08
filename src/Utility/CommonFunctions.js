import { SMTPClient } from "emailjs";


function sendEmail(toEmail, toMessage, sendDocument){
    
    const client = new SMTPClient({
        user: "",
        password: "",
        host: "",
        ssl: true
    })

    client.send({
        text: toMessage,
        from: 'roshan.rks2812000@gmail.com',
		to: toEmail,
		subject: 'Your Project Report Is Here!',
    },
    (err, msg)=>{
        console.log(err || msg)
    })

}

module.exports = {sendEmail}