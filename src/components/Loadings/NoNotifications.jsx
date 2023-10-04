import React from 'react'
import Lottie from 'lottie-react'
// import animation from '../lottieAnimations/Loading2.json'
// import animation from '../lottieAnimations/loading1.json'
import animation from '../lottieAnimations/LottieFiles/Notification.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: require('./lottieAnimations/loading.json'),
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const NoNotifications = () => {
    return (
        <div style={{ textAlign: 'center', flexDirection: 'column' }} className="d-flex align-items-center justify-content-center">
            <div>
                <Lottie
                    // options={defaultOptions}
                    //  height={150} width={150} 
                    style={{ height: "200px", width: "200px" }}
                    animationData={animation}
                    loop={false}
                />
            </div>
            <div>
                <p style={{ fontSize: '20px' }}>No Notifications</p>
            </div>
        </div>
    )
}

export default NoNotifications