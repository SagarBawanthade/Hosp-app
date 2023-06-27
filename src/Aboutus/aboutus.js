import React from 'react';
import "./aboutus.css";
import Navbar from "../Navbar/Navbar";

function Aboutus() {
  return (
    <>
    <Navbar/>
    <section class="about-us">
    <div class="about">
      <img src="https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg" class="pic"/>
      <div class="text">
        <h2>About Us</h2>
        <h5>No. 1 Hospital & <span>Doctors</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div class="data">
       
        </div>
      </div>
    </div>
  </section>
  <footer className='aboutusfooter'>Authorized by hospital @ cityhospital</footer>
</>
  )
}

export default Aboutus;