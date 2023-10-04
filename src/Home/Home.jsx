import { Col, Radio, Row } from "antd";
import { UsergroupAddOutlined,ArrowUpOutlined,ShoppingCartOutlined,
    DollarOutlined,LineChartOutlined 
} from '@ant-design/icons';
import DemoColumn from "./Chartsales";
import DemoDualAxes from "./Chartweek";
import SalesTrend from "./Saletrends";
import Orderscharts from "./Orderschart";
import { useState } from "react";
function Home({ 
    open,
    setOpen
}) {

    const [trange,settrange] = useState("WEEK")
    const [cate,setcate] = useState("All")
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        settrange(e.target.value);
      };
    const onChangecate = (e) => {
        console.log('radio checked', e.target.value);
        setcate(e.target.value);
      };
    return (
        <Row>
            <Col md={24} className="pt-10 px-3" style={{}} >

                <Row gutter={12}>
                    <Col md={24}   style={{}} >
                    <p className="outfit fw-500 grey-16" >Dashboard</p>
                       
                    </Col>
                    </Row>
                <Row gutter={12}>
                    <Col md={12}   style={{}} >
                        <Row gutter={12}>
                            <Col md={12} style={{}} >
                                <div className="bg-white rounded p-3 mb-3" >
                                <div className="w-100 d-flex justify-content-between" >
                                    <p className="outfit fw-400 pxl-14 grey-text" >Customer</p>
                                    <span className="d-flex align-center justify-content-center rounded" style={{backgroundColor:"#DCDEFC",width:"30px", height:"30px"}} >

                                    <UsergroupAddOutlined  className="pxl-16"  style={{color:"#727CF5"}} />
                                    </span>
                                </div>
                                    <p className="outfit fw-500 grey-16" >2000</p>
                                <div className="w-100 d-flex justify-content-between align-center" >
                                    <smal className="d-flex align-center  rounded" style={{
                                         color:"green"}} >

                                    <ArrowUpOutlined  style={{color:"green"}} />&nbsp;  5.25% 
                                    </smal>
                                    <small className="outfit fw-400 pxl-14 grey-text mb-0" >Since last month </small>

                                </div>
                                </div>

                            </Col>
                            <Col md={12} style={{}} >
                                <div className="bg-white rounded p-3 mb-3" >
                                <div className="w-100 d-flex justify-content-between" >
                                    <p className="outfit fw-400 pxl-14 grey-text" >Orders</p>
                                    <span className="d-flex align-center justify-content-center rounded" style={{backgroundColor:"#DCDEFC",width:"30px", height:"30px"}} >

                                    <ShoppingCartOutlined  className="pxl-16"  style={{color:"#727CF5"}} />
                                    </span>
                                </div>
                                    <p className="outfit fw-500 grey-16" >3000</p>
                                <div className="w-100 d-flex justify-content-between align-center" >
                                    <smal className="d-flex align-center  rounded" style={{
                                         color:"green"}} >

                                    <ArrowUpOutlined  style={{color:"green"}} />&nbsp;  1.25% 
                                    </smal>
                                    <small className="outfit fw-400 pxl-14 grey-text mb-0" >Since last month </small>

                                </div>
                                </div>

                            </Col>
                            <Col md={12} style={{}} >
                                <div className="bg-white rounded p-3 mb-3" >
                                <div className="w-100 d-flex justify-content-between" >
                                    <p className="outfit fw-400 pxl-14 grey-text" >Revenue</p>
                                    <span className="d-flex align-center justify-content-center rounded" style={{backgroundColor:"#DCDEFC",width:"30px", height:"30px"}} >

                                    <DollarOutlined   className="pxl-16"  style={{color:"#727CF5"}} />
                                    </span>
                                </div>
                                    <p className="outfit fw-500 grey-16" >$36,500</p>
                                <div className="w-100 d-flex justify-content-between align-center" >
                                    <smal className="d-flex align-center  rounded" style={{
                                        // backgroundColor:"#DCDEFC",
                                        //  height:"28px",
                                         color:"green"}} >

                                    <ArrowUpOutlined  style={{color:"green"}} />&nbsp;  5.25% 
                                    </smal>
                                    <p className="outfit fw-400 pxl-14 grey-text mb-0" >Since last month</p>

                                </div>
                                </div>

                            </Col>
                            <Col md={12} style={{}} >
                                <div className="bg-white rounded p-3 mb-3" >
                                <div className="w-100 d-flex justify-content-between" >
                                    <p className="outfit fw-400 pxl-14 grey-text" >Growth</p>
                                    <span className="d-flex align-center justify-content-center rounded" style={{backgroundColor:"#DCDEFC",width:"30px", height:"30px"}} >

                                    <LineChartOutlined   className="pxl-16"  style={{color:"#727CF5"}} />
                                    </span>
                                </div>
                                    <p className="outfit fw-500 grey-16" >25%</p>
                                <div className="w-100 d-flex justify-content-between align-center" >
                                    <smal className="d-flex align-center  rounded" style={{
                                        
                                         color:"green"}} >

                                    <ArrowUpOutlined  style={{color:"green"}} />&nbsp;  5.25% 
                                    </smal>
                                    <p className="outfit fw-400 pxl-14 grey-text mb-0" >Since last month</p>

                                </div>
                                </div>

                            </Col>
                            
                        </Row>
                    </Col>
                    <Col md={12} style={{height:"100%"}} >
                        <div className="bg-white px-3 pb-3 mb-3 rounded"style={{height:"97%"}} >
                          <div className="">
                    <p className="outfit fw-500 grey-16 pt-3" >SALES LAST 12 MONTHS</p>
                    <Radio.Group onChange={onChangecate} value={cate}>
                    <Radio value={"All"} >All</Radio>
                    <Radio value={"Men"} >Men</Radio>
                    <Radio value={"Women"} >Women</Radio>
                    <Radio value={"Kid"} >Kid</Radio>
                    </Radio.Group>
                            <DemoColumn cat={cate} />
                          </div>
                        </div>

                    </Col>
                    <Col md={12} style={{}} >
                        <div className="bg-white px-3 pb-3 my-1 rounded"style={{}} >
                          <div className="">
                    <p className="outfit fw-500 grey-16 pt-3" >SALES CURRENT WEEK VS LAST WEEK</p>
                            <DemoDualAxes />
                          </div>
                        </div>

                    </Col>
                    <Col md={12} style={{}} >
                        <div className="bg-white px-3 pb-3 rounded"style={{}} >
                          <div className="">
                    <p className="outfit fw-500 grey-16 pt-3" >SALES OVER TRENDS</p>
                            <SalesTrend />
                          </div>
                        </div>

                    </Col>
                    <Col md={24} style={{}} >
                        <div className="bg-white px-3 pb-3 my-1 rounded"style={{}} >
                          <div className="">

                    <p className="outfit fw-500 grey-16 pt-3 my-3" >ORDERS LAST {trange}</p>
                    <Radio.Group onChange={onChange} value={trange}>
                    <Radio value={"WEEK"} >Last Week</Radio>
                    <Radio value={"MONTH"} >Last Month</Radio>
                    <Radio value={"YEAR"} >Last Year</Radio>
                    </Radio.Group>
                            <Orderscharts trange={trange} />
                          </div>
                        </div>

                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Home;


