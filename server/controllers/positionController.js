module.exports = {
    getPositions: async (req, res) => {
        const db = req.app.get('db')
        db.positions.get_positions().then(positions => {
            res.status(200).send(positions)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    createPosition: async (req, res) => {
        const db = req.app.get('db')
        const {lat, lng, username, time} = req.body
        const position = db.positions.create_position(lat, lng, username, time)
        return res.status(200).send(position)
    },
    deletePosition: async (req, res) => {

    }
}