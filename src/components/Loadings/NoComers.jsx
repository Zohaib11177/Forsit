import React from 'react'
import Lottie from 'lottie-react'
// import animation from '../lottieAnimations/Nodata.json'
import animation from '../lottieAnimations/LottieFiles/NoComers.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: require('./lottieAnimations/Nodata.json'),
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const NoComers = () => {
    return (
        <div style={{ textAlign: 'center', flexDirection: 'column' }} className="d-flex align-items-center justify-content-center">
            <div>
                <Lottie
                    // options={defaultOptions}
                    //  height={150} width={150} 
                    style={{ height: "150px", width: "200px" }}
                    animationData={animation}
                    loop={false}
                />
            </div>
            <div>
                <p style={{ fontSize: '20px' }}>No Suggestions</p>
            </div>
        </div>
    )
}

export default NoComers