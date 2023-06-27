import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Home.css';
import Swal from 'sweetalert2';


function Home2() {
    const [users, setUser] = useState([]);
    const [value, setValue] = useState("");
    const [sortValue, setSortValue] = useState("");


    const sortOptions = ["firstName" , "lastName","email"];
    useEffect(() => {
        loadUsers();

    }, [])

    const loadUsers = async () => {
        return await axios
            .get("http://localhost:3003/users")
            .then((response) => setUser(response.data.reverse()))
            .catch((err) => console.log(err));
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            showConfirmButton: false,
            timer: 1500,
        });
    }

    const handleReset = () => {
        loadUsers();
    }; 

    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios
        .get(`http://localhost:3003/users?q=${value}`)
        .then((response) => {
            setUser(response.data.reverse())
            setValue("");
        })
        .catch((err) => console.log(err));
    };

    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value);
        return await axios
        .get(`http://localhost:3003/users?_sort=${value}&_order=asc`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((err) => console.log(err));
    };
    
    return (
        <>
            <Navbar />
            <div className="containers">
            <div className="py-4">
                <div style={{ padding: "20px 0px" }}>
                    <h1 >Manage Medical Records</h1>
                    <Link to='/adduser' className='btn btn-outline-primary'>Add Record</Link>
                    <div>
                        <form style={{
                            float: "left",
                            margin: "auto",
                            padding: "10px 0px",
                            maxWidth: "400px",
                            alignContent: "center",

                        }}
                            onSubmit={handleSearch}>
                            <input style={{width:"300px"}}
                                type="text"
                                className='form-control'
                                placeholder="Search First Name..."
                                value={value}
                                onChange={(e) => setValue(e.target.value)} 
                                />
                            
                            <div>
                                <button className="btn btn-primary my-2"  type='submit' color="dark">Search</button>
                                <button className="btn btn-secondary mx-2 " color="info" onClick={() => handleReset()} >Reset Record</button>
                            </div>
                        </form>
                    </div>

                </div>
                <table className="table border shadow" style={{ fontSize: "22px" }}>
                    <thead className="thead-dark" style={{ height: "65px", backgroundColor: "#352f2f", color: "white" }}>
                        <tr>
                            <th scope="col">Sno.</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">HashCode</th>
                            <th className='text-center' style={{ fontSize: "22px" }}>Action</th>
                        </tr>
                    </thead>
                    {users.length === 0 ? (
                        <tbody style={{ fontFamily: 'Roboto Condensed' }}>
                            <tr>
                                <td  style={{textAlign:"center"}}>No Data Found</td>
                            </tr>
                        </tbody>
                    ) : (
                        users.map((user, index) => (
                            <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.hashcode}</td>
                                    <td style={{ width: "295px" }}>
                                        <Link style={{ margin: "0px 15px" }} className="btn btn-primary mr-2" to={`/user/${user.id}`} >View</Link>
                                        <Link style={{ margin: "0px 15px" }} className="btn btn-outline-primary mr-2" to={`/editusers/${user.id}`}> Edit</Link>
                                        <Link style={{ margin: "0px 15px" }} className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    )}

                </table>
            </div>
            <tbody>
                <h5>Sort By:</h5>
                <select 
                style={{width:"200px", borderRadius:"2px", height:"70px"}}
                onChange={handleSort}
                value={sortValue}
                ><option>Please Select Options:</option>
                {sortOptions.map((item,index) => (
                    <option value={item} key={index}>
                        {item}
                    </option>
                ))}
                </select>
                
            </tbody>

        </div >
        </>
    )
}


export default Home2;