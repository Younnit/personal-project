const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [result] = await db.auth.scan_email(email)
        if(result){
            return res.status(406).send('Email already in use. Please try a different email.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.auth.register_email(email, hash)
        // const [cart] = await db.cart.new_cart(user.user_id)
        delete user.password
        req.session.user = user
        // req.session.user.cart_id = cart.cart_id
        return res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await db.auth.scan_email(email)
        if(!user){
            return res.status(401).send('That email is not in use. Please try again.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send('Incorrect password')
        }
        // const [cart] = await db.cart.get_cart(user.user_id)
        delete user.password
        req.session.user = user
        // req.session.user.cart_id = cart.cart_id
        return res.status(200).send(req.session.user)
    },
    logout: async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}