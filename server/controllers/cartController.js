module.exports = {
    getCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        if(!user){
            return res.status(511).send("User not found. Please log in.")
        }
        db.cart.get_the_items(user.cart_id).then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    addToCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        if(!user){
            return res.status(511).send("User not found. Please log in.")
        }
        db.cart.add_the_item(user.cart_id, product_id).then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteProductInCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        if(!user){
            return res.status(511).send("User not found. Please log in.")
        }
        db.cart.delete_the_item(user.cart_id, product_id).then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    updateTheItems: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        const {quantity} = req.body
        if(!user){
            return res.status(511).send("User not found. Please log in.")
        }
        db.cart.update_the_item(user.cart_id, product_id, quantity).then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}