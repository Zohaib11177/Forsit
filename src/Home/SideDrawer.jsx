import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import Sider from 'src/components/Sider';
import useIsMobile from '../redux/IsMobileHook'

const SideDrawer = ({open, setOpen}) => {
  //   const [open, setOpen] = useState(false);
  const isMobile = useIsMobile() <= 250;
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      
      <Drawer
        title={null}
        placement={placement}
        width={isMobile ? '100vw' : 250}
        onClose={onClose}
        open={open}
        
      >
       <Sider />
      </Drawer>
    </>
  );
};
export default SideDrawer;