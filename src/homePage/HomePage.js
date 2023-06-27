import React from 'react';
import "./Homepage.css";
import "./Footer.css";
import Navbar from "../Navbar/Navbar";




const HomePage = () => {
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/blur-hospital_1203-7972.jpg?w=1380&t=st=1680627724~exp=1680628324~hmac=49557eeafa9bab659cba237a05a0ae9c3c12c5c219ec0fac3334c344dcfb8fad')";
    
    return (
        <>
        <Navbar/>
            <section className='container'>
                <div className='doctorimg'>
                    <Image2 />
                </div>
                <div className='description'>
                    <h1>Making Health Care Better Together</h1>
                    <p>A hospital is a health care institution providing patient treatment with specialized health science andauxiliary healthcare staff and medical equipment.The best-known type of hospital is the general
                        hospital, which typically has an emergency department to treat urgent health problems ranging from fire and
                        accident victims to a sudden illness.</p>
                </div>
            </section>
            {/*Footer*/}
            <footer className='footer-in'>
                <section className='section2'>
                    <p6>Subsrcibe to our newletters</p6>
                    <input type="text" id="emailinput" placeholder='Email Address' />
                    <button className='buttons' type='submit'>Subscribe</button>
                    <p>Connect With us</p>
                    <div className="icons">
                        <div>
                            <button><a href="/" target="blank"><i class="fa fa-twitter fa-1x"></i></a></button>
                        </div>
                        <div>
                            <button><a href="https://www.facebook.com/" target="blank"><i class="fa fa-facebook fa-1x"></i></a></button>
                        </div>
                    </div>
                </section>
                <hr />
                <section className='section3'>
                    <div className='container2'>
                        <div className='items'>
                            <img src='./images/Mumbai.png'
                                alt='Error Mumbai img' />
                            <h3>Mumbai</h3>
                            <p6 className='center'>Raod No.13, ShamNagar, Colaba,India </p6><br />
                            <p6>ph.9511733122</p6>
                        </div>
                        <div className='items'>
                            <img src='./images/kolkata.png'
                                alt='Error Kolkata img' />
                            <h3>Kolkata</h3>
                            <p6 className='center'>Build No.513, lane.12 , Howrah,India</p6><br />
                            <p6>ph.8999708700</p6>
                        </div>
                        <div className='items'>
                            <img src='./images/delhi.png'
                                alt='Error New Delhi img' />
                            <h3>New Delhi</h3>
                            <p6 className='center'>Raod No.89, near india gate, New Delhi,India</p6><br />
                            <p6>ph.9021797662</p6>
                        </div>
                        <div className='items'>
                            <img src='./images/cheenai.png'
                                alt='Error Cheenai img' />
                            <h3>Cheenai</h3>
                            <p6 className='center'>Gate.113, Raam Nagar, cheenai,India</p6><br />
                            <p6>ph.9168286829</p6>
                        </div>

                    </div>
                </section>
                <hr />
                <section className='section4'>
                    <div className='copyright'>
                        <p6>CopyRight 2023 &#169; City Hospital </p6>
                    </div>
                    <p6 className='p-secondary1'>Privacy Policy</p6>
                    <p6 className='p-secondary2'>Terms of use</p6>
                </section>
            </footer >
         </>
    );
}
const Image2 = () => {
    return (
        <img src='./images/doc.png'
            alt='Error LoadImage'
        />
    );
}
export default HomePage;
