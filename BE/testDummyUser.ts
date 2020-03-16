export const testFullDummyUser = {
    "firstname": "test3",
	"middlename": "test3",
	"lastname": "test3",
	"email": "test3@test.com",
	"mobile": "1234567892",
	"address": "test test test",
	"city": "ahmedabad",
	"state": "guj",
	"postalcode": "123456",
	"education": "Graduate",
	"gender": "Male",
	"occupation": "Salaried"
}

//taken only reuired fields
export const testEmptyDummyUser = {
    "firstname": "",
	"lastname": "",
	"email": "",
	"mobile": ""
}

module.exports = {
	testFullDummyUser,
	testEmptyDummyUser
};