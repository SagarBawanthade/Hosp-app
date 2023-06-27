import React from 'react';
import Ddata from './Ddata';
import Doctors from './Doctors';
import './doc.css';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

function Ourdoctors() {
  document.body.style.backgroundColor = "white";
  document.body.style.maxHeight = "880px";
  return (
    <>
    <Navbar/>
      <section className='css'>
        <h1 id='h1'>Meet Our Doctors</h1>
        <p6 id="s">We have the best Doctors team in India to Fight with the Dangerous diseases all over the world & take care of our Patients.</p6>
        <div className='div'>
          <div className='div1'>
            <Link id="ourdocs" to='/records0'><Doctors
              dimg={Ddata[0].img}
              dname={Ddata[0].dname}
              dspecial={Ddata[0].dspecial}
              description={Ddata[0].description}
              degree={Ddata[0].degree}
            /></Link>
            <Link id="ourdocs" to='/records1'><Doctors
              dimg={Ddata[1].img}
              dname={Ddata[1].dname}
              dspecial={Ddata[1].dspecial}
              description={Ddata[1].description}
              degree={Ddata[1].degree}
            /></Link>
            <Link id="ourdocs" to='/records2'><Doctors
              dimg={Ddata[2].img}
              dname={Ddata[2].dname}
              dspecial={Ddata[2].dspecial}
              description={Ddata[2].description}
              degree={Ddata[2].degree}
            /></Link>
          </div>
          <div className='div2'>
            <Link id="ourdocs" to='/records3'><Doctors
              dimg={Ddata[3].img}
              dname={Ddata[3].dname}
              dspecial={Ddata[3].dspecial}
              description={Ddata[3].description}
              degree={Ddata[3].degree}
            /></Link>
            <Link id="ourdocs" to='/records4'><Doctors
              dimg={Ddata[4].img}
              dname={Ddata[4].dname}
              dspecial={Ddata[4].dspecial}
              description={Ddata[4].description}
              degree={Ddata[4].degree}
            /></Link>
            <Link id="ourdocs" to='/records5'><Doctors
              dimg={Ddata[5].img}
              dname={Ddata[5].dname}
              dspecial={Ddata[5].dspecial}
              description={Ddata[5].description}
              degree={Ddata[5].degree}
            /></Link>
          </div>

          <div className='div3'>
            <Link id="ourdocs" to='/records6'><Doctors

              dimg={Ddata[6].img}
              dname={Ddata[6].dname}
              dspecial={Ddata[6].dspecial}
              description={Ddata[6].description}
              degree={Ddata[6].degree}
            /></Link>
            <Link id="ourdocs" to='/records7'><Doctors
              dimg={Ddata[7].img}
              dname={Ddata[7].dname}
              dspecial={Ddata[7].dspecial}
              description={Ddata[7].description}
              degree={Ddata[7].degree}
            /></Link>
            <Link id="ourdocs" to='/records8'><Doctors
              dimg={Ddata[8].img}
              dname={Ddata[8].dname}
              dspecial={Ddata[8].dspecial}
              description={Ddata[8].description}
              degree={Ddata[8].degree}
            /></Link>
          </div>
        </div>
      </section>
      <footer className='foo' >
        <section className="text-center text-lg-start bg-black text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
            <div className="me-5 d-none d-lg-block" style={{ color: "white" }}>
              <span>Get connected with us on social networks:</span>
            </div>
            <hr style={{ color: "white" }} />
             <div>
              <a href="" className="me-4 link-secondary"><i className="fa fa-facebook-f"></i></a>
              <a href="" className="me-4 link-secondary"><i className="fa fa-google"></i></a>
              <a href="" className="me-4 link-secondary"><i className="fa fa-instagram"></i></a>
              <a href="" className="me-4 link-secondary"><i className="fa fa-linkedin"></i></a>
              <a href="" className="me-4 link-secondary"><i className="fa fa-github"></i></a>
            </div>
          </section>
          <hr style={{ color: "white" }} />
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                 <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary"></i>CITY HOSPITAL
                  </h6>
                  <p>We are among the top 5 best Hospitals in India for over bove 5 years straight for best treatment to treat patients.</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                 <h6 className="text-uppercase fw-bold mb-4">Consultations</h6>
                  <p><a href="#!" className="text-reset">ENT</a></p>
                  <p><a href="#!" className="text-reset">General Medicines</a></p>
                  <p><a href="#!" className="text-reset">Cancer Care</a></p>
                  <p><a href="#!" className="text-reset">Dermatology</a></p>
                </div>
                 <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Diagnosis</h6>
                  <p><a href="#!" className="text-reset">Laboratory</a></p>
                  <p><a href="#!" className="text-reset">X-ray</a></p>
                  <p><a href="#!" className="text-reset">PET-SCAN</a></p>
                  <p><a href="#!" className="text-reset">Genetic Screening Tests</a></p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fa fa-home me-3 text-secondary"></i> Delhi NCR, NY 10012, India</p>
                  <p><i className="fa fa-envelope me-3 text-secondary"></i>city.hospital@gmail.com.com</p>
                  <p><i className="fa fa-phone me-3 text-secondary"></i> 1860 500 7788</p>
                  <p><i className="fa fa-print me-3 text-secondary"></i> 7710 800 7799</p>
                </div>
                </div>
                </div>
          </section>
          <hr style={{ color: "white" }} />
          <div className="text-center p-4">
             © 2023 Copyright:
            <p6 className="text-reset fw-bold">          cityhospital.com</p6>
          </div>
        </section>
      </footer>
    </>
  )
}
export default Ourdoctors;
