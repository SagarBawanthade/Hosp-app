import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";




function Records8(){
    return(
        <>
        <Record
        dimg={Ddata[8].img}
        dname={Ddata[8].dname}
        dspecial={Ddata[8].dspecial}
        description={Ddata[8].description}
        degree={Ddata[8].degree}
        />
        </>
    );

}
export default Records8;