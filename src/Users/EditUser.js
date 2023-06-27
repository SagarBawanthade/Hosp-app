import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';



const EditUser = () => {
  let navigate = useNavigate();
  const {id} = useParams();


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

  const { firstName, lastName, age, email, hashcode, gender, disease, symptoms, doctor, dateofadd, dateofdis, remark } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !doctor || !disease) {
      return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true
      });
  }
    await axios.put(`http://localhost:3003/users/${id}`,user);
    navigate('/home');
    Swal.fire({
      icon: 'success',
      title: 'Successfully updated Records!',
      showConfirmButton: false,
      timer: 1500
  });
  };

  useEffect(() => {
    loadUsers();
    
  }, []);



  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);

    
  };
  
  
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 style={{ color: "#005dff", textAlign: "center", fontSize: "40px" }} className="text-center mb-4">Edit Existing Record</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label className="form-group" htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="firstName"
              value={firstName}
              onChange={e => onInputChange(e)}
            />
            <label  className="form-group" htmlFor="lastName">Last Name</label>
            <input style={{ color: "black" }}
              id="lastName"
              type="text"
              className="form-control form-control-lg"
              name="lastName"
              value={lastName}
              onChange={e => onInputChange(e)}
            />
            <label className="form-group" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control form-control-lg"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
            <label className="form-group" htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              className="form-control form-control-lg"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
            <label className="form-group" htmlFor="gender">Gender</label>
            <input
              id="gender"
              type="text"
              className="form-control form-control-lg"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
            <label  className="form-group" htmlFor="dateofadd">Date of Addmit</label>
            <input
              id="dateofadd"
              type="date"
              className="form-control form-control-lg"
              name="dateofadd"
              value={dateofadd}
              onChange={e => onInputChange(e)}
            />
            <label className="form-group" htmlFor="dateofdis">Date of Discharge</label>
            <input
              id="dateofdis"
              type="date"
              className="form-control form-control-lg"
              name="dateofdis"
              value={dateofdis}
              onChange={e => onInputChange(e)}
            />
            <label className="form-group" htmlFor="hashcode">HashCode</label>
            <input
              id="hashcode"
              type="text"
              className="form-control form-control-lg"
              name="hashcode"
              value={hashcode}
              onChange={e => onInputChange(e)}
            />
            <label className="form-group" htmlFor="doctor">Doctor Incharge</label>
            <input
              id="doctor"
              type="text"
              className="form-control form-control-lg"
              placeholder='please enter DR. before entering doctors name'
              name="doctor"
              value={doctor}
              onChange={e => onInputChange(e)}
            />
            <label className="form-group" htmlFor="disease">Disease</label>
            <input
              id="disease"
              type="text"
              className="form-control form-control-lg"
              name="disease"
              value={disease}
              onChange={e => onInputChange(e)}
            />
            <label  className="form-group" htmlFor="symptoms">Symptoms</label>
            <input
              id="symptoms"
              type="text"
              className="form-control form-control-lg"
              name="symptoms"
              value={symptoms}
              onChange={e => onInputChange(e)}
            />
            <label  className="form-group" htmlFor="remark">Remark</label>
            <input
              id="remark"
              type="text"
              className="form-control form-control-lg"
              name="remark"
              value={remark}
              onChange={e => onInputChange(e)}
            />
          </div>


          <button className="btn btn-warning btn-block">Update Record</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
