import React from 'react'
import Lottie from 'lottie-react'
import animation from '../lottieAnimations/LottieFiles/No Data.json'

const defaultOptions = {
  loop: false,
  autoplay: true,
  // animationData: require('./lottieAnimations/Nodata.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Nodata = ({ lottieWidth, lottieHeight }) => {

  // lootieWidth ad lottieHeight is used to change the size if these value given set the size as per given prop
  // if there is no prop  given it will set the the default size 
  return (
    <div style={{ width: "100%", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
      <Lottie
        //   options={defaultOptions}
        //  height={150} width={150} 
        // style={{ height: "400px", width: "400px" }}
        style={{ height: lottieHeight ?? "250px", width: lottieWidth ?? "250px" }}
        animationData={animation}
        loop={false}
      />
      <p style={{ fontSize: '20px' }} className='poppin'>No Data Found</p>
    </div>
  )
}

export default Nodata