import { Col, Row } from "antd";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header";
import Sider from "../components/Sider";
import useIsMobile from '../redux/IsMobileHook'
import Motion from "src/Motion";
import Inventory from "./Inventory";
import SideDrawer from "./SideDrawer";
import { useState } from "react";

function HomeLayout({ grey }) {
    const [open, setOpen] = useState(false)
    const isxl = useIsMobile() >= 2100;
    const isMobile = useIsMobile() <= 850;

    return (
        isMobile ?
            <div className={grey == true ? "bg-base" : "bg-white"} >
                <Row className=" " >
                    <Col md={24} lg={24} sm={24} className="bg-base  "  >

                        <Row className={isxl == true ? "w-100 container" : " w-100 "}>
                            <Col md={24} sm={24} className="bg-base"  >
                                <Header
                                    open={open}
                                    setOpen={setOpen} />
                                <SideDrawer
                                    open={open}
                                    setOpen={setOpen}
                                />
                                <Routes>
                                    <Route path='/home' element={<Motion><Home
                                    /></Motion>} />
                                    <Route path='/inventory' element={<Motion><Inventory
                                    /></Motion>} />
                                </Routes>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
            : <div className={grey == true ? "bg-base" : "bg-white"}>
                <Row className=" " >
                    <Col md={24} lg={24} sm={24} className="bg-base  "  >

                        <Row className={isxl == true ? "w-100 container" : " w-100 "}>

                            <Col md={4} className="bg-white  "  >
                                <Sider grey={true} />
                            </Col>
                            <Col md={20} className="bg-base"  >
                                <Header />
                                <Routes>
                                    <Route path='/home' element={<Motion><Home /></Motion>} />
                                    <Route path='/inventory' element={<Motion><Inventory /></Motion>} />
                                </Routes>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
    );
}

export default HomeLayout;
