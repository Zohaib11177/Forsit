import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import edit from "../assets/images/editssvv.svg"
import graph from "../assets/images/graphssvv.svg"
import logo from "../assets/images/logoforist.svg"
import useIsMobile from '../redux/IsMobileHook'

function Sider({ grey }) {
  const isMobile = useIsMobile() <= 768
  const Isactive = (item) => {
    let ok = window.location.pathname.includes(item) ? true : false;
    return ok
  }
  return (
    <>
      
        <Row className=" sider  bg-t-grey sticky-0 " style={{ height: "100vh" }}  >

          <Col md={24} className="pt-2 sticky-0 bg-t-grey h-100" >
            <div className="overflowy h-100">
              <div className="text-center">
                <img src={logo} style={{ height: "24px" }} />
              </div>
              <div className="w-100 mt-3">
                <Link to='home ' className="itemnav w-100" >
                  <span
                    className={Isactive("/home") ? 'd-flex align-center menuact  my-0 w-100 itemnav py-2' : 'w-100 itemnav py-2 d-flex align-center menusss  my-0'}>

                    <img src={graph} className="mx-2 " style={{ width: "18px" }} />
                    Dashboard
                  </span>
                </Link>
                <Link to='inventory ' className="itemnav w-100" >
                  <span
                    className={Isactive("/inventory") ? 'd-flex align-center menuact  my-0 w-100 itemnav py-2' : 'w-100 itemnav py-2 d-flex align-center menusss  my-0'}>

                    <img src={edit} className="mx-2  " style={{ width: "18px" }} />
                    Inventory
                  </span>
                </Link>

              </div>


            </div>
          </Col>
        </Row>
      
    </>
  );
}

export default Sider;
