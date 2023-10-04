import { Col, Row, Input, Button } from 'antd';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import product from '../assets/images/productsIcon.svg';
import service from '../assets/images/servicesIcon.svg';
import job from '../assets/images/jobsIcon.svg';
import event from '../assets/images/eventsIcon.svg';
import home from '../assets/images/feedsIcon.svg';
import { useState } from 'react';
import { imageUrl } from 'src/helper';
import { CloseOutlined, CloseCircleOutlined } from '@ant-design/icons';
import useIsMobile from '../redux/IsMobileHook';
import { useEffect, useRef } from 'react';

const Sidebar = ({ closeSideBar, isAuthenticated, Placescat }) => {

    const isSmallMobile = useIsMobile() <= 450;
    const sidebarRef = useRef(null);

    const handleClose = () => {
        closeSideBar();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            handleClose();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const Isactive = (item) => {
        let ok = window.location.pathname.includes(item) ? true : false;
        return ok;
    };

    const imageStyles = isSmallMobile ? { width: '18px' } : { width: '22px' }
    const spanStyles = isSmallMobile ? { fontSize: '16px' } : { fontSize: '20px' }

    return (

        <div className="sidebar" style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }} ref={sidebarRef}>
       
            <CloseOutlined className="close-icon " onClick={handleClose} style={spanStyles} />
        
            <div className='sidebar-content'>
                {isAuthenticated == true ? (
                    <div className='my-1'>
                        <NavLink
                            onClick={() => handleClose()}
                            to='/home '
                            className={
                                Isactive('/dashboard')
                                    ? 'nowrap mx-2  menu-item-dropdown-active py-1 my-0'
                                    : 'nowrap mx-2  menu-item-dropdown py-1 my-0'
                            }
                        >
                            <img src={home} className='mx-2 img-drop' style={imageStyles} />
                            <span style={spanStyles}>Feeds</span>
                        </NavLink>
                    </div>
                ) : (
                    <div className='my-1'>
                        <NavLink
                            onClick={() => handleClose()}

                            to='/home '
                            className={
                                Isactive('/home')
                                    ? 'nowrap mx-2  menu-item-dropdown-active py-1 my-0'
                                    : 'nowrap mx-2  menu-item-dropdown py-1 my-0'
                            }
                        >
                            <img src={home} className='mx-2 img-drop' style={imageStyles} />
                            <span style={spanStyles}>Home</span>
                        </NavLink>
                    </div>
                )}
                <p className='dropdown-heading mx-2' style={spanStyles}>HALAL FINDER</p>
                {Placescat?.map((item) => {
                    return (
                        <div className='my-1'>
                            <NavLink
                                onClick={() => handleClose()}

                                to={`/places?place=${item?.Name}`}
                                className={
                                    Isactive('restaurant')
                                        ? 'nowrap mx-2  menu-item-dropdown-active py-1 my-0'
                                        : 'nowrap mx-2  menu-item-dropdown py-1 my-0'
                                }
                            >
                                <img
                                    src={imageUrl + item?.Icon}
                                    className='mx-2 img-hover'
                                    style={imageStyles}
                                />
                                <span
                                    //   style={{
                                    //     marginLeft: '10px',
                                    //     marginTop: '2px',
                                    //     fontWeight: '300',
                                    //   }}
                                    style={spanStyles}
                                >
                                    {item?.Name}
                                    {/* Restaurant */}
                                </span>
                            </NavLink>
                        </div>
                    );
                })}

                <p className='dropdown-heading mx-2' style={spanStyles}>
                    HALAL CLASSIFIED
                </p>

                <div className='my-1'>
                    <NavLink
                        onClick={() => handleClose()}

                        to='/products'
                        className={
                            Isactive('products')
                                ? 'nowrap mx-2  menu-item-dropdown-active py-1 my-0'
                                : 'nowrap mx-2  menu-item-dropdown py-1 my-0'
                        }
                    >
                        <img src={product} className='mx-2 img-drop' style={imageStyles} />
                        <span style={spanStyles}>Product</span>
                    </NavLink>
                </div>
                <div className='my-1'>
                    <NavLink
                        onClick={() => handleClose()}

                        to='/services '
                        className={
                            Isactive('services')
                                ? 'nowrap mx-2  menu-item-dropdown-active py-1 my-0'
                                : 'nowrap mx-2  menu-item-dropdown py-1 my-0'
                        }
                    >
                        <img src={service} className='mx-2 img-drop' style={imageStyles} />
                        <span
                            //   style={{
                            //     marginLeft: '10px',
                            //     marginTop: '2px',
                            //     fontWeight: '300',
                            //   }}
                            style={spanStyles}
                        >
                            Services
                        </span>
                    </NavLink>
                </div>
                <div className='my-1'>
                    <NavLink
                        onClick={() => handleClose()}

                        to='/events'
                        className={
                            Isactive('events')
                                ? 'nowrap mx-2  menu-item-dropdown-active py-1 my-0'
                                : 'nowrap mx-2  menu-item-dropdown py-1 my-0'
                        }
                    >
                        <img src={event} className='mx-2 img-drop' style={imageStyles} />
                        <span
                            //   style={{
                            //     marginLeft: '10px',
                            //     marginTop: '2px',
                            //     fontWeight: '300',
                            //   }}
                            style={spanStyles}
                        >
                            Events
                        </span>
                    </NavLink>
                </div>
                <p className='dropdown-heading mx-2' style={spanStyles}>HALAL HELP</p>

                <div className='my-1'>
                    <NavLink
                        onClick={() => handleClose()}

                        to='/jobs'
                        className={
                            Isactive('jobs')
                                ? 'nowrap mx-2  menu-item-dropdown-active py-1 my-0'
                                : 'nowrap mx-2  menu-item-dropdown py-1 my-0'
                        }
                    >
                        <img src={job} className='mx-2 img-drop' style={imageStyles} />
                        <span
                            style={spanStyles}
                        //   style={{
                        //     marginLeft: '10px',
                        //     marginTop: '2px',
                        //     fontWeight: '300',
                        //   }}
                        >
                            Jobs
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
