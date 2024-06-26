const express = require("express");
const userModel = require("../models/user");
const config = require('../../env.json');


const router = express.Router();

router.post("/", async (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json(["success", user.Token])
            } else {
                res.json(["incorrect", null])
            }
        } else {
            res.json(["notfound", null])
        }
    })
})


module.exports = router;