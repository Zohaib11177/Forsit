import React  from 'react';
import {Modal} from 'antd';
import {
    CloseCircleOutlined,
} from '@ant-design/icons';
import useIsMobile from "src/redux/IsMobileHook";
import ViewProductCard from 'src/components/ViewProductCard';






const ViewProductModal = ({ isModalOpen, setIsModalOpen, data }) => {
    // // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [postshareModal, setPostshareModal] = useState(false);
    // const [shareItem, setshareItem] = useState(null);
    // const [deleteRecordId, setdeleteRecordId] = useState(false);
    // const [cmtDelete, setCmtDelete] = useState(false);
    // const [feedDelete, setFeedDelete] = useState(false);
    const isMobile = useIsMobile() <= 700;


    const handleOk = () => {
        setIsModalOpen(false);
        const currentUrl = window.location.href;
        const updatedUrl = currentUrl.replace(/[\?&]postId=[^&]+/, '');
        window.history.replaceState({}, document.title, updatedUrl);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        const currentUrl = window.location.href;
        const updatedUrl = currentUrl.replace(/[\?&]postId=[^&]+/, '');
        window.history.replaceState({}, document.title, updatedUrl);
    };



    return (
        <>
            {isMobile ?

                <Modal
                    width='90vw'
                    open={isModalOpen}
                    closeIcon={
                        <button className='border-0 bg-white text-dark mt-base me-1  text-center d-flex p-1 pxl-24 rounded-circle'>
                            <CloseCircleOutlined className='pxl-24' />
                        </button>
                    }
                    onOk={handleOk}
                    onCancel={handleCancel}
                    className='anti-pad'
                    okButtonProps={false}
                    footer={null}>
                    <div className='px-1 py-0 bg-red'>
                        <ViewProductCard
                            data={data}
                        />
                    </div>
                </Modal>
                :
                <Modal
                    centered
                    width={(data?.IsPostShared && data?.OrignalPost?.PostImages?.length == 0) || (!data?.IsPostShared && data?.Images?.length == 0) ? '50vw' : "90vw"}
                    open={isModalOpen}

                    closeIcon={
                        <button className='border-0 bg-white text-dark m-custom text-center d-flex p-2 pxl-24 rounded-circle'>
                            <CloseCircleOutlined className='pxl-24' />
                        </button>
                    }
                    onOk={handleOk}
                    onCancel={handleCancel}
                    className='anti-pad productDetailDialog'
                    footer={null}
                >
                    <ViewProductCard
                        data={data}
                    />

                </Modal >
            }
            {/* 11111 */}
        </>
    );
};
export default ViewProductModal;