import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";



function Records5() {
    return (
        <>
            <Record
                dimg={Ddata[5].img}
                dname={Ddata[5].dname}
                dspecial={Ddata[5].dspecial}
                description={Ddata[5].description}
                degree={Ddata[5].degree}
            />
        </>
    );

}
export default Records5;