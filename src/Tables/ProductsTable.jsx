import React, { useEffect, useState } from 'react';
import { Input, Select, Table } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { utcChange } from 'src/helper';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import EditProductModal from 'src/Modals/EditProductModal';
import ViewProductModal from 'src/Modals/ViewProductModal';
const onChange = (pagination, filters, sorter, extra) => {
};
const ProductsTable = () => {
  const [addp, setaddp] = useState(false)
  const [viewp, setviewp] = useState(false)
  const [datac, setdatac] = useState(null)
  const [datav, setdatav] = useState(null)
  const [data, setdata] = useState(null)
  const [filter, setfilter] = useState("")
  const [cat, setcat] = useState("")

  const datan = useSelector(state => state?.userReducer?.getProductData);
  const loading = useSelector(state => state?.userReducer?.getProductLoading);
  useEffect(() => {
    if (datac) {
      setaddp(true)
    }

  }, [datac])

  useEffect(() => {
    if (addp == false) {
      setdatac(null)
    }

  }, [addp])

  useEffect(() => {
    if (datav) {
      setviewp(true)
    }

  }, [datav])
  
  useEffect(() => {
    if (viewp == false) {
      setdatav(null)
    }

  }, [viewp])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),


    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 3,
      },
    },
    {
      title: 'Stock Quantity ',
      dataIndex: 'stockQuantity',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 3,
      },

    },
    {
      title: 'Category',
      dataIndex: 'cat',
      sorter: (a, b) => a.cat.localeCompare(b.cat),
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      sorter: {
        compare: (a, b) => a.createdAt - b.createdAt,
        multiple: 1,
      },
      render: (createdAt, record) => (
        <span>{moment(utcChange(createdAt)).format('MMM DD, YYYY')}</span>
      ),
    },
    {
      title: 'Stock Status',
      dataIndex: 'stockQuantity',
      render: (stockQuantity, record) => (
        stockQuantity > 50 ? <span className='px-3 py-2 border border-success text-success rounded' >Stocked</span> : <span className='px-3 py-2 border border-danger text-danger  rounded' >Low(Restock)</span>
      ),
    },
    {
      title: 'Actions',
      dataIndex: '_id',
      render: (_id, record) => (
        <div>

          <button className='px-1 mx-1 bg-base rounded border-0 text-success  pxl-16'
            onClick={() => {
              setdatac(record)
            }}
          ><EditOutlined /></button>
          <button className='px-1 bg-base rounded border-0 text-success  pxl-16'
            onClick={() => {
              setdatav(record)
            }}
          ><EyeOutlined /></button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    if (datan) {
      let ndata;
      if (filter !== "" && cat !== "") {
        ndata = datan.filter((item) => {

          return item?.name.toLowerCase().includes(filter) && item?.cat == cat
        })
        setdata(ndata)
      } else if (filter == "" && cat !== "") {
        ndata = datan.filter((item) => {

          return item?.cat == cat
        })
        setdata(ndata)
      } else if (filter !== "" && cat == "") {
        ndata = datan.filter((item) => {
          return item?.name.toLowerCase().includes(filter)
        })
        setdata(ndata)
      } else {
        setdata(datan)
      }
    }
  }, [datan, filter, cat])
  return (
    <>

      <ViewProductModal
        isModalOpen={viewp}
        setIsModalOpen={setviewp}
        data={datav}
      />
      <EditProductModal
        productModalOpen={addp}
        setProductModalOpen={setaddp}
        data={datac}
      />
      <div className='w-100 vxa' style={{ overflowX: "auto" }}>
        <div className='w-100 row my-2' >
          <div className='col-md-3 mx-2'>
            <Select
              className='w-100'
              value={cat}
              onChange={(e) => {

                console.log(e)
                setcat(e)
              }}
              options={[
                { label: "All", value: "" },
                { label: "Men", value: "Men" },
                { label: "Women", value: "Women" },
                { label: "Kids", value: "Kids" }
              ]}
            />
          </div>
          <div className='col-md-3'>
            <Input value={filter} placeholder='Search' onChange={(e) => { setfilter(e.target.value) }} />
          </div>
        </div>
        <Table columns={columns} loading={loading} dataSource={data} onChange={onChange} />
      </div>
    </>
  )
};
export default ProductsTable;