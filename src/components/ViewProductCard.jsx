import React, { memo } from "react";
import { Col, Row} from "antd";
import noimage from "../assets/images/pdefault.jpg";
import Carousel from "react-multi-carousel";
import moment from "moment";
import { Lightbox } from "react-modal-image";
import useIsMobile from "src/redux/IsMobileHook";
import { utcChange } from "src/helper";

function ViewProductCard({data}) {
    const [modalImgUrl, setModalImgUrl] = React.useState("");
    const isMobile = useIsMobile() <= 770;


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2500 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 2500, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 550 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 550, min: 0 },
            items: 1,
        },
    };

    

    

    
    return (
        isMobile ?  <Row
        style={{
            height:'auto',
            backgroundColor: "white",
        }}
    >
        
        <Col
            md={24}
            sm={24}
            style={{height:"100vw"}}
            className=' py-3  h-100 border-radius-side2 bg-white border-radius'
        >
            <div className='h-100 w-100 bg-dark '>
                {data?.images.length ? (
                    <Carousel
                        responsive={responsive}
                        className='home-page-carousel w-100 h-100'
                        style={{ backgroundColor: 'black' }}
                    >
                        {data?.images?.map((item) => {
                            return (
                                <div
                                    style={{ width: '100%', height: '80vh' }}
                                    className='align-center d-flex justify-content-center text-center bg-white '
                                >
                                    <img
                                        className='my-auto'
                                        style={{
                                            width: 'auto',
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                        }}
                                        onClick={() => {
                                        }} src={item} alt="" />
                                </div>
                            );
                        })}
                    </Carousel>
                ) : <div
                    className="px-3 py-3 text-center w-100 h-100"
                >
                    <img
                        className="img-fluid h-100 w-100"
                        src={noimage}
                    />
                </div>}
            </div>
        </Col>
        <Col md={24} sm={24} className='h-100 py--24 py-2'>
            <div className=' px-3  h-100 overflowy'>

            
            <div className="d-flex align-center justify-content-between">

                {modalImgUrl ?
                    <Lightbox
                        medium={modalImgUrl}
                        large={modalImgUrl}
                        alt=""
                        hideDownload={true}
                        hideZoom={true}
                        onClose={() => {
                            setModalImgUrl()
                        }}
                    />

                    : null}

                <div
                 className="p-0 m-0" style={{ textDecoration: "none" }} >
                    <div className="d-flex align-center" style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <div className="" style={{
                            paddingLeft: '10px'
                        }}>
                            <p className="poppin fw-600 grey-14 pt-3 mb-0">{data?.name}
                            </p>
                            <p className="openSans dark-grey pxl-12  mt-0">{moment(utcChange(data?.createdAt)).format('MMM DD, YYYY')} at {moment(utcChange(data?.createdAt)).format('hh:mm A')}</p>
                        </div>
                    </div>
                </div>
                

            </div>

           
            <Row className=" borderRadius-full bg-white">
                <Col sm={24} md={24} xs={24}  className=" bg-white">

                    <div className=" px-2 py-2 bg-white   w-100">
                        <div className="d-flex align-center pb-2 justify-content-between">
                        <div className=" align-center pb-2 justify-content-between">

                         <p className="grey-14 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Category </p>
                         <p className="grey-14 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Stock</p>
                         <p className="grey-14 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Price</p>
                        </div>
                        <div className=" align-center pb-2 justify-content-between">

                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>:</p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>:</p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>:</p>
                        </div>
                        <div className=" align-center pb-2 justify-content-between">

                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>{data?.cat} wear </p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>{data?.stockQuantity} (piece) </p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> $ {data?.price}  </p>
                        </div>
                        </div>
                         <p className="grey-14 openSans  fw-500 mar-base pb-2" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Description </p>
                         <p className="grey-12 openSans  fw-400 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> {data?.description} </p>
                    </div>
                </Col>
            </Row>
        </div>
        </Col>
    </Row>:
        <Row
        style={{
            height:'80vh',
        }}
    >
        <Col
            md={16}
            sm={24}
            className=' py-3  h-100 border-radius-side2 bg-dark border-radius'
        >
            <div className='h-100 w-100 bg-dark '>
                {data?.images.length ? (
                    <Carousel
                        responsive={responsive}
                        className='home-page-carousel w-100 h-100'
                        style={{ backgroundColor: 'black' }}
                    >
                        {data?.images?.map((item) => {
                            return (
                                <div
                                    style={{ width: '100%', height: '80vh' }}
                                    className='align-center d-flex justify-content-center text-center bg-white '
                                >
                                    <img
                                        className='my-auto'
                                        style={{
                                            width: 'auto',
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                        }}
                                        src={item} alt="" />
                                </div>
                            );
                        })}
                    </Carousel>
                ) : <div
                    className="px-3 py-3 text-center w-100 h-100"
                >
                    <img
                        className="img-fluid h-100 w-100"
                        src={noimage}
                    />
                </div>}
            </div>
        </Col>
        <Col md={8} sm={24} className='h-100 py--24 py-2'>
            <div className=' px-3  h-100 overflowy'>

            
            <div className="d-flex align-center justify-content-between">

                {modalImgUrl ?
                    <Lightbox
                        medium={modalImgUrl}
                        large={modalImgUrl}
                        alt=""
                        hideDownload={true}
                        hideZoom={true}
                        onClose={() => {
                            setModalImgUrl()
                        }}
                    />

                    : null}

                <div
                 className="p-0 m-0" style={{ textDecoration: "none" }} >
                    <div className="d-flex align-center" style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <div className="" style={{
                            paddingLeft: '10px'
                        }}>
                            <p className="poppin fw-600 grey-14 pt-3 mb-0">{data?.name}
                            </p>
                            <p className="openSans dark-grey pxl-12  mt-0">{moment(utcChange(data?.createdAt)).format('MMM DD, YYYY')} at {moment(utcChange(data?.createdAt)).format('hh:mm A')}</p>
                        </div>
                    </div>
                </div>
                

            </div>

           
            <Row className=" borderRadius-full bg-white">
                <Col sm={24} md={24} xs={24}  className=" bg-white">

                    <div className=" px-2 py-2 bg-white   w-100">
                        <div className="d-flex align-center pb-2 justify-content-between">
                        <div className=" align-center pb-2 justify-content-between">

                         <p className="grey-14 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Category </p>
                         <p className="grey-14 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Stock</p>
                         <p className="grey-14 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Price</p>
                        </div>
                        <div className=" align-center pb-2 justify-content-between">

                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>:</p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>:</p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>:</p>
                        </div>
                        <div className=" align-center pb-2 justify-content-between">

                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>{data?.cat} wear </p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>{data?.stockQuantity} (piece) </p>
                         <p className="grey-12 openSans  fw-500 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> $ {data?.price}  </p>
                        </div>
                        </div>
                         <p className="grey-14 openSans  fw-500 mar-base pb-2" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> Description </p>
                         <p className="grey-12 openSans  fw-400 mar-base" style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}> {data?.description} </p>
                        
                       

                    </div>

                </Col>
            </Row>


           
        </div>
        </Col>
       
      
    </Row>
    );
}

export default memo(ViewProductCard);
