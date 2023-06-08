
import '../styles/App.css';
import React ,{ useState}from "react";
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Main from "../components/pages/Main"
import axios from "axios";
import { isEmpty } from 'lodash';

const baseUrl ="http://localhost:8080";




const App=()=> {

  const[saldo,setSaldo]=useState({});



  const consulta=async(details)=>{
    if (isEmpty(details.numero)) {
      await axios.get(baseUrl+"/amaris/employee")
      .then(response=>{
        setSaldo(response.data)
        return response.data
      })
    }else{
      await axios.get(baseUrl+"/amaris/employee/"+details.numero)
      .then(response=>{
        const updatedSaldo = [response.data];
        setSaldo(updatedSaldo);
        return response.data
      })
    } 
  } 
  


  return (
    <div >

      <BrowserRouter>
        <Routes >
          <Route exact path="/Main" element={<Main saldo={saldo} consulta={consulta}/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
