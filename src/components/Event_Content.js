import React from 'react';
import './Event_Content.css';
import Event_Banner from './Event_Banner';

function Event_content() {
  return <>
      <Event_Banner />
      <div className="container">
        
        <div className="row">
          <div className = "col-sm-6">
            <h6>
              คณะวิทยาศาสตร์
            </h6>
            <h2>
              Science PSU Friendship
            </h2>
            <h2>
              กิจกรรมสร้างความสัมพันธ์ในคณะ
            </h2>
            <p>ขอเชิญชวนศิษย์เก่าเข้าร่วมกิจกรรมครบรอบ 55 ปี คณะวิทยาศาสตร์ สร้างความสัมพันธ์ในรุ่น โดยการลงทะเบียนเข้าร่วมเล่นเกมในกิจกรรม จากทางคณะวิทยาศาสตร์</p>
          </div>
        </div>
        
        <br/>


          <section className="content-con">
            <div className="content-l">
                <img src="https://cdn.pixabay.com/photo/2021/03/26/14/37/gears-6126071_960_720.png" />
            </div>
            <div className="content-r">
              <h2>
                  แฟนพันธ์แท้คณะวิทยาศาสตร์
              </h2>
              <p>
                ขอเชิญชวนศิษย์เก่าเข้าร่วมกิจกรรมครบรอบ 55 ปี คณะวิทยาศาสตร์ สร้างความสัมพันธ์ในรุ่นโดยการลงทะเบียนเข้าร่วมเล่นเกมกิจกรรมจากทางคณะวิทยาศาสตร์
              </p>
              <button type="submit" className="btn btn-primary">เข้าร่วมกิจกรรม</button>
            </div>
          </section>
          <br /> <br />
          <section className="content-con">
            
            <div className="content-r">
              <h2>
                  จิ๊กซอว์
              </h2>
              <p>
              ขอเชิญชวนศิษย์เก่าเข้าร่วมกิจกรรมครบรอบ 55 ปี คณะวิทยาศาสตร์ สร้างความสัมพันธ์ในรุ่นโดยการลงทะเบียนเข้าร่วมเล่นเกมกิจกรรมจากทางคณะวิทยาศาสตร์
              </p>
              <button type="submit" className="btn btn-success">เข้าร่วมกิจกรรม</button>
            </div>
            

            <div className="content-l">
                <img src="https://cdn.pixabay.com/photo/2015/03/27/00/09/puzzle-693870_960_720.jpg" />               
            </div>

          </section>

          <br /> <br />

          <section className="content-con">
            <div className="content-l">
                <img src="https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg" />                
            </div>
            <div className="content-r">
              <h2>
                  จิ๊กซอว์
              </h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maiores repellendus iste pariatur maxime distinctio placeat inventore iusto animi ab voluptatibus, sit reiciendis veniam? Eos mollitia ad eius sunt ratione.
              </p>
              <button type="submit" className="btn btn-warning">เข้าร่วมกิจกรรม</button>
            </div>
          </section>

        <br />
        <div className="text-center">
          
          <h3 > 
            รางวัลสำหรับการเข้าร่วมกิจกรรม
          </h3>
          <p>รางวัลที่ 1 สำหรับผู้ที่เข้าเล่นเกม "แฟนพันธ์แท้คณะวิทยาศาสตร์"</p>
          <p>สุ่มจับรางวัลจากผู้ที่เข้าร่วมการตอบคำถามที่สามารถตอบได้ถูกต้องมากที่สุด 55 รางวัล</p>
          <br />
          <p>รางวัลที่ 2 สำหรับรุ่นที่มีการลงทะเบียนมากที่สุด</p>
          <p>รางวัลกิจกรรมต่อจิ๊กซอร์ร่วมใจ รุ่นที่มีการเข้าร่วมกิจกรรมมากที่สุดจำนวน 5 รุ่น </p>
          <p>โดยเพียงแค่ทำการลงทะเบียนกะจะสามารถเข้าร่วมกิจกรรมได้</p>
          
        </div>



      </div>
  </>;
}

export default Event_content;
