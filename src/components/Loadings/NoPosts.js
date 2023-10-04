import React from 'react'
import Lottie from 'lottie-react'
// import animation from '../lottieAnimations/Loading2.json'
// import animation from '../lottieAnimations/loading1.json'
import animation from '../lottieAnimations/LottieFiles/NoPost.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: require('./lottieAnimations/loading.json'),
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const NoPosts = () => {
    return (
        <div style={{ textAlign: 'center', flexDirection: 'column' }} className="d-flex align-items-center justify-content-center w-100">
            <div>
                <Lottie
                    // options={defaultOptions}
                    //  height={150} width={150} 
                    style={{ height: "400px", width: "400px" }}
                    animationData={animation}
                    loop={false}
                />
            </div>
            <div>
                <p style={{ fontSize: '20px' }}>No Posts</p>
            </div>
        </div>
    )
}

export default NoPosts