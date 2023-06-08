import React ,{ useState}from "react";
import { Button,Form,Table } from 'react-bootstrap';
import './TemplateMain.css';
import Menu from "../../UI/organisms/Menu";

const TemplateMain =(props)=>{
    

    const {saldo,consulta,Logout}=props


    const[details,setDetails]=useState({numero:""});

    const submitHandler= (e)=>{
        
        e.preventDefault();
        consulta(details)
    }

    return (
        <div>
             <Menu Logout={Logout}/>
             <br/><br/><br/><br/>
             <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Digite codigo empleado</Form.Label>
                    <Form.Control type="text" placeholder="digite codigo" onChange={e=>setDetails({...details,numero:e.target.value})} value={details.numero}/>
                 
                </Form.Group>
                <Button variant="primary" type="submit">
                    Consultar
                </Button>
            </Form>
            <br/><br/>
            {
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Employee Age</th>
                    <th>Employee Annual Salary</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>ID</th>
                    <th>Profile Image</th>
                  </tr>
                </thead>
                <tbody>
                  {saldo.map((item, index) => (
                    <tr key={index}>
                      <td>{item.employee_age}</td>
                      <td>{item.employee_anual_salary}</td>
                      <td>{item.employee_name}</td>
                      <td>{item.employee_salary}</td>
                      <td>{item.id}</td>
                      <td>{item.profile_image}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            }
            
        </div>
    );
}

export default TemplateMain;