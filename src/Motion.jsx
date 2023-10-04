import './App.css';

// import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Motion({children}) {
 

  return (
    <motion.div
    initial={{ x: 0 ,opacity:0 }}
    animate={{ x: 0,opacity:1 }}
    // exit={{ x: -100, opacity: 0 }}
    transition={{ type: "spring", duration: 2 }}
  >
    {children}
  </motion.div>

  );
}

export default Motion;
