import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";




function Records6() {
    return (
        <>
            <Record
                dimg={Ddata[6].img}
                dname={Ddata[6].dname}
                dspecial={Ddata[6].dspecial}
                description={Ddata[6].description}
                degree={Ddata[6].degree}
            />
        </>
    );

}
export default Records6;