import { Button, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { PlusOutlined } from '@ant-design/icons';
import ProductsTable from "src/Tables/ProductsTable";
import { useEffect, useState } from "react";
import { getProduct } from "src/redux/actions/userActions";
import ProductModal from "src/Modals/ProductModal";

function Inventory({ 
    open,
    setOpen
}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    const [addp, setaddp] = useState(false);


    return (
        <Row>
            <Col md={24} className="pt-10 px-3" style={{}} >
                <ProductModal
                    productModalOpen={addp}
                    setProductModalOpen={setaddp}
                />
                <Row gutter={12}>
                    <Col md={24} style={{}} >
                        <div className="d-flex justify-content-between w-100">

                            <p className="outfit fw-500 grey-16" >Inventory</p>
                            <Button
                                onClick={() => { setaddp(true) }}
                                className="py-2  px-3  d-flex fw-600 grey-16 border-0" style={{ alignItems: "center", backgroundColor : "transparent", borderRadius: '10px', display: "flex", alignItems: "center" }}>

                                <PlusOutlined className="me-1" />


                                <span className="outfit fw-400 pxl-16 text-center searchPeopleButton" >
                                    Add Product
                                </span>
                            </Button>
                        </div>

                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col md={24} style={{}} >
                        <div className="bg-white rounded p-3 mb-3" >
                            <ProductsTable />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Inventory;


