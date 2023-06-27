import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";




function Records4() {
    return (
        <>
            <Record
                dimg={Ddata[4].img}
                dname={Ddata[4].dname}
                dspecial={Ddata[4].dspecial}
                description={Ddata[4].description}
                degree={Ddata[4].degree}
            />
        </>
    );

}
export default Records4;