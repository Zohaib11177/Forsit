import { Col, Row, Input, Button, message } from "antd";
import logo from "../assets/images/closemenu.png";

function Header({open,setOpen}) {


  const Isactive = (item) => {
    let ok = window.location.pathname.includes(item) ? true : false;
    return ok
  }
  return (
    <>
      <div className="bg-white ">
        <Row className="bg-white header pt-2 container  ">
          <Col lg={24} md={24} className="m-0">
           
            <div className="w-100">
              <div className="d-flex justify-content-between" >
              <div className="my-1">
              <img src={logo} height={22} onClick={()=>{setOpen(true)}} />
            </div>
                  <div
                    className=" grey-18 fw-500 text-center h-40 poppin  rounded-pill me-2 py-2 bg-white  px-4  " >
                    Admin Dashboard
                  </div>
              </div>
            </div>
             </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
