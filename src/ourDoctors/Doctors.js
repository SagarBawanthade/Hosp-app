import React from "react";
import './doc.css';


function Doctors(props) {
    return (
        <>
        
                <div className='doctorlist1'>
                    <div className='doctors1'>
                        <img src={props.dimg} alt="Errorload" />
                        <h3 className='h-primary2'>{props.dname}</h3>
                        <p3 className='s-secondary1'>{props.dspecial}</p3><br />
                        <p6 className='s-secondary2'>{props.description}</p6><br />
                        <p6 className='s-secondary2'>{props.degree}</p6>
                    </div>

                </div>
            
        </>
    );
}
export default Doctors;