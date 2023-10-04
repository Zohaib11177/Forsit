import { userConstants } from '../constants/userConstants'

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.createProductRequest:
            return {
                ...state,
                createProductLoading: action.loading
            };
        case userConstants.createProductSuccess:
            return {
                ...state,
                createProductLoading: action.loading
            };
        case userConstants.createProductFailure:
            return {
                ...state,
                createProductLoading: action.loading
            };
        case userConstants.EditUProductRequest:
            return {
                ...state,
                EditUProductLoading: action.loading
            };
        case userConstants.EditUProductSuccess:
            return {
                ...state,
                EditUProductLoading: action.loading
            };
        case userConstants.EditUProductFailure:
            return {
                ...state,
                EditUProductLoading: action.loading
            };
        case userConstants.getProductRequest:
            return {
                ...state,
                getProductLoading: action.loading
            };
        case userConstants.getProductSuccess:
            return {
                ...state,
                getProductLoading: action.loading,
                getProductData: action.payload
            };
        case userConstants.getProductFailure:
            return {
                ...state,
                getProductLoading: action.loading
            };

        default:
            return state;
    }
};
export default userReducer;