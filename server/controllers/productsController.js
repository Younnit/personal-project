module.exports = {
    getTheProducts: (req, res) => {
        const db = req.app.get('db')
        db.products.get_the_products().then(products => {
            console.log(products)
            res.status(200).send(products)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}