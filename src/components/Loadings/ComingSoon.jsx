import React from 'react'
import Lottie from 'lottie-react'
// import animation from '../lottieAnimations/Comingsoon.json'
import animation from '../lottieAnimations/LottieFiles/ComingSoon.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  // animationData: require('./lottieAnimations/Comingsoon.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Comingsoon = () => {
  return (
    <div style={{  width: "100%", display: 'flex', justifyContent: "center", alignItems: "center" }}>
      <Lottie
        //   options={defaultOptions}
        //  height={150} width={150} 
        style={{ height: "400px", width: "400px" }}
        animationData={animation}
        loop={false}
      />
      {/* <p style={{ fontSize: '20px' }}>No Data</p> */}
    </div>
  )
}

export default Comingsoon