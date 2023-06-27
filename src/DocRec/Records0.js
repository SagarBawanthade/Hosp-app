import React from "react";
import Record from "./Record";
import Ddata from "../ourDoctors/Ddata";

function Records0() {
    return (
        <>
            <Record
                dimg={Ddata[0].img}
                dname={Ddata[0].dname}
                dspecial={Ddata[0].dspecial}
                description={Ddata[0].description}
                degree={Ddata[0].degree}
            />
        </>
    );
}
export default Records0;