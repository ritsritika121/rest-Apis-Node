const sgMail = require('@sendgrid/mail')

const sendgridApiKey = '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'

sgMail.setApiKey(sendgridApiKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'ritika@mail.vinove.com',
        subject:'Welcome To The App',
        text:`Welcome to the App mr/ms. ${name} ,I hope this one actuallyget to you`
    })
}

module.exports = {
    sendWelcomeEmail
}


