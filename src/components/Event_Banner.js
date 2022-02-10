import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Event_Banner.css';
import {Navigate,Link} from 'react-router-dom';



function Event_Banner() {
    return <>
        <div className="container-fluid">
            <div className="banner-bg">
                <div className="banner-text">
                <div className="text-center" >
                    <h2>กิจกรรมครอบรอบ 55 ปี คณะวิทยาศาสตร์</h2>
                    <h1>8 เมษายน 2566</h1>
                    <Link to="/register">
                        <button className="btn btn-primary">ลงทะเบียน</button>
                    </Link>
                    
                </div>
                </div>
            </div>
        </div>
        <br />
    </>;
}

export default Event_Banner;
