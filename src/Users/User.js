import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Users.css';
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Swal from 'sweetalert2';




const User = () => {
    const componentPDF = useRef();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        disease: "",
        symptoms: "",
        email: "",
        hashcode: "",
        doctor: "",
        dateofadd: "",
        dateofdis: "",
        remark: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documnentTitle: "Medical Records",
        onAfterPrint: () => Swal.fire({
            icon: 'success',
            title: 'Successfully Printed',
            showConfirmButton: false,
            timer: 1500
        })
    });


    return (
        <div className="container py-4">
            <div ref={componentPDF} style={{ width: "100%" }}>
                <h1 style={{ color: "blue", textAlign: "center", fontFamily: "monospace", fontWeight: "bold" }}>CITY HOSPITAL MEDICAL RECORDS</h1>
                <p2 style={{ display: "block", color: "black", width: "40%", margin: "10px auto" }}>The Rights of Medical Records are Reserved by the City Hospital @2023</p2>
                <hr style={{ color: "red"}} />
                <hr style={{ position: "relative", color: "red", top: "-15px" }} />
                <h1 style={{ color: "#bf8f36", textAlign: "center", fontFamily: "Roboto Condensed", fontWeight: "bold" }} className="display-4">Patient HashCode: "{user.hashcode}"</h1>


                <ul className="view">
                    <div  className="left1">
                        <li className="listgroupitemH">FirstName:</li>
                        <li className="listgroupitem">{user.firstName}</li>
                        <li className="listgroupitemH">LastName:</li>
                        <li className="listgroupitem">{user.lastName}</li>
                        <li className="listgroupitemH">Age:</li>
                        <li className="listgroupitem">{user.age}</li>
                        <li className="listgroupitemH">Gender:</li>
                        <li className="listgroupitem">{user.gender}</li>
                        <li className="listgroupitemH">Disease:</li>
                        <li className="listgroupitem">{user.disease}</li>
                    </div>

                    <div className="right2">
                        <li className="listgroupitemH">Symptoms:</li>
                        <li className="listgroupitem">{user.symptoms}</li>
                        <li className="listgroupitemH">Email:</li>
                        <li className="listgroupitem">{user.email}</li>
                        <li className="listgroupitemH">Doctor Incharge:</li>
                        <li className="listgroupitem">{user.doctor}</li>
                        <li className="listgroupitemH">Date of Addmission:</li>
                        <li className="listgroupitem">{user.dateofadd}</li>
                        <li className="listgroupitemH">Date of Discharge:</li>
                        <li className="listgroupitem">{user.dateofdis}</li>
                        <li className="listgroupitemH">Doctor Remark:</li>
                        <li className="listgroupitem">{user.remark}</li>
                    </div>



                </ul>
                <Link id="btns1" className="hide-print" to="/home">back to Manage Records</Link>
                <button className="hide-print" /*"btn btn-primary mx-3"*/ onClick={generatePDF} >Print Record</button>
            </div>
        </div>

    )

}

export default User;


