const router = require('express').Router();
let db = require("../db/db.json");

router.get('/api/notes', (req, res) => {
    res.json(db)
})

router.post('/api/notes', (req, res) => {
    req.body.id = db.length.toString();
    db.push(req.body)
    res.json(db)
    console.log('notes');
})

module.exports = router