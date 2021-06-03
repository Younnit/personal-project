module.exports = {
    addEmail: async (req, res) => {
        const db = req.app.get('db')
        const {email} = req.body
        const [userEmail] = db.email.post_email(email)
        res.status(200).send(userEmail)
    }
}