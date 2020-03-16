const express = require(`express`)

let user = require('../models/user')
const validation = require('./validation')
const router = express.Router()

//user insert route
router.route('/insert').post((req, res) => {

    const newUser = new user(req.body);
    
    if (validation(newUser, res)) {
        //save value in database
        newUser.save()
            .then((result) => {
                res.status(200).json('user Added')
            })
            .catch((err) => {
                res.status(400).json(err + 'Unable to add data')
            });
    }

});

//user search route
router.route('/search?').get((req, res) => {

    // created reguler expression object to search in side fields
    let userInput = new RegExp(req.query.userInput);

    let query = {
        "$or": [
            {
                "firstname": userInput
            },
            {
                "lastname": userInput
            },
            {
                "email": userInput
            }
        ]
    }

    user.find(query)
        .then(users => {
            //log for finding user in table
            if (users.length > 0) {
                console.log('User Find In Database')
                res.status(200).send(users)
            } else {
                console.log('User Not In Database')
                //204 means request made successfullt but no content found
                res.status(204).send('User Not In Database')
            }            
        })
        .catch(err => {
            res.status(400).json('Something Wrong With User Input Field' + err)
        })
})

module.exports = router