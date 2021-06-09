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
        const {username} = req.session.user
        const {lat, lng} = req.body
        const position = db.positions.create_position(lat, lng, username)
        return res.status(200).send(position)
    },
    deletePosition: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.params, req.session.user)
        const {username} = req.session.user
        const {position_id} = req.params
        if(!username){
            return res.status(401).send('User not found.')
        }
        if(Number.isNaN(Number(position_id))){
            return res.status(500).send("Please specify which marker to delete.")
        }
        db.positions.delete_position(position_id, username)
        .then((positions) => {
            res.status(200).send(positions)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}