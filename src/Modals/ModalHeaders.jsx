import { Col, Form, Image, Input, Modal, Checkbox, Row, Button } from "antd";
import content from "../assets/images/content.png"
import sd1 from "../assets/images/sd1.png"
import Img1 from "../assets/images/Img1.png"
import logosmall from "../assets/images/logo-small.png"
import share from "../assets/images/share.png"
import add from "../assets/images/add.svg"
import chatwhite from "../assets/images/chatwhite.png"
import edit from "../assets/images/edit.png"
import p11 from "../assets/images/p11.jpg"
import Carousel from "react-multi-carousel";
import { useState } from "react";
import useIsMobile from '../redux/IsMobileHook'
import { CloseCircleOutlined } from '@ant-design/icons';

import { loginUser } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
// import useIsMobile from "../redux/IsMobileHook";

function ModalHeader({ title, setopen, form, fieldsReset}) {
    
    
    
    
    
    
    return (
       <div  className=" px-3 pb-1 pt-3  border-bottom " >
        <p className="outfit fw-500 grey-16 p-0 m-0 " style={{textAlign: "center"}}>{title}</p>
        <CloseCircleOutlined className="pxl-24  p-0 m-0 modal-close-icon"  onClick={()=>{setopen(false)
       form.resetFields(); fieldsReset()
        }} />

       </div>
    );
}

export default ModalHeader;







