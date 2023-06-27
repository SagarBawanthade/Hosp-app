import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";

function Records1(){
    return(
        <>
        <Record
        dimg={Ddata[1].img}
        dname={Ddata[1].dname}
        dspecial={Ddata[1].dspecial}
        description={Ddata[1].description}
        degree={Ddata[1].degree}
        />
        </>
    );
}
export default Records1;
