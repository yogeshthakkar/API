import React, { useState } from 'react';
import axios from 'axios';

require('babel-polyfill');
require('./App.css');

/**
 * Validatoin for input fields
 */
function validateData(data) {
    if ((data === '') === false) {
        if (data.firstname === '') {
            return alert('Enter First Name')
        } if (data.lastname === '') {
            return alert('Enter Last Name')
        } if (data.email === '') {
            return alert('Enter Email')
        } if (!data.email.includes('@')) {
            return alert('Enter Valid Email Address.')
        } if (data.mobile === ' ') {
            return alert('Enter Mobile Number')
        } if (data.mobile.length !== 10) {
            return alert('Mobile Number Must be of 10 digits.')
        } if (data.postalcode === ' ') {
            return alert('Enter Postal Code')
        } if (data.postalcode.length !== 6) {
            return alert('Postal Code Must be of 6 digits.')
        } if (data.gender === '') {
            data.gender = 'Male'
        } if (data.occupation === '') {
            data.occupation = 'Other'
        }
    }

    return true;
}

function UserInsert() {
    const [data, setData] = useState({
        firstname: '', middlename: '', lastname: '', email: '', mobile: '', address: '', city: '',
        state: '', postalcode: '', education: '', gender: '', occupation: ''
    })

    const handleChange = (event) => {
        event.persist();
        const val = event.target.value;
        setData({
            ...data,
            [event.target.name]: val
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //spread data object value
        const {
            firstname, middlename, lastname, email, mobile, address, city, state, postalcode, education, gender, occupation
        } = data

        //combine in a object 
        const result = {
            firstname, middlename, lastname, email, mobile, address, city, state, postalcode, education, gender, occupation
        }

        //call to user define function
        if (validateData(result)) {
            console.log(result);
            axios.post('http://localhost:3001/insert', result)
                .then(res => {
                    return alert(`User inserted successfully`)
                })
                .catch(err => {
                    alert('Unabel to add User')
                    console.log(err);
                })
            // empty data ,so it won't create issue
            setData({
                firstname: '', middlename: '', lastname: '', email: '', mobile: '', address: '', city: '', state: '', postalcode: '', education: '', gender: '', occupation: ''
            })
        }
    }

    return (
        <div className="forFormBody">
            <form className="forForm">
                <label>First Name:</label><br />
                <input type="text" name="firstname" onChange={handleChange} value={data.firstname} className="Form-margin" pattern="/^[a-zA-Z\s]+$/" /><br />

                <label>Middle Name:</label><br />
                <input type="text" name="middlename" onChange={handleChange} value={data.middlename} className="Form-margin" pattern="/^[a-zA-Z\s]+$/" /><br />

                <label>Last Name:</label><br />
                <input type="text" name="lastname" value={data.lastname} onChange={handleChange} className="Form-margin" pattern="/^[a-zA-Z\s]+$/" /><br />

                <label>E-mail:</label><br />
                <input type="text" name="email" value={data.email} onChange={handleChange} className="Form-margin" /><br />

                <label>Mobile:</label><br />
                <input type="text" name="mobile" value={data.mobile} onChange={handleChange} className="Form-margin" maxLength="10" /><br />

                <label>Address:</label><br />
                <input type="text" name="address" value={data.address} onChange={handleChange} className="Form-margin" pattern="[a-zA-Z0-9]+" /><br />

                <label>City:</label><br />
                <input type="text" name="city" value={data.city} onChange={handleChange} className="Form-margin" /><br />

                <label>State:</label><br />
                <input type="text" name="state" value={data.state} onChange={handleChange} className="Form-margin" /><br />

                <label>Postal Code:</label><br />
                <input type="text" name="postalcode" value={data.postalcode} onChange={handleChange} className="Form-margin" maxLength="6"
                    pattern="/[0-9]+/" /><br />

                <label>Eduaction :</label><br />
                <select name="education" onChange={handleChange} className="Form-margin foroption">
                    <option value="none">None</option>
                    <option value="ten">10th</option>
                    <option value="twelve"> 12th</option>
                    <option value="graduate">Graduate</option>
                    <option value="postGraduate">Post Graduate</option>
                </select><br />

                <label>Gender :</label> <br />
                <select name="gender" onChange={handleChange} className="Form-margin foroption" >
                    <option value="male">Male</option>
                    <option value="female"> Female</option>
                </select><br />

                <label>Occuaption :</label> <br />
                <select name="occupation" onChange={handleChange} className="Form-margin foroption" >
                    <option value="other">Other</option>
                    <option value="Salaried">Salaried</option>
                    <option value="selfEmpoled"> Self Employed</option>
                </select><br />

                <button name='submit' onClick={handleSubmit} className="buttonStyle">Insert User</button>
            </form>
        </div>
    )
}

// module.exports = UserInsert;
export default UserInsert;