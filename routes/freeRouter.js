const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const auth = require('../controllers/authController')

router.get('/', auth, (req,res)=>{
    res.send('content visible for all logged users (does not need to be admin)')
})

module.exports = router