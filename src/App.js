import React from "react";
import Home from "./homePage/HomePage";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Aboutus from "./Aboutus/aboutus";
import Ourdoctors from "./ourDoctors/Ourdoctors";
import Uploadrec from "./uploadRecord/Uploadrec";
import Records0 from "../src/DocRec/Records0";
import Records1 from "../src/DocRec/Records1";
import Records2 from "../src/DocRec/Records2";
import Records3 from "../src/DocRec/Records3";
import Records4 from "../src/DocRec/Records4";
import Records5 from "../src/DocRec/Records5";
import Records6 from "../src/DocRec/Records6";
import Records7 from "../src/DocRec/Records7";
import Records8 from "../src/DocRec/Records8";
import Home2 from "./medicalRecordsPage/Home";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import User from "./Users/User"







 
function App() {
    return (
        <>
        
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/ourdoctors' element={<Ourdoctors />} />
                    <Route path='/uploadrec' element={<Uploadrec />} />
                    <Route path='/records0' element={<Records0 />} />
                    <Route path='/records1' element={<Records1 />} />
                    <Route path='/records2' element={<Records2 />} />
                    <Route path='/records3' element={<Records3 />} />
                    <Route path='/records4' element={<Records4 />} />
                    <Route path='/records5' element={<Records5 />} />
                    <Route path='/records6' element={<Records6 />} />
                    <Route path='/records7' element={<Records7 />} />
                    <Route path='/records8' element={<Records8 />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/home' element={<Home2 />} />
                    <Route path='/adduser' element={<AddUser />} />
                    <Route path='/editusers/:id' element={<EditUser />} />
                    <Route path='/user/:id' element={<User />} />
                    
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;

