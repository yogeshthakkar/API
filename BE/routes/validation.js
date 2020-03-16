/**
    * validation for an api (postman)
    * code 422 = un processable entry
*/
function dataValidation(newUser, res) {
    if (newUser.firstname === '') {
        res.status(422).json('First Name can not be empty.')
    } if (newUser.lastname === '') {
        res.status(422).json('Last Name can not be empty.')
    } if ((newUser.mobile).toString().length !== 10) {
        res.status(422).json('Mobile Number should be of 10 digits.')
    } if (!newUser.email.includes('@') || !newUser.email.includes('.com')) {
        res.status(422).json('Please enter valid email address.')
    } if (newUser.address.toString().length > 100) {
        res.status(422).json('In Address You can not add more than 100 characters.')
    } if (newUser.city.toString().length > 25) {
        res.status(422).json('In City You can not add more than 25 characters.')
    } if (newUser.state.toString().length > 50) {
        res.status(422).json('In State You can not add more than 50 characters.')
    } if ((newUser.postalcode).toString().length !== 6) {
        res.status(422).json('Postal Code must be of 6 digits.')
    }
    return true;
}

module.exports = dataValidation