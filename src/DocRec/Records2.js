import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";




function Records2() {
    return (
        <>
            <Record
                dimg={Ddata[2].img}
                dname={Ddata[2].dname}
                dspecial={Ddata[2].dspecial}
                description={Ddata[2].description}
                degree={Ddata[2].degree}
            />
        </>
    );
}
export default Records2;