import './App.css';
import { useNavigate } from "react-router-dom";
import HomeLayout from './Home/HomeLayout';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import useIsMobile from '../src/redux/IsMobileHook'
import { Lightbox } from 'react-modal-image';

function App() {
  const isMobile = useIsMobile() <= 1024;
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);
  useEffect(() => {
    navigate("/home");
  }, [])
  return (
    <div className=''>
      {userState?.fullScreenImgModal ?
        <Lightbox
          medium={userState?.fullScreenImgModal}
          large={userState?.fullScreenImgModal}
          alt=""
          hideDownload={true}
          hideZoom={true}
          onClose={() => {
          }}
        />
        : null}
      <AnimatePresence initial={true} wait>
        <HomeLayout grey={true} />
      </AnimatePresence>
    </div>

  );
}

export default App;
