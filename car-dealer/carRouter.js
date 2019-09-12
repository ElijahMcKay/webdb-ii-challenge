const require('express'); 
const db = require('../knexfile')

// setting up this particular route
const router = express.Router(); 


router.get('/', (req, res) => {
    db('car-dealer')
        .then(car => {
            res.status(200).json(car); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

router.post('/', (req, res => {
    db('car-dealer').insert(req.body)
        .then(car => {
            res.status(201).json(car); 
        })
        .catch(car => {
            res.status(500).json(car); 
        })
})) 