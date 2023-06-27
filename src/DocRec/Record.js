import React from 'react';
import './Record.css';
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';




function Record(props) {
    const { loginWithRedirect } = useAuth0();
    const { logout, isAuthenticated, user } = useAuth0();
    return (
        <>
            <Navbar />
            <div className="dimg">
                <img src={props.dimg} alt="Errorload" />
                <p6 style={{ color: "black", textAlign: "center", position: "relative", left: " 840px" }} className='s-secondary4'>{props.dname}</p6>
            </div>
            <div className='descript'>

                <p3 className='s-secondary6'>{props.dspecial}</p3><br />
                <p6 className='s-secondary4'>{props.description}</p6><br />
                <p6 className='s-secondary4'>{props.degree}</p6>
            </div>
            <div className='descript2'>
                <p>Doctor is the most beautifull job because it allows us to save to save the patient from the dead end and let continue his life with full of joy. The blessings patient gives to a doctor after the treatment it over and patient is healthy that are wordless to a doctor and it feels so warm.</p>
            </div >
            <section className='section4'>
                <div className='copyright'>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    {isAuthenticated ? (
                        <Link className="btn btn-info btn-lg" to='/home'>View Medical Records</Link>

                    ) : (
                        <Link className="btn btn-danger btn-lg" onClick={() => loginWithRedirect()}>Login</Link>
                        
                    )}
                    
                </div>

                

            </section>
            <footer>Authorized by hospital @ cityhospital</footer>





        </>
    );
}
export default Record;


