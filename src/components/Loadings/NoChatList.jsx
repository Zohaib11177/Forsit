import React from 'react';
import Lottie from 'lottie-react';
import animation from '../lottieAnimations/LottieFiles/NoChatList.json'
import { Button } from "antd";

const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const NoChatList = ({ setNewChat, width, height }) => {
    return (
        <div style={{ textAlign: 'center', flexDirection: 'column', margin: "auto" }} className="d-flex align-items-center justify-content-center">
            <div>
                <Lottie
                    style={{ height: height ? height : "300px", width: width ? width : "300px" }}
                    animationData={animation}
                    loop={false}
                />
            </div>
            <div className=''>
                <p
                    // htmlType='p'
                    className="grey-18 poppin text-center "
                    style={{ border: '0px solid', boxShadow: '0px 0px 0px 0px' }}
                    // onClick={() => setNewChat(true)}
                >
                    No active chats
                <Button
                    htmlType='button'
                    className="text-prime poppin"
                    style={{ border: '0px solid', boxShadow: '0px 0px 0px 0px', fontSize: "20px" }}
                    onClick={() => setNewChat(true)}
                    >
                    Start New Chat
                </Button>
                    </p>
            </div>
        </div>
    )
}

export default NoChatList