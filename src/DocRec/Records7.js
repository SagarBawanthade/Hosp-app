import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";




function Records7() {
    return (
        <>
            <Record
                dimg={Ddata[7].img}
                dname={Ddata[7].dname}
                dspecial={Ddata[7].dspecial}
                description={Ddata[7].description}
                degree={Ddata[7].degree}
            />
        </>
    );

}
export default Records7;