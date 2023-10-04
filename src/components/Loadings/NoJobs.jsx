import React from 'react'
import Lottie from 'lottie-react'
// import animation from '../lottieAnimations/Loading2.json'
// import animation from '../lottieAnimations/loading1.json'
import animation from '../lottieAnimations/LottieFiles/jobSearch.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: require('./lottieAnimations/loading.json'),
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const NoJobs = () => {
    return (
        <div style={{ textAlign: 'center', flexDirection: 'column' }} className="d-flex align-items-center justify-content-center">
            <div>
                <Lottie
                    // options={defaultOptions}
                    //  height={150} width={150} 
                    style={{ height: "250px", width: "250px" }}
                    animationData={animation}
                    loop={false}
                />
            </div>
            <div>
                <p style={{ fontSize: '20px' }}>No Jobs</p>
            </div>
        </div>
    )
}

export default NoJobs