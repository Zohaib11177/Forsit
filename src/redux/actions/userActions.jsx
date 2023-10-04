import { userConstants } from "src/redux/constants/userConstants";
import {
    EditUProductApi, getProductApi, createProductApi,
} from "src/redux/api";
import { message } from "antd";

export const getProduct = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getProductRequest,
        loading: true,
    });
    try {
        const response = await getProductApi(values);
        console.log(response?.data)
        if (response.data?.success) {
            dispatch({
                type: userConstants.getProductSuccess,
                payload: response?.data?.allProducts,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getProductFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getProductFailure,
            payload: null,
            loading: false,
        });
    }
};
export const createProduct = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.createProductRequest,
        loading: true,
    });
    try {
        const response = await createProductApi(values);
        console.log("s",response) 
        if (response.data?.success == true) {
            dispatch({
                type: userConstants.createProductSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
            message.success(response?.data?.message);
            dispatch(getProduct());
        } else {
            dispatch({
                type: userConstants.createProductFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.message ? response.data.message : response.data.message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.createProductFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};
export const EditUProduct = (values,id, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.EditUProductRequest,
        loading: true,
    });
    try {
        const response = await EditUProductApi(values,id);
        console.log("s",response) 
        if (response.data?.success == true) {
            dispatch({
                type: userConstants.EditUProductSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
            message.success(response?.data?.message);
            dispatch(getProduct());
        } else {
            dispatch({
                type: userConstants.EditUProductFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.message ? response.data.message : response.data.message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.EditUProductFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};