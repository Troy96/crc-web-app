module.exports = {
    transportConfig: {
        service: 'gmail',
          auth: {
            user: process.env.MAILER_USERNAME,
            pass: process.env.MAILER_PASSWORD
        }
    }
}