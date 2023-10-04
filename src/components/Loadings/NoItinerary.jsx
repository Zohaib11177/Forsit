import React from 'react'
import Lottie from 'lottie-react'
// import animation from '../lottieAnimations/Loading2.json'
// import animation from '../lottieAnimations/loading1.json'
import animation from '../lottieAnimations/LottieFiles/NoItinerary.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: require('./lottieAnimations/loading.json'),
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const NoItinerary = ({width, height}) => {
    return (
        <div style={{ textAlign: 'center', flexDirection: 'column' }} className="d-flex align-items-center justify-content-center">
            <div>
                <Lottie
                    // options={defaultOptions}
                    //  height={150} width={150} 
                    // style={{ height: height ? height : "150px", maxWidth: width ? width : "150px" }}
                    style={{ height: height ? height : "130px", maxWidth: width ? width : "130px" }}
                    animationData={animation}
                    loop={false}
                />
            </div>
            <div>
                <p style={{ fontSize: '20px' }}>No Itinerary</p>
            </div>
        </div>
    )
}

export default NoItinerary