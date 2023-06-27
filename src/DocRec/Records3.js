import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";

function Records3() {
    return (
        <>
            <Record
                dimg={Ddata[3].img}
                dname={Ddata[3].dname}
                dspecial={Ddata[3].dspecial}
                description={Ddata[3].description}
                degree={Ddata[3].degree}
            />
        </>
    );

}
export default Records3;