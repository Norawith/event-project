import React from 'react';
import { Container, Form ,Button, Table} from 'react-bootstrap';
import { useState } from 'react';
import axios ,{Axios} from 'axios';

function Search_Register() {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [alumnidata, setAlumnidata] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
}

  function Getdata(){
    axios.post('http://localhost:3001/getdata', {name, id}).then((response) => {
        setAlumnidata(response.data);
    })
  }
  return <>
    <Container>
    <Form className="form-control" onSubmit={handleSubmit}>
        <Form.Text>หมายเหตุ : กรุณาใส่คำค้นหา สามารถใส่เพียงบางส่วนของคำก็ได้</Form.Text>
        <br/>
        <Form.Group className="mb-3 col" style={{width: 300}} controlId="">
            <Form.Label>ชื่อ - สกุล</Form.Label>
            <Form.Control type="text" placeholder="ชื่อ - สกุล" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Label>หลักสูตร</Form.Label>
        <Form.Select className="mb-3" style={{width: 300}} aria-label="Default select example">
            <option>เลือก...</option>
            <option value="1">เคมี</option>
            <option value="2">คณิตศาสตร์</option>
            <option value="3">เทคโนโลยีสารสนเทศ</option>
        </Form.Select>

        <Form.Group className="mb-3" style={{width: 300}} controlId="">
            <Form.Label>รหัสนักศึกษา</Form.Label>
            <Form.Control type="number"  onChange={(e) => setId(e.target.value)}/>
        </Form.Group>

        <Button variant="outline-success" onClick={Getdata}>ค้นหา</Button>

        <br/><br/>

        
        {alumnidata.map((val,key) => {
          return(
            <Table striped bordered hover>
                <thead>
                    <tr> 
                        <th>ชื่อ - สกุล</th>
                        <th>หลักสูตร</th>
                        <th>รหัสนักศึกษา</th>
                        <th>ยืนยันตัวตน</th>  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{val.alumni_name + "   " + val.alumni_surname}</td>
                        <td>เทคโนโลยีสารสนเทศ</td>
                        <td>{val.alumni_id}</td>
                        <td><Button variant="primary" size="sm">เลือก..</Button></td>
                    </tr>
                </tbody>
            </Table>
            
          )
        })}

    </Form>
    
    </Container>
  </>;
}

export default Search_Register;
