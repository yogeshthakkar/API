import   * as React  from 'react';
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Alert,Table } from 'reactstrap';
import axios from 'axios';

import './App.css';
import 'babel-polyfill';

function UserSearch() {

    //for storing user result , which found from db
    const [data2, setData2] = useState([]);
    const [data, setData] = useState({
        userInput: ''
    });
    let found;
    // set user Input variable
    const handleChange = ( event ) => {
        event.persist();
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    //execute on button click
    const handleSearch = async ( event ) => {
        event.preventDefault();

        if (data.userInput === '') {
            return alert('Enter Something')
        }
        // go to database and check that data found or not        
        axios.get(`http://localhost:3001/search?userInput=${data.userInput}`)
            .then(res => {
                console.log(res);
                if (res.data.length !== 0) {
                    // set in data to print in table
                    setData2(res.data);
                    found = true;
                } else {
                    //Successful connected to table but no details found
                    found = false;
                    setData2(res.data)
                    return alert('No Details Found With Given Data...')
                }
            })
            .catch(err => {
                console.log('Wrong With Server...');
            })
    }

    return (
        <div>
            <form className="forForm">
                <label>Enter Details to search:</label><br />
                <input type="text" name="userInput" onChange={handleChange} value={data.userInput} className="Form-margin" /><br />

                <button onClick={handleSearch} className="buttonStyle">Search</button>
            </form>
            
                <Table hover dark style={{margin:'7.5px 380px' , width:'230px'}}>
                    <thead style={{ color: "white", fontSize: '30px' }}>
                        {
                            data2.length > 0 ?
                                <tr>
                                    <th style={{ textAlign: "center" }}>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                                : ''
                        }
                    </thead>
                    <tbody>
                        {
                            data2.map(d => (
                                <tr style={{ color: "white", fontSize: '30px' }} key={d.email}>
                                    <td>{d.firstname}</td>
                                    <td>{d.lastname}</td>
                                    <td>{d.email}</td>
                                </tr>
                            ))
                        }                             
                    </tbody>
                </Table>
        </div>
    )
}

// module.exports = UserSearch;
export default UserSearch;