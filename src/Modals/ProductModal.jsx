import { Modal, Form, Input, Select, Button } from "antd";
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";

import { createProduct } from "src/redux/actions/userActions";
import { handleUploadImages } from "src/UploadImage";

dayjs.extend(customParseFormat);


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    console.log(reader)
    reader.onerror = (error) => reject(error);
  });

const ProductModal = ({ productModalOpen, setProductModalOpen }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer)
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState([]);
  const [images, setimages] = useState([]);

  const resetFunc = () => {
    setProductModalOpen(false);
    form.resetFields();

  }

  const handleChange = async ({ fileList: newFileList }) => {
    let imgg = await getBase64(newFileList[0].originFileObj);
    setFileList([...fileList, imgg])
  }

  const onChangeimg = async (newimgs) => {
    const newarray = []
    for (const el of newimgs) {
      newarray.push({ image: el })
    }
    console.log("newarray", newarray)
    const newobj = { images: newarray }
    const response = await handleUploadImages(newobj)
    let moreimage = [...images, ...response];
    setimages(moreimage);
  };

  return (
    <Modal
      title={<p>Add Product</p>}
      centered
      open={productModalOpen}
      onOk={() => setProductModalOpen(false)}
      onCancel={() => setProductModalOpen(false)}
      footer={null}
      style={{ margin: '20px' }}
    >
      <Form
        colon={false}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        form={form}
        style={{ maxWidth: 600 }}
        onFinish={(values) => {
          values = {
            ...values,
            images: images
          }
          dispatch(createProduct(values, resetFunc,));
        }}
        id="post-modal-form"
      >

        <Form.Item name="name" label="Name"
          rules={[
            {
              required: true,
              message: "Please enter name",
            },
          ]}
        >
          <Input className="border" />
        </Form.Item>
        <Form.Item name="price" label="Price"
          rules={[
            {
              required: true,
              message: "Please Price Price",
            },
          ]}
        >
          <Input type="number" className="border" />
        </Form.Item>
        <Form.Item name="stockQuantity" label="Stock Quantity"
          rules={[
            {
              required: true,
              message: "Please enter stock quantity",
            },
          ]}
        >
          <Input type="number" className="border" />
        </Form.Item>
        <Form.Item name="cat" label="Category"
          rules={[
            {
              required: true,
              message: "Please Select Category",
            },
          ]}
        >
          <Select
            name="cat"
            options={[
              { label: "Men", value: "Men" },
              { label: "Women", value: "Women" },
              { label: "Kids", value: "Kids" }
            ]}
          />
        </Form.Item>
        <Form.Item name="description" label="Description"
          rules={[
            {
              required: true,
              message: "Please Enter Description",
            },
          ]}
        >
          <TextArea
            className="borderRadius-full border py-2 w-100"
            rows={4}
          />
        </Form.Item>
        <div className="d-flex">
          <p className="mx-3">Add images</p>
          <input type="file"
            multiple={true}
            onChange={(e) => {
              var newimgs = e.target.files
              return onChangeimg(newimgs)
            }} />
        </div>
        <div className="w-100 row my-2" style={{ minHeight: "200px" }}>
          {images?.length ?
            images?.map((item, index) => {
              return (
                <div className="col-md-4" >
                  <div className="w-100 px-2" >
                    <div style={{ height: "100px", overflow: "hidden", paddingLeft: "2px", paddingRight: "2px" }} className="d-flex justify-content-center align-center  text-center border rounded bg-white w-100" >
                      <img
                        className="  my-auto"
                        style={{ width: "auto", maxWidth: "100%", maxHeight: "100%" }}
                        src={item}
                      />
                    </div>
                  </div>
                </div>
              )
            })
            : <div className="w-100 h-100 align-center d-flex justify-content-center">
              <p className="text-center my-auto"> No Images</p>
            </div>

          }
        </div>
        <Form.Item wrapperCol={24}>
          <div
            className="mt-2 pt-3 d-flex justify-content-end"
            style={{ borderTop: "1px solid #E2E2EA" }}
          >
            <Button
              className="border-0 text-white text-center rounded-pill me-2 py-2 bg-t-grey px-4"
              htmlType="submit"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              disabled={userState.createProductLoading}
              loading={userState.createProductLoading}
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};


export default ProductModal;
