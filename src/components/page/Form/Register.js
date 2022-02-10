import React from 'react';
import { Container, Form ,Button} from 'react-bootstrap';

function Creact_Form() {
  

  return <>
  <Container>
    <Form className="form-control">
        <Form.Text>หมายเหตุ : ข้อมูลนี้เป็นข้อมูลจากฐานข้อมูลศิษย์เก่าคณะวิทยาศาสตร์ หากท่านมีการเปลี่ยนแปลงข้อมูล สามารถแก้ไขในหน้านี้ได้เลย ทางคณะวิทยาศาสตร์จะนำไปอัพเดตในฐานข้อมูลศิษย์เก่าคณะวิทยาศาสตร์ต่อไป</Form.Text>
        <br/>
        <Form.Group className="mb-3 col" style={{width: 300}} controlId="">
            <Form.Label>ชื่อ - สกุล</Form.Label>
            <Form.Control type="text" placeholder="ชื่อ - สกุล"/>
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
            <Form.Control type="number"/>
        </Form.Group>
       
        <Form.Group className="mb-3" style={{width: 300}} controlId="">
            <Form.Label>รหัสผ่าน</Form.Label>
            <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3" style={{width: 300}} controlId="">
            <Form.Label>เบอร์โทรที่สามารถติดต่อได้</Form.Label>
            <Form.Control type="number" />
        </Form.Group>
    
        <br /> <br />
    
        <Form.Group className="mb-3" controlId="">
            <Form.Label>ที่อยู่ที่สามารถติดต่อได้</Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Label>อำเภอ</Form.Label>
        <Form.Select className="mb-3" style={{width: 300}} aria-label="Default select example">
            <option>เลือก...</option>
            <option value="1">เคมี</option>
            <option value="2">คณิตศาสตร์</option>
            <option value="3">เทคโนโลยีสารสนเทศ</option>
        </Form.Select>

        <Form.Label>จังหวัด</Form.Label>
        <Form.Select className="mb-3" style={{width: 300}} aria-label="Default select example">
            <option>เลือก...</option>
            <option value="1">เคมี</option>
            <option value="2">คณิตศาสตร์</option>
            <option value="3">เทคโนโลยีสารสนเทศ</option>
        </Form.Select>

        <Form.Group className="mb-3" style={{width: 300}} controlId=""  >
            <Form.Label>รหัสไปรษณีย์</Form.Label>
            <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3" style={{width: 500}} controlId="">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3" style={{width: 500}}  controlId="">
            <Form.Label>Facebook</Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" style={{width: 500}}  controlId="">
            <Form.Label>ID Line</Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
            <Form.Label>ตำแหน่ง / หน่วยงาน</Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3"  controlId="">
            <Form.Label>ความประทับใจในคณะวิทยาศาสตร์</Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
            <Form.Label>55 ปี อยากเห็นคณะวิทยาศาสตร์ก้าวหน้าไปในทางทิศทางไหน</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <br />
        <Button variant="outline-success">ยืนยัน</Button>
        

       


    </Form>
    </Container>
  </>;
}

export default Creact_Form;
