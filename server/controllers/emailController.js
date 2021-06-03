module.exports = {
    addEmail: async (req, res) => {
        const db = req.app.get('db')
        const {email} = req.body
        db.email.post_email(email).then(emails => {
            res.status(200).send(emails)
        })  
    }
}