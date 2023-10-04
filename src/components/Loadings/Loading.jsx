import React from 'react'
import Lottie from 'lottie-react'
// import animation from '../lottieAnimations/Loading2.json'
// import animation from '../lottieAnimations/loading1.json'
import animation from '../lottieAnimations/LottieFiles/Loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  // animationData: require('./lottieAnimations/loading.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Loading = () => {
  return (
    <div style={{height:"80vh", display: 'flex',justifyContent:"center", alignItems:"center" }}>
      <Lottie 
    //   options={defaultOptions}
      //  height={150} width={150} 
       style={{height:"250px",width:"250px"}}
    animationData={animation}
     loop={true}
      />
      {/* <p style={{ fontSize: '20px' }}>No Data</p> */}
    </div>
  )
}

export default Loading