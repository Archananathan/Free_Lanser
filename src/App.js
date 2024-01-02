import React from "react";
import Main from "./components/AuthPage/Home";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from "./components/AuthPage/Footer";
import Login from "./components/AuthPage/Login";
import Browse from "./components/AuthPage/Browse";

function App()
{
  return(
    <div>
      <BrowserRouter>
      <Main/>
      <Routes >
        <Route path="/Footer" element = {<Footer/>}></Route>

      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;