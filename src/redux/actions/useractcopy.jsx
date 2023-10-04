import { userConstants } from "src/redux/constants/userConstants";
import {
    registerUserApi, loginUserApi, eventCreateApi, RefreshApi,
    getAllPlacesApi, getProductCategoriesApi,
    getServiceCategoriesApi, createServiceApi, createProductApi,
    getAllServicesApi, getAllPlaceCategoriesApi, createPlaceApi,
    createJobApi, createPostApi, getAllJobsApi, getAllEventsApi,
    getPlaceCategoryListApi, getEventsListApi, getJobsListApi, getAllProductsApi,
    makeFavouriteApi, getFavCategoryListApi, getFavouriteCheckApi,
    makeUnFavouriteApi, createReviewApi, getReviewsByRecordApi,
    getFeedsApi, likeFeedApi, commentFeedApi,
    FollowUserApi, getCommentsFeedApi, dislikeFeedApi,
    getTimelineApi, getServiceApi, getProductApi,
    getUserProfileApi, updateUserProfileApi, getNewComersApi,
    createReportApi, getAllUsersApi, getConnectedUsersApi,
    getUserChatApi, insertChatMessageApi, getUserPostImagesApi,
    getUserNotifications, activeDeactiveApi, editCommentFeedApi,
    deleteCommentFeedApi, markAsReadApi, createItineraryApi, updateItineraryApi,
    tripCreateApi, getItineraryByDateApi, deleteItineraryApi,
    getTripApi, updatePlaceApi, eventUpdateApi,
    getTimelineTripApi, updateProductApi, getPlaceApi,
    editItineraryApi, getEventApi, getJobApi,
    getTripbyidApi, updateJobApi, updateServiceApi,
    SharePostApi, forgotPswApi, resetPswApi,
    getTimelineTripdetailApi, deletePostApi, startTripApi,
    getTimelinecategorydetailApi, contactUsCreateApi,
    getSuggestedplaceApi, confirmEmailApi, getSearchAllApi,
    getplacebyidApi, getAllSearchPostsApi, getPostByIdApi,
    getTagsByCategoryIdApi, getRoutePlacesApi, visitTripApi,
    updatePostApi, createViewApi, getPostbyIdApi, chatMarkAsReadApi, getCountryApi, resendEmailApi, getCitiesApi, getAllUsersUnPageApi, getRecentlyAddedApi, getPlaceLatLongApi, placeRouteLanLongApi, placeRouteLatLongApi, RefreshtokenApi, notificationMarkAsRead, notificationMarkAsReadApi, confirmResettokenApi
} from "src/redux/api";
import { message, notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
const loginUserId = localStorage.getItem("Id")

export const setUserEmail = (email) => async (dispatch) => {
    dispatch({
        type: userConstants.setUserEmail,
        payload: email,
    });
}

export const setShowEmailMessageAction = () => async (dispatch) => {
    dispatch({
        type: userConstants.setShowEmailMessage,
        payload: true,
    });
}

export const registerUser = (values, handleCancel, login = () => { }) => async (dispatch) => {

    dispatch({
        type: userConstants.registerUserRequest,
        loading: true,
    });
    try {
        const response = await registerUserApi(values);
        if (response.data.status_code === 200) {
            dispatch({
                type: userConstants.registerUserSuccess,
                payload: response?.data.Data,
                message: "User Registered Successfully",
                loading: false,
            });
            dispatch({
                type: userConstants.setUserEmail,
                payload: values.Email
            })
            // var currentURL = window.location.origin + "?email=" + values.Email;
            // window.history.pushState(null, null, currentURL);
            // const url = new URL(window.location);
            // console.log(url, values.webUrl)
            // url.searchParams.set('email', values.Email);
            // window.history.pushState({}, '', url);
            handleCancel();
            login();
            // message.success("Verify your Email");
        } else {
            dispatch({
                type: userConstants.registerUserFailure,
                loading: false
            });
            handleCancel();
            message.error(response?.data?.data?.Message ? response.data.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.registerUserFailure,
            message: error.response,
            loading: false,
        });
        handleCancel();
        message.error(error);
    }
};
export const confirmEmail = (values, setopenLogin = () => { }) => async (dispatch) => {

    dispatch({
        type: userConstants.confirmEmailRequest,
        loading: true,
    });
    try {
        const response = await confirmEmailApi(values);
        if (response.data) {
            let newUrl = window.location.href.split("?")[0]
            window.history.pushState({ path: newUrl }, '', newUrl);
            dispatch({
                type: userConstants.confirmEmailSuccess,
                payload: response?.data.Data,
                loading: false,
            });

            setopenLogin(true);
            message.success("Email Confirmed");
        }
    } catch (error) {
        dispatch({
            type: userConstants.confirmEmailFailure,
            message: error.response,
            loading: false,
        });
        message.error(error);
    }
};
export const confirmResettoken = (values, setopenLogin = () => { },setopenmessage = ()=>{ }) => async (dispatch) => {

    // dispatch({
    //     type: userConstants.confirmResettokenRequest,
    //     loading: true,
    // });
    try {
        const response = await confirmResettokenApi(values);
        if (response.data?.status_code == 200) {
            // let newUrl = window.location.href.split("?")[0]
            // window.history.pushState({ path: newUrl }, '', newUrl);
            // dispatch({
            //     type: userConstants.confirmResettokenSuccess,
            //     payload: response?.data.Data,
            //     loading: false,
            // });

            setopenLogin(true);
            // console.log(response)
            // message.success("Resettoken Confirmed");
        }else{
            
            // message.error("Your reset password token has been expired");
            setopenmessage(true)
        }
    } catch (error) {
        // dispatch({
        //     type: userConstants.confirmResettokenFailure,
        //     message: error.response,
        //     loading: false,
        // });
        message.error(error);
    }
};

export const resendEmail = (values = () => { }) => async (dispatch) => {

    dispatch({
        type: userConstants.resendEmailRequest,
        loading: true,
    });
    try {
        const response = await resendEmailApi(values);
        if (response.data) {
            // let newUrl = window.location.href.split("?")[0]
            // window.history.pushState({ path: newUrl }, '', newUrl);
            dispatch({
                type: userConstants.resendEmailSuccess,
                payload: response?.data.Data,
                message: "Email sent successfully",
                loading: false,
            });
            message.success("Email sent");
        }
    } catch (error) {
        dispatch({
            type: userConstants.resendEmailFailure,
            message: error.response,
            loading: false,
        });
        message.error(error);
    }
};

export const FollowUser = (values, type, id, resetFunc = () => { }) => async (dispatch) => {

    dispatch({
        type: userConstants.FollowUserRequest,
        followid: values?.UserId,
        loading: true,
    });
    try {
        const response = await FollowUserApi(values);
        if (response.data.status_code == 200) {
            dispatch({
                type: userConstants.FollowUserSuccess,
                payload: response?.data.Data,
                followid: null,
                message: "Following Successfully",
                loading: false,
            });
            // setTimeout(() => {
            if (type == "service") {
                dispatch(getService({ Id: id, userid: values?.FollowerId }))
            } else if (type == "product") {
                dispatch(getProduct({ Id: id, userid: values?.FollowerId }))
            } else if (type == "event") {
                // dispatch(getAllEvents({ UserId: values?.FollowerId , pageSize: values?.pageSize , currentPageNumber: values?.currentPageNumber}))
                dispatch(getEvent({ Id: id, userid: values?.FollowerId }))
            } else if (type == "job") {
                dispatch(getJob({ Id: id, userid: values?.FollowerId }))
                // dispatch(getAllJobs({ UserId: values?.FollowerId , pageSize: values?.pageSize , currentPageNumber: values?.currentPageNumber}))
                console.log(values?.FollowerId);
            } else if (type == "profile") {
                dispatch(getUserProfile({ UserId: id, LoggedInUserId: values?.FollowerId }))
                // dispatch(getAllJobs(values.FollowerId))
            } else if (type == 'newComer') {
                dispatch(getNewComersAction('', values.FollowerId))
            } else if (type == 'searchAll') {
                dispatch({
                    type: userConstants?.getSearchAllUpdateSuccess,
                    payload: values?.UserId
                })
            } else if (type == 'searchPeople') {
                resetFunc()
                // dispatch({
                //     type: userConstants?.getSearchPeopleUpdateSuccess,
                //     payload: values?.UserId
                // })
            }
            // }, [1000])
            // message.success("Following Successfully");
        } else {
            dispatch({
                type: userConstants.FollowUserFailure,
                followid: null,
                loading: false
            });
            message.error(response?.data?.data?.Message ? response.data.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.FollowUserFailure,
            message: error.response,
            loading: false,
        });
        message.error(error);
    }
};

export const loginUser = (values, setopenLogin) => async (dispatch, getState) => {
    const state = getState();
    const loadingState = state?.userReducer

    console.log(loadingState);
    dispatch({
        type: userConstants.loginUserRequest,
        loading: true,
    });
    try {
        const response = await loginUserApi(values);
        if (response.data.data.IsAuthenticated) {
            dispatch({
                type: userConstants.loginUserSuccess,
                payload: response?.data.data,
                loading: false,
            });
            setopenLogin(false)
            dispatch(loginModal(false))
            localStorage.setItem("Id", response.data.data.Id ? response.data.data.Id : "")
            localStorage.setItem("Token", response.data.data.Token ? response.data.data.Token : "")
            localStorage.setItem("RefreshToken", response.data.data.RefreshToken ? response.data.data.RefreshToken : "")

            // localStorage.setItem("userToken", response.data.data.Token ? response.data.data.Token : "")
            // window.location.href = /email-sent/${values.Email};
            // Swal.fire({
            //   icon: 'success',
            //   title: 'Success',
            //   text: 'Gym Registered',
            //   confirmButtonText: 'Go to Login'
            // }).then((result) => {
            //   if (result.isConfirmed) {
            //     window.location.href = login
            //   }
            // })
        } else {
            dispatch({
                type: userConstants.loginUserFailure,
                message: response.data.data.Message,
                payload: null,
                loading: false,
            });

            // Swal.fire({
            //   icon: 'error',
            //   title: 'Error',
            //   text: response.data.Data.Message,
            // })
            // message.error(response.data.Message , );

            if (response.data.Message.includes("Please confirm your email")) {
                // dispatch({
                //     type: userConstants.setShowEmailMessage,
                //     message: response.data.data.Message,
                //     payload: true,
                //     userEmail: values.Email
                // });
                const content = (
                    <>
                        {response.data.Message}
                        <span onClick={() => dispatch(resendEmail({ email: values?.Email, webUrl: window.location.origin + '/' }))} className="send-mail text-prime">&nbsp; Resend Email</span>
                    </>
                );
                message.error(content, 5)
            } else {
                message.error(response.data.Message, 5)
            }

        }
    } catch (error) {
        message.error("Something weng wrong");
        dispatch({
            type: userConstants.registerUserFailure,
            message: error.response,
            payload: null,
            loading: false,
        });
    }
};

export const RefreshtokenUser = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.loginUserRequest,
        loading: true,
    });
    try {
        const response = await RefreshtokenApi(values);
        if (response.data?.data?.Id) {
            let user = response.data?.data
            user.IsAuthenticated = true
            dispatch({
                type: userConstants.loginUserSuccess,
                payload: user,
                message: "Logged In Successfully",
                loading: false,
            });
            localStorage.setItem("Id", response.data?.data?.Id ? response.data?.data?.Id : "")
            localStorage.setItem("RefreshToken", response.data?.data?.RefreshToken ? response.data?.data?.RefreshToken : "")
            localStorage.setItem("Token", response.data.data.Token ? response.data.data.Token : "")

            // window.location.href = /email-sent/${values.Email};
        } else {
            dispatch({
                type: userConstants.loginUserFailure,
                payload: null,
                loading: false,
            });
            // message.error(response?.data?.data?.Message ? response.data.data.Message : response.data.Message)
        }
    } catch (error) {
        dispatch({
            type: userConstants.loginUserFailure,
            message: error.response,
            payload: null,
            loading: false,
        });
        message.error(error);
    }
};
export const RefreshUser = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.loginUserRequest,
        loading: true,
    });
    try {
        const response = await RefreshApi(values);
        if (response.data?.data?.Id) {
            let user = response.data?.data
            user.IsAuthenticated = true
            dispatch({
                type: userConstants.loginUserSuccess,
                payload: user,
                message: "Logged In Successfully",
                loading: false,
            });
            localStorage.setItem("Id", response.data?.data?.Id ? response.data?.data?.Id : "")

            // localStorage.setItem("userToken", response.data.data.Token ? response.data.data.Token : "")
            // window.location.href = /email-sent/${values.Email};
        } else {
            dispatch({
                type: userConstants.loginUserFailure,
                payload: null,
                loading: false,
            });
            // message.error(response?.data?.data?.Message ? response.data.data.Message : response.data.Message)
        }
    } catch (error) {
        dispatch({
            type: userConstants.loginUserFailure,
            message: error.response,
            payload: null,
            loading: false,
        });
        message.error(error);
    }
};

export const getAllPlaceCategories = (loadCats = (param, id) => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllPlaceCategoryRequest,
        loading: true,
    });
    try {
        const response = await getAllPlaceCategoriesApi();
        if (response.data) {

            dispatch({
                type: userConstants.getAllPlaceCategorySuccess,
                payload: response.data?.data,
                loading: false,
            });

            if (response?.data?.data?.length)
                loadCats(response?.data?.data[0]?.Name, response?.data?.data[0]?.RecordId)

        } else {
            dispatch({
                type: userConstants.getAllPlaceCategoryFailure,
                payload: null,
                loading: false,
            });
            // Swal.fire({
            //   icon: 'error',
            //   title: 'Error',
            //   text: response.data.Data.Message,
            // })
            // message.error(response.data.Data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.getAllPlaceCategoryFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getAllPlaces = (values, resetFunc = () => { }, isScroll = true) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllPlacesRequest,
        loading: true,
    });
    try {
        const response = await getAllPlacesApi(values);
        if (response.data) {
            resetFunc(response.data?.data?.placeResponse)
            dispatch({
                type: userConstants.getAllPlacesSuccess,
                // payload: response.data?.data?.placeResponse,
                payload: response.data?.data,
                count: response.data?.Count,
                currentPageNumber: values?.currentPageNumber ? values?.currentPageNumber : false,
                isScroll,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getAllPlacesFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getAllPlacesFailure,
            payload: null,
            loading: false,
        });
    }
};

export const emptySearchListingData = () => (dispatch) => {
    dispatch({
        type: userConstants?.emptySearchListingData
    })
}
export const getplacebyid = (id, userid) => async (dispatch) => {
    dispatch({
        type: userConstants.getplacebyidRequest,
        loading: true,
    });
    try {
        const response = await getplacebyidApi(id, userid);
        if (response.data) {
            dispatch({
                type: userConstants.getplacebyidSuccess,
                payload: response.data?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getplacebyidFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getplacebyidFailure,
            payload: null,
            loading: false,
        });
    }
};

// export const getAllJobs = (values, body) => async (dispatch) => {
export const getAllJobs = (body, resetFunc = () => { }, isScroll = true) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllJobsRequest,
        loading: true,
    });
    try {
        const response = await getAllJobsApi(body);
        if (response.data) {
            dispatch({
                type: userConstants.getAllJobsSuccess,
                payload: response.data?.data,
                count: response.data?.Count,
                currentPageNumber: body?.currentPageNumber ? body?.currentPageNumber : false,
                isScroll,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getAllJobsFailure,
                payload: null,
                loading: false,
            });
        }

        resetFunc();
    } catch (error) {
        dispatch({
            type: userConstants.getAllJobsFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
    }
};

export const emptyJobData = () => (dispatch) => {
    dispatch({
        type: userConstants.emptyJobData
    })
}

// export const getAllEvents = (id, body) => async (dispatch) => {
export const getAllEvents = (body, resetFunc = () => { }, isScroll = true) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllEventsRequest,
        loading: true,
    });
    try {
        // const response = await getAllEventsApi(id, body);
        const response = await getAllEventsApi(body);
        if (response.data) {
            dispatch({
                type: userConstants.getAllEventsSuccess,
                payload: response.data?.data,
                count: response.data?.Count,
                currentPageNumber: body?.currentPageNumber ? body?.currentPageNumber : false,
                isScroll: isScroll,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getAllEventsFailure,
                payload: null,
                loading: false,
            });
        }
        resetFunc();
    } catch (error) {
        dispatch({
            type: userConstants.getAllEventsFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
    }
};

export const emptyEventData = () => (dispatch) => {
    dispatch({
        type: userConstants.emptyEventData
    })
}

export const getAllEventsReset = (body) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllEventsResetSuccess
    })
}

export const getAllServices = (body, resetFunc = () => { }) => async (dispatch) => {
    console.log(body)
    dispatch({
        type: userConstants.getAllServicesRequest,
        loading: true,
    });
    try {
        const response = await getAllServicesApi(body);
        if (response.data) {
            dispatch({
                type: userConstants.getAllServicesSuccess,
                payload: response.data?.data,
                count: response.data?.Count,
                currentPageNumber: body?.currentPageNumber ? body?.currentPageNumber : false,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getAllServicesFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getAllServicesFailure,
            payload: null,
            loading: false,
        });
    }
};
export const emptyServiceData = () => (dispatch) => {
    dispatch({
        type: userConstants.emptyServiceData
    })
}
export const getAllSearchPosts = (data, resetFunc = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllSearchPostsRequest,
        loading: true,
    });
    try {
        const response = await getAllSearchPostsApi(data);
        if (response.data) {
            dispatch({
                type: userConstants.getAllSearchPostsSuccess,
                payload: response.data?.data?.UpdatePostDTO,
                count: response.data?.Count,
                currentPageNumber: data?.currentPageNumber ? data?.currentPageNumber : false,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getAllSearchPostsFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getAllSearchPostsFailure,
            payload: null,
            loading: false,
        });
    }
};

export const emptySearchPostData = (data) => async (dispatch) => {
    dispatch({
        type: userConstants?.emptySearchPostData
    })
}

export const getAllProducts = (data, resetFunc = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllProductsRequest,
        loading: true,
    });
    try {
        const response = await getAllProductsApi(data);
        if (response.status == 200) {
            dispatch({
                type: userConstants.getAllProductsSuccess,
                payload: response.data?.data,
                count: response.data?.Count,
                currentPageNumber: data?.currentPageNumber ? data?.currentPageNumber : false,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getAllProductsFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getAllProductsFailure,
            payload: null,
            loading: false,
        });
    }
};

export const emptyProductData = () => (dispatch) => {
    dispatch({
        type: userConstants.emptyProductData
    })
}

export const getFeeds = (Id, page, q, resetFeedState = false) => async (dispatch) => {

    dispatch({
        type: userConstants.getFeedsRequest,
        page: page,
        loading: true,
    });
    try {
        const response = await getFeedsApi(Id, page, q);
        if (response.status == 200) {
            dispatch({
                type: userConstants.getFeedsSuccess,
                payload: response.data?.data,
                resetFeedState: resetFeedState,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getFeedsFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getFeedsFailure,
            payload: null,
            loading: false,
        });
    }
};

export const emptyNewsfeeds = () => dispatch => {
    dispatch({
        type: userConstants.emptyNewsfeeds
    })
}

export const getPostById = (data, resetFeedState = false) => async (dispatch) => {
    console.log("get post by id invoked", data)

    dispatch({
        type: userConstants.getPostByIdRequest,
        loading: true,
    });
    try {
        const response = await getPostbyIdApi(data);
        if (response.status == 200) {
            dispatch({
                type: userConstants.getPostByIdSuccess,
                payload: response.data?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getPostByIdFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getPostByIdFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getPostByIdForModal = (data, resetFeedState = false) => async (dispatch) => {
    console.log("get post by id invoked", data)

    dispatch({
        type: userConstants.getPostByIdForModalRequest,
        loading: true,
    });
    try {
        const response = await getPostbyIdApi(data);
        if (response.status == 200) {
            dispatch({
                type: userConstants.getPostByIdForModalSuccess,
                payload: response.data?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getPostByIdForModalFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getPostByIdForModalFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getRemovePostByIdForModal = (data, resetFeedState = false) => async (dispatch) => {

    dispatch({
        type: userConstants.getRemovePostByIdForModalRequest,
        loading: true,
    });
   
};

export const getTimeline = (data, pgc, pgsize) => async (dispatch) => {

    dispatch({
        type: userConstants.getTimelineRequest,
        loading: true,
    });
    try {
        const response = await getTimelineApi(data, pgc, pgsize);
        if (response.status == 200) {
            dispatch({
                type: userConstants.getTimelineSuccess,
                payload: response.data?.data,
                userid: data?.UserId,
                page: pgc,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getTimelineFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getTimelineFailure,
            payload: null,
            loading: false,
        });
    }
};

export const logoutUser = (values) => async (dispatch) => {
    localStorage.removeItem('Token');
    localStorage.removeItem('RefreshToken');
    let userlogout = {
        "IsAuthenticated": false
    }
    localStorage.setItem("Id", "")
    message.success("Logged Out Successfully")
    dispatch({
        type: userConstants.logoutUserSuccess,
        payload: userlogout,
    });
    window.location.href = "/home"


};

export const eventCreate = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.eventCreateRequest,
        loading: true,
    });
    try {
        const response = await eventCreateApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.eventCreateSuccess,
                payload: response?.data,
                message: "Event Created",
                loading: false,
            });
            resetFunc();
            message.success("Event Created");
        } else {
            dispatch({
                type: userConstants.eventCreateFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.eventCreateFailure,
            message: error.response,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const eventUpdate = (values, resetFunc, getAll) => async (dispatch) => {
    dispatch({
        type: userConstants.eventUpdateRequest,
        loading: true,
    });
    try {
        const response = await eventUpdateApi(values);
        if (response?.data?.status_code == 200) {
            dispatch({
                type: userConstants.eventUpdateSuccess,
                payload: response?.data,
                message: "Event Updated",
                loading: false,
            });
            dispatch(emptyMyListingData())
            dispatch(getPlaceCategoryList(getAll))
            resetFunc();
            message.success("Event Updated");
        } else {
            dispatch({
                type: userConstants.eventUpdateFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.eventUpdateFailure,
            message: error.response,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const tripCreate = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.tripCreateRequest,
        loading: true,
    });
    try {
        const response = await tripCreateApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.tripCreateSuccess,
                payload: response?.data,
                message: "Trip Created",
                loading: false,
            });
            resetFunc(response?.data?.data?.Id);
            message.success("Trip Created");
            dispatch(getTrip(values?.UserId))
        } else {
            dispatch({
                type: userConstants.tripCreateFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.tripCreateFailure,
            message: error.response,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const getProductCategories = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getProductCategoriesRequest,
        loading: true,
    });
    try {
        const response = await getProductCategoriesApi();
        if (response.data) {
            dispatch({
                type: userConstants.getProductCategoriesSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getProductCategoriesFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getProductCategoriesFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getTrip = (id) => async (dispatch) => {
    dispatch({
        type: userConstants.getTripRequest,
        loading: true,
    });
    try {
        const response = await getTripApi(id);
        if (response.data) {
            dispatch({
                type: userConstants.getTripSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getTripFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getTripFailure,
            payload: null,
            loading: false,
        });
    }
};

export const emptyTripData = () => dispatch => {
    dispatch({
        type: userConstants.emptyTripData
    })
}

export const getTimelineTrip = (id, date) => async (dispatch) => {
    dispatch({
        type: userConstants.getTimelineTripRequest,
        loading: true,
    });
    try {
        const response = await getTimelineTripApi(id, date);
        if (response.data) {
            dispatch({
                type: userConstants.getTimelineTripSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getTimelineTripFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getTimelineTripFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getTimelineTripdetail = (id, date) => async (dispatch) => {
    dispatch({
        type: userConstants.getTimelineTripdetailRequest,
        loading: true,
    });
    try {
        const response = await getTimelineTripdetailApi(id, date);
        if (response.data) {
            dispatch({
                type: userConstants.getTimelineTripdetailSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getTimelineTripdetailFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getTimelineTripdetailFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getTimelinecategorydetail = (id, date) => async (dispatch) => {
    dispatch({
        type: userConstants.getTimelinecategorydetailRequest,
        loading: true,
    });
    try {
        const response = await getTimelinecategorydetailApi(id, date);
        if (response.data) {
            dispatch({
                type: userConstants.getTimelinecategorydetailSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getTimelinecategorydetailFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getTimelinecategorydetailFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getTripbyid = (id) => async (dispatch) => {
    dispatch({
        type: userConstants.getTripbyidRequest,
        loading: true,
    });
    try {
        const response = await getTripbyidApi(id);
        if (response.data) {
            dispatch({
                type: userConstants.getTripbyidSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getTripbyidFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getTripbyidFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getServiceCategories = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getServiceCategoriesRequest,
        loading: true,
    });
    try {
        const response = await getServiceCategoriesApi();
        if (response.data) {
            dispatch({
                type: userConstants.getServiceCategoriesSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getServiceCategoriesFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getServiceCategoriesFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getPlaceCategoryList = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getPlaceCategoryListRequest,
        loading: true,
    });
    try {
        const response = await getPlaceCategoryListApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getPlaceCategoryListSuccess,
                payload: response?.data?.data,
                count: response.data?.Count,
                currentPageNumber: values?.currentPageNumber ? values?.currentPageNumber : false,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getPlaceCategoryListFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getPlaceCategoryListFailure,
            payload: null,
            loading: false,
        });
    }
};

export const emptyMyListingData = () => (dispatch) => {
    dispatch({
        type: userConstants.emptyMyListingData
    })
}

export const getFavCategoryList = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getFavCategoryListRequest,
        loading: true,
    });
    try {
        const response = await getFavCategoryListApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getFavCategoryListSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getFavCategoryListFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getFavCategoryListFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getEventsList = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getEventsListRequest,
        loading: true,
    });
    try {
        const response = await getEventsListApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getEventsListSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getEventsListFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getEventsListFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getJobsList = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getJobsListRequest,
        loading: true,
    });
    try {
        const response = await getJobsListApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getJobsListSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getJobsListFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getJobsListFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getFavouriteCheck = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getFavouriteCheckRequest,
        loading: true,
    });
    try {
        const response = await getFavouriteCheckApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getFavouriteCheckSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getFavouriteCheckFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getFavouriteCheckFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getReviewsByRecord = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getReviewsByRecordRequest,
        loading: true,
    });
    try {
        const response = await getReviewsByRecordApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getReviewsByRecordSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getReviewsByRecordFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getReviewsByRecordFailure,
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
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.createProductSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
            message.success("Product Created");
        } else {
            dispatch({
                type: userConstants.createProductFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
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

export const updateProduct = (values, resetFunc, getAll) => async (dispatch) => {
    dispatch({
        type: userConstants.updateProductRequest,
        loading: true,
    });
    try {
        const response = await updateProductApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.updateProductSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(emptyMyListingData())
            dispatch(getPlaceCategoryList(getAll))
            resetFunc();
            message.success("Product Updated");
        } else {
            dispatch({
                type: userConstants.updateProductFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.updateProductFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const resetUpdateProduct = () => async (dispatch) => {
    dispatch({
        type: userConstants.resetUpdateProductSuccess,
        loading: true,
    })
};

export const resetUpdatePlace = () => async (dispatch) => {
    dispatch({
        type: userConstants.resetUpdatePlaceSuccess,
        loading: true,
    })
};

export const resetUpdateService = () => async (dispatch) => {
    dispatch({
        type: userConstants.resetUpdateServiceSuccess,
        loading: true,
    })
};

export const resetUpdateEvent = () => async (dispatch) => {
    dispatch({
        type: userConstants.resetUpdateEventSuccess,
        loading: true,
    })
};

export const resetUpdateJob = () => async (dispatch) => {
    dispatch({
        type: userConstants.resetUpdateJobSuccess,
        loading: true,
    })
};

export const updateService = (values, resetFunc, getAll) => async (dispatch) => {
    dispatch({
        type: userConstants.updateServiceRequest,
        loading: true,
    });
    try {
        const response = await updateServiceApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.updateServiceSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(emptyMyListingData())
            dispatch(getPlaceCategoryList(getAll))
            resetFunc();
            message.success("Service Updated");
        } else {
            dispatch({
                type: userConstants.updateServiceFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.updateServiceFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const updateJob = (values, resetFunc, getAll) => async (dispatch) => {
    dispatch({
        type: userConstants.updateJobRequest,
        loading: true,
    });
    try {
        const response = await updateJobApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.updateJobSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(emptyMyListingData())
            dispatch(getPlaceCategoryList(getAll));
            resetFunc();
            message.success("Job Updated");
        } else {
            dispatch({
                type: userConstants.updateJobFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.updateJobFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const createService = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.createServiceRequest,
        loading: true,
    });
    try {
        const response = await createServiceApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.createServiceSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
            message.success("Service Created");
        } else {
            dispatch({
                type: userConstants.createServiceFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.createServiceFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const createPlace = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.createPlaceRequest,
        loading: true,
    });
    try {
        const response = await createPlaceApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.createPlaceSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
            message.success("Place Created");
        } else {
            dispatch({
                type: userConstants.createPlaceFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.createPlaceFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const updatePlace = (values, resetFunc, getAll) => async (dispatch) => {
    dispatch({
        type: userConstants.updatePlaceRequest,
        loading: true,
    });
    try {
        const response = await updatePlaceApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.updatePlaceSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(emptyMyListingData())
            dispatch(getPlaceCategoryList(getAll))
            resetFunc();
            message.success("Place Updated");
        } else {
            dispatch({
                type: userConstants.updatePlaceFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.updatePlaceFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error);
    }
};

export const createJob = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.createJobRequest,
        loading: true,
    });
    try {
        const response = await createJobApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.createJobSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
            message.success("Job Created");
        } else {
            dispatch({
                type: userConstants.createJobFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.createJobFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error)
    }
};

export const createPost = (values, setPostModalOpen, form, setFileList, resetFeedState = {}, timeline = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.createPostRequest,
        loading: true,
    });
    try {
        const response = await createPostApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.createPostSuccess,
                payload: response?.data,
                loading: false,
            });
            if (Object.keys(resetFeedState)?.length)
                dispatch(getFeeds(resetFeedState?.LoggedInUserId, 1, 5, true))
            setPostModalOpen(false)
            setFileList([])
            timeline();
            message.success("Post Created")
            form.resetFields();
        } else {
            dispatch({
                type: userConstants.createPostFailure,
                payload: null,
                loading: false,
            });
            setPostModalOpen(false)
            setFileList([])
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
            form.resetFields();
        }
    } catch (error) {
        dispatch({
            type: userConstants.createPostFailure,
            payload: null,
            loading: false,
        });
        setPostModalOpen(false)
        setFileList([])
        message.error(error)
        form.resetFields()
    }
};

export const setpopmarker = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.setpopmarker,
        payload: values,
        loading: false,
    })
};
export const updatePost = (values, resetFields = () => { }, resetFeedState = {}, timeline = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.updatePostRequest,
        loading: true,
    });
    try {
        const response = await updatePostApi(values);
        console.log("response", response)
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.updatePostSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(getPostbyId(values?.Id))
            // if (Object.keys(resetFeedState)?.length)
            //     dispatch(getFeeds(resetFeedState?.LoggedInUserId, 1, 5, true))
            timeline();
            resetFields();
            message.success("Post Updated");
        } else {
            dispatch({
                type: userConstants.updatePostFailure,
                payload: null,
                loading: false,
            });
            resetFields();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.updatePostFailure,
            payload: null,
            loading: false,
        });
        resetFields();
        message.error(error);
    }
};

export const SharePost = (values, setPostModalOpen, form, resetFunc = () => { }, redirectprofile) => async (dispatch) => {
    dispatch({
        type: userConstants.SharePostRequest,
        loading: true,
    });
    try {
        const response = await SharePostApi(values);
        if (response?.data?.status_code == 200) {
            dispatch({
                type: userConstants.SharePostSuccess,
                payload: response?.data,
                loading: false,
            });
            setPostModalOpen(false)
            // dispatch(getFeeds(loginUserId, 1, 5, true))
            // dispatch(seeSharePost())
            // const showSuccessNotification = () => {
            notification.success({
                style: {
                    cursor: "pointer"
                },
                message: 'Post Shared',
                description: `Your post has been shared successfully See Post`,
                duration: 5, // Duration in seconds. Set to 0 to prevent auto-closing.
                //   description=`Your post has been shared successfully! See Post`,
                onClick: () => {
                    redirectprofile()
                    // navigate(`/profile/${username}`);

                }
                //   description: 'Action was successful!',
            });
            //   };

            message.success("Post Shared")

            form.resetFields();
            resetFunc();
        } else {
            dispatch({
                type: userConstants.SharePostFailure,
                payload: null,
                loading: false,
            });
            setPostModalOpen(false)
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
            form.resetFields();
        }
    } catch (error) {
        dispatch({
            type: userConstants.SharePostFailure,
            payload: null,
            loading: false,
        });
        setPostModalOpen(false)
        message.error(error)
        form.resetFields()
    }
};
export const seeSharePost = () => async (dispatch) => {


    setTimeout(() => {
        dispatch({
            type: userConstants.alerthide,
        })
    }, 5000);
    dispatch({
        type: userConstants.alertshow,
    })




};

export const getPostbyId = (values, resetFunc = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.getPostbyIdRequest,
        loading: true
    });
    try {
        const response = await getPostbyIdApi(values);
        if (response.data?.data?.Id) {
            dispatch({
                type: userConstants.getPostbyIdSuccess,
                payload: response?.data?.data,
                Postid: values,
                loading: false,
            });


        } else {
            dispatch({
                type: userConstants.getPostbyIdFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getPostbyIdFailure,
            payload: null,
            loading: false,
        });
    }
};


export const deletePost = (values, resetFunc = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.deletePostRequest,
        loading: true,
    });
    try {
        const response = await deletePostApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.deletePostSuccess,
                payload: response?.data,
                Postid: values?.Postid,
                loading: false,
            });
            dispatch({
                type: userConstants.decrementPostCountSuccess,
                loading: false,
            });
            resetFunc();
            message.success("Post Deleted")
            // dispatch(getFeeds(values?.userid))
        } else {
            dispatch({
                type: userConstants.deletePostFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.deletePostFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error)
    }
};

export const createReview = (values, setReviewForm, form) => async (dispatch) => {
    dispatch({
        type: userConstants.createReviewRequest,
        loading: true,
    });
    try {
        const response = await createReviewApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.createReviewSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(getReviewsByRecord({ RecordId: values.RecordId }))
            setReviewForm(false)
            message.success("Review Submitted")
            form();
        } else {
            dispatch({
                type: userConstants.createReviewFailure,
                payload: null,
                loading: false,
            });
            setReviewForm(false)
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
            form();
        }
    } catch (error) {
        dispatch({
            type: userConstants.createReviewFailure,
            payload: null,
            loading: false,
        });
        setReviewForm(false)
        message.error(error)
        form()
    }
};

export const updateUserProfile = (values, setProfileModalOpen, form, resetFunc,remove, removecover) => async (dispatch) => {
    dispatch({
        type: userConstants.updateUserProfileRequest,
        loading: true,
    });
    try {
        const response = await updateUserProfileApi(values,remove,removecover);
        if (response.data) {
            dispatch({
                type: userConstants.updateUserProfileSuccess,
                payload: response?.data?.data?.Image,
                username: values?.Username?.length ? values?.Username : false,
                loading: false,
            });
            // if(urlChange){
            //     let newUrl = window.location.origin + "/profile/" + response.data?.data?.Username;
            //     window.history.pushState({ path: newUrl }, '', newUrl);
            // }
            // dispatch(getUserProfile({ UserId: urlChange, LoggedInUserId: LoggedInUserId }))
            resetFunc()
            setProfileModalOpen(false)
            message.success("Profile Updated")
            form.resetFields();
        } else {
            dispatch({
                type: userConstants.updateUserProfileFailure,
                payload: null,
                loading: false,
            });
            setProfileModalOpen(false)
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
            form.resetFields();
        }
    } catch (error) {
        dispatch({
            type: userConstants.updateUserProfileFailure,
            payload: null,
            loading: false,
        });
        setProfileModalOpen(false)
        message.error(error)
        form.resetFields()
    }
};

export const likeFeed = (values, id) => async (dispatch) => {
    dispatch({
        type: userConstants.likeFeedRequest,
        loading: true,
    });
    try {
        const response = await likeFeedApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.likeFeedSuccess,
                payload: response?.data,
                loading: false
            });

            // if (id) {
            //     dispatch(getPostByIdForModal(id))
            // }
        } else {
            dispatch({
                type: userConstants.likeFeedFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.likeFeedFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
};

export const dislikeFeed = (values, id) => async (dispatch) => {
    dispatch({
        type: userConstants.dislikeFeedRequest,
        loading: true,
    });
    try {
        const response = await dislikeFeedApi(values);

        if (response?.data?.data == true) {
            console.log("response.data", response.data)
            dispatch({
                type: userConstants.dislikeFeedSuccess,
                payload: values?.RecordId,
                loading: false,
            });
            // message.success("Post DisLiked");
            // if (id) {
            //     dispatch(getPostByIdForModal(id))
            // }
        } else {
            dispatch({
                type: userConstants.dislikeFeedFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.dislikeFeedFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
};

export const commentFeed = (values, setRows, setCommentValue, form, resetFunc = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.commentFeedRequest,
        loading: true,
    });
    try {
        const response = await commentFeedApi(values);
        if (response.data?.status_code == 200) {
            dispatch({
                type: userConstants.commentFeedSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(getCommentsFeed({ RecordId: values?.RecordId }))
            setRows("1");
            setCommentValue("");
            form.resetFields();
            resetFunc();
            message.success("Comment Added")
        } else {
            dispatch({
                type: userConstants.commentFeedFailure,
                payload: null,
                loading: false,
            });
            setRows("1")
            setCommentValue("");
            form.resetFields();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.commentFeedFailure,
            payload: null,
            loading: false,
        });
        setRows("1")
        setCommentValue("");
        form.resetFields();
        message.error(error)
    }
};

export const editCommentFeed = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.editCommentFeedRequest,
        loading: true,
    });
    try {
        const response = await editCommentFeedApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.editCommentFeedSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(getCommentsFeed({ RecordId: values?.RecordId }))
            resetFunc();
            message.success("Comment Updated")
        } else {
            dispatch({
                type: userConstants.editCommentFeedFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.editCommentFeedFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error)
    }
};

export const deleteCommentFeed = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.deleteCommentFeedRequest,
        loading: true,
    });
    try {
        const response = await deleteCommentFeedApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.deleteCommentFeedSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(getCommentsFeed({ RecordId: values?.RecordId }))
            resetFunc();
            message.success("Comment Deleted")
        } else {
            dispatch({
                type: userConstants.deleteCommentFeedFailure,
                payload: null,
                loading: false,
            });
            resetFunc();
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.deleteCommentFeedFailure,
            payload: null,
            loading: false,
        });
        resetFunc();
        message.error(error)
    }
};

export const makeUnFavourite = (values, category, specCategory, loc) => async (dispatch) => {
    dispatch({
        type: userConstants.makeUnFavouriteRequest,
        loading: true,
    });
    try {
        const response = await makeUnFavouriteApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.makeUnFavouriteSuccess,
                payload: response?.data,
                loading: false,
            });
            if (category == "place") {
                // window.location.href = loc
                dispatch(getplacebyid(values?.RecordId, values.UserId));
            }
            else if (category === "product") {
                const body = {
                    Id: values.Id,
                    userid: values.UserId
                }
                dispatch(getProduct(body))
                // dispatch(getAllProducts({ CategoryId: specCategory, UserId: values.UserId }))
            }
            else if (category == "service") {
                const body = {
                    Id: values.Id,
                    userid: values.UserId
                }
                dispatch(getService(body))
            }
            else if (category == "event")
                dispatch(getEvent({ Id: values?.Id, userid: values?.UserId }))
            // dispatch(getAllEvents({ UserId: values.UserId , currentPageNumber: 1,
            // pageSize: 10, }))
            else if (category == "job")
                // dispatch(getAllJobs({ UserId: values.UserId }))
                dispatch(getJob({ Id: values?.id, userid: values?.UserId }))
            // message.success("Marked as Unfavourite")
        } else {
            dispatch({
                type: userConstants.makeUnFavouriteFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.makeUnFavouriteFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
};

export const makeFavourite = (values, category, specCategory, loc) => async (dispatch) => {
    dispatch({
        type: userConstants.makeFavouriteRequest,
        loading: true,
    });
    try {
        const response = await makeFavouriteApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.makeFavouriteSuccess,
                payload: response?.data,
                loading: false,
            });

            // let data = {RecordId: values.RecordId, UserId: values.UserId};

            if (category == "place") {
                // window.location.href = loc
                dispatch(getplacebyid(values?.RecordId, values.UserId));

                // dispatch(getAllPlaces({ Category: specCategory, UserId: values.UserId }));
            }
            else if (category === "product") {
                const body = {
                    Id: values.Id,
                    userid: values.UserId
                }
                dispatch(getProduct(body))
                // dispatch(getAllProducts({ CategoryId: specCategory, UserId: values.UserId }))
            }
            else if (category == "service") {
                const body = {
                    Id: values.Id,
                    userid: values.UserId
                }
                dispatch(getService(body))
            }
            else if (category == "event")
                dispatch(getEvent({ Id: values?.Id, userid: values?.UserId }))
            // dispatch(getAllEvents({ UserId: values.UserId }))
            else if (category == "job")
                dispatch(getJob({ Id: values?.id, userid: values?.UserId }))
            // dispatch(getAllJobs({ UserId: values.UserId }))
            // message.success("Added to Favourite")
        } else {
            dispatch({
                type: userConstants.makeFavouriteFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.makeFavouriteFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
};

export const getCommentsFeed = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getCommentsFeedRequest,
        loading: true,
        commentpostId: null

    });
    try {
        const response = await getCommentsFeedApi(values);
        if (response.data) {
            console.log(response?.data, "data")
            dispatch({
                type: userConstants.getCommentsFeedSuccess,
                payload: response?.data,
                loading: false,
                commentpostId: values?.RecordId
            });
        } else {
            dispatch({
                type: userConstants.getCommentsFeedFailure,
                payload: null,
                loading: false,
                commentpostId: null

            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getCommentsFeedFailure,
            payload: null,
            loading: false,
            commentpostId: null

        });
    }
};

export const getService = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getServiceRequest,
        loading: true,
    });
    try {
        const response = await getServiceApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getServiceSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getServiceFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getServiceFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getProduct = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getProductRequest,
        loading: true,
    });
    try {
        const response = await getProductApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getProductSuccess,
                payload: response?.data,
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

export const getJobUpdate = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getJobUpdateRequest,
        loading: true,
    });
    try {
        const response = await getJobApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getJobUpdateSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getJobUpdateFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getJobUpdateFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getJob = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getJobRequest,
        loading: true,
    });
    try {
        const response = await getJobApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getJobSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getJobFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getJobFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getPlace = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getPlaceRequest,
        loading: true,
    });
    try {
        const response = await getPlaceApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getPlaceSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getPlaceFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getPlaceFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getEvent = (values) => async (dispatch) => {
    console.log("values", values)

    dispatch({
        type: userConstants.getEventRequest,
        loading: true,
    });
    try {
        const response = await getEventApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getEventSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getEventFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getEventFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getEventUpdate = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getEventUpdateRequest,
        loading: true,
    });
    try {
        const response = await getEventApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getEventUpdateSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getEventUpdateFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getEventUpdateFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getUserProfile = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getUserProfileRequest,
        loading: true,
    });
    try {
        const response = await getUserProfileApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getUserProfileSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getUserProfileFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getUserProfileFailure,
            payload: null,
            loading: false,
        });
    }
};
export const chatMarkAsRead = (values, userid) => async (dispatch) => {
    dispatch({
        type: userConstants.chatMarkAsReadRequest,
        loading: true,
    });
    try {
        const response = await chatMarkAsReadApi(values, userid);
        if (response?.data?.status_code == 200) {
            dispatch({
                type: userConstants.chatMarkAsReadSuccess,
                payload: values,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.chatMarkAsReadFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.chatMarkAsReadFailure,
            payload: null,
            loading: false,
        });
    }
};

export const notifcationMarkAsRead = (userid, setShowMarkAsRead, showMarkAsRead) => async (dispatch) => {
    dispatch({
        type: userConstants.notificationMarkAsReadSuccess,
        loading: true,
    });
    try {
        const response = await notificationMarkAsReadApi(userid);

        if (response?.data?.status_code == 200) {
            dispatch({
                type: userConstants.notificationMarkAsReadSuccess,
                payload: userid,
                loading: false,
            });
            console.log('server', showMarkAsRead);
            setShowMarkAsRead(!showMarkAsRead);
            dispatch(getUserNotificationsAction(userid));
        } else {
            dispatch({
                type: userConstants.notificationMarkAsReadFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.notificationMarkAsReadFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getUserProfileReset = () => async (dispatch) => {
    dispatch({
        type: userConstants.getUserProfileReset
    })
}

export const getConnectedUsers = (values, Channel = null, UserId = null, setChatWithUser = null, setLoading = () => { }) => async (dispatch) => {
    // console.log("chala",values)
    if (Channel != null && UserId != null) {
        try {
            const response = await getAllUsersApi();
            console.log("chatres", response)
            if (response.data) {
                if (response.data?.data?.length > 0) {
                    let check = 0;
                    response?.data?.data?.map(val => {
                        let userChannel = val.UserId > UserId ? UserId.toString() + val.UserId?.toString() : val.UserId?.toString() + UserId?.toString();
                        if (userChannel == Channel) {
                            check = 1;
                            let item = {
                                channel: Channel,
                                username: val.Username,
                                userImage: val?.Image,
                                userId: val.Id,
                                recieverName: val?.FirstName + " " + val?.LastName,
                                lastMessage: val?.Text
                            }
                            setChatWithUser(item)
                            let tempArr = [item];
                            tempArr = tempArr.concat(values);
                            dispatch({
                                type: userConstants.getConnectedUsersSuccess,
                                payload: tempArr,
                                loading: false
                            })
                            setLoading(false)
                        }
                    })
                    if (check == 0) {
                        console.log("chala2")

                        if (values?.length > 0)
                            setChatWithUser(values[0])
                        dispatch({
                            type: userConstants.getConnectedUsersSuccess,
                            payload: values,
                            loading: false,
                        })
                        setLoading(false);
                    }
                }
            }
        } catch (error) {
            dispatch({
                type: userConstants.getConnectedUsersFailure,
                payload: null,
                loading: false,
            });
            setLoading(false);
        }
    } else {
        dispatch({
            type: userConstants.getConnectedUsersSuccess,
            payload: values,
            loading: false,
        })
        setLoading(false);
    }

    // dispatch({
    //     type: userConstants.getConnectedUsersRequest,
    //     loading: true,
    // });
    // try {
    //     const response = await getConnectedUsersApi(values);
    //     if (response.data) {
    //         dispatch({
    //             type: userConstants.getConnectedUsersSuccess,
    //             payload: response?.data,
    //             loading: false,
    //         });
    //     } else {
    //         dispatch({
    //             type: userConstants.getConnectedUsersFailure,
    //             payload: null,
    //             loading: false,
    //         });
    //     }
    // } catch (error) {
    //     dispatch({
    //         type: userConstants.getConnectedUsersFailure,
    //         payload: null,
    //         loading: false,
    //     });
    // }
};

export const getAllUsersUnPage = (data, resetFunc = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllUsersUnPageRequest,
        loading: true,
    });
    try {
        const response = await getAllUsersUnPageApi(data);
        if (response.data) {
            dispatch({
                type: userConstants.getAllUsersUnPageSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getAllUsersUnPageFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getAllUsersUnPageFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getAllUsers = (data, resetFunc = () => { }) => async (dispatch) => {
    dispatch({
        type: userConstants.getAllUsersRequest,
        loading: true,
    });
    try {
        const response = await getAllUsersApi(data);
        if (response.data) {
            dispatch({
                type: userConstants.getAllUsersSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getAllUsersFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getAllUsersFailure,
            payload: null,
            loading: false,
        });
    }
};

export const emptySearchPeopleData = () => async (dispatch) => {
    dispatch({
        type: userConstants.emptySearchPeopleData
    })
}

export const emptyConnectedUsers = () => async (dispatch) => {
    dispatch({
        type: userConstants.emptyConnectedUsersSuccess,
        payload: null,
        loading: false,
    })
};

export const getUserChat = (values, channel) => async (dispatch) => {
    dispatch({
        type: userConstants.getUserChatSuccess,
        payload: values,
        loading: false,
    })


    // dispatch({
    //     type: userConstants.getUserChatRequest,
    //     loading: true,
    // });
    // try {
    //     const response = await getUserChatApi(values);
    //     if (response.data) {
    //         dispatch({
    //             type: userConstants.getUserChatSuccess,
    //             payload: response?.data,
    //             loading: false,
    //         });
    //     } else {
    //         dispatch({
    //             type: userConstants.getUserChatFailure,
    //             payload: null,
    //             loading: false,
    //         });
    //     }
    // } catch (error) {
    //     dispatch({
    //         type: userConstants.getUserChatFailure,
    //         payload: null,
    //         loading: false,
    //     });
    // }
};

export const getNewComersAction = (country, userId) => async (dispatch) => {
    dispatch({
        type: userConstants.getNewComersRequest,
        loading: true,
    });
    try {
        const response = await getNewComersApi(country, userId);
        if (response.data) {
            dispatch({
                type: userConstants.getNewComersSuccess,
                payload: response?.data.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getNewComersFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getNewComersFailure,
            payload: null,
            loading: false,
        });

    }

}

export const createReport = (values, setModal1Open) => async (dispatch) => {
    dispatch({
        type: userConstants.createReportRequest,
        loading: true,
    });
    try {
        const response = await createReportApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.createReportSuccess,
                payload: response?.data,
                loading: false,
            });
            setModal1Open(false)
            message.success("Issue Reported")
        } else {
            dispatch({
                type: userConstants.createReportFailure,
                payload: null,
                loading: false,
            });
            setModal1Open(false)
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.createReportFailure,
            payload: null,
            loading: false,
        });
        setModal1Open(false)
        message.error(error)
    }
};

export const createView = async (values) => {
    await createViewApi(values);
};

export const insertChatMessage = (values, setModal1Open) => async (dispatch) => {
    dispatch({
        type: userConstants.insertChatMessageRequest,
        loading: true,
    });
    try {
        const response = await insertChatMessageApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.insertChatMessageSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.insertChatMessageFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.insertChatMessageFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const activeDeactive = (values, getAllData) => async (dispatch) => {
    dispatch({
        type: userConstants.activeDeactiveRequest,
        loading: true,
    });
    try {
        const response = await activeDeactiveApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.activeDeactiveSuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(emptyMyListingData())
            dispatch(getPlaceCategoryList(getAllData))
        } else {
            dispatch({
                type: userConstants.activeDeactiveFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.activeDeactiveFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const getUserNotificationsAction = (userid, data) => async (dispatch) => {
    // dispatch({
    //     type: userConstants.getUserNotificationsSuccess,
    //     payload: data,
    //     loading: false,
    // });
    dispatch({
        type: userConstants.getUserNotificationsRequest,
        loading: true,
    });
    try {
        const response = await getUserNotifications(userid);
        if (response.data) {
            // console.log(response?.data,"datant")
            dispatch({
                type: userConstants.getUserNotificationsSuccess,
                payload: response?.data?.data,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getUserNotificationsFailure,
            payload: null,
            loading: false,
        });
    }
};

export const updateConnectedUsersList = (data, setNewChat, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.updateConnectedUsersListSuccess,
        payload: data,
        loading: false,
    });
    setNewChat(false);
    resetFunc();
};

export const getUserPostImages = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getUserPostImagesRequest,
        loading: true,
    });
    try {
        const response = await getUserPostImagesApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getUserPostImagesSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getUserPostImagesFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getUserPostImagesFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getCountry = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getCountryRequest,
        loading: true,
    });
    try {
        const response = await getCountryApi();
        if (response.data) {
            dispatch({
                type: userConstants.getCountrySuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getCountryFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getCountryFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getCitiesAction = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getCitiesRequest,
        loading: true,
    });
    try {
        const response = await getCitiesApi();
        if (response.data) {
            dispatch({
                type: userConstants.getCitiesSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getCitiesFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getCitiesFailure,
            payload: null,
            loading: false,
        });
    }
}

export const getRecentlyAdded = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getRecentlyAddedRequest,
        loading: true,
    });
    try {
        const response = await getRecentlyAddedApi();
        if (response.data) {
            dispatch({
                type: userConstants.getRecentlyAddedSucess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getRecentlyAddedFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getRecentlyAddedFailure,
            payload: null,
            loading: false,
        });
    }
};

export const getItineraryByDate = (values) => async (dispatch) => {
    dispatch({
        type: userConstants.getItineraryByDateRequest,
        loading: true,
    });
    try {
        const response = await getItineraryByDateApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getItineraryByDateSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getItineraryByDateFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getItineraryByDateFailure,
            payload: null,
            loading: false,
        });
    }
};
export const getSuggestedplace = (long, lat, id) => async (dispatch) => {
    dispatch({
        type: userConstants.getSuggestedplaceRequest,
        loading: true,
    });
    try {
        const response = await getSuggestedplaceApi(long, lat, id);
        if (response.data) {
            dispatch({
                type: userConstants.getSuggestedplaceSuccess,
                payload: response?.data,
                loading: false,
            });
        } else {
            dispatch({
                type: userConstants.getSuggestedplaceFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.getSuggestedplaceFailure,
            payload: null,
            loading: false,
        });
    }
};

export const deleteItinerary = (id, getData) => async (dispatch) => {
    dispatch({
        type: userConstants.deleteItineraryRequest,
        loading: true,
    });
    try {
        const response = await deleteItineraryApi(id);
        if (response.data) {
            dispatch({
                type: userConstants.deleteItinerarySuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(getItineraryByDate(getData))
        } else {
            dispatch({
                type: userConstants.deleteItineraryFailure,
                payload: null,
                loading: false,
            });
        }
    } catch (error) {
        dispatch({
            type: userConstants.deleteItineraryFailure,
            payload: null,
            loading: false,
        });
    }
};

export const loginModal = (data) => async (dispatch) => {
    dispatch({
        type: userConstants.loginMoalSuccess,
        payload: data,
        loading: false,
    })
};

export const fullScreenImgModal = (data) => async (dispatch) => {
    dispatch({
        type: userConstants.fullScreenImgModalSuccess,
        payload: data,
        loading: false,
    })
};

export const markAsRead = (notId, getNotification) => async (dispatch) => {
    dispatch({
        type: userConstants.markAsReadRequest,
        loading: true,
    });
    try {
        const response = await markAsReadApi(notId);
        if (response.data) {
            dispatch({
                type: userConstants.markAsReadSuccess,
                payload: response?.data,
                loading: false,
            });
            getNotification();
        } else {
            dispatch({
                type: userConstants.markAsReadFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.markAsReadFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const createItinerary = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.createItineraryRequest,
        loading: true,
    });
    try {
        const response = await createItineraryApi(values);
        if (response.data) {

            dispatch({
                type: userConstants.createItinerarySuccess,
                payload: response?.data,
                loading: false,
            });
            message.success("Itinerary added successfully");
            // alert("ok")
            // dispatch(getItineraryByDate(getData))
            // message.su("")

            resetFunc();
        } else {
            dispatch({
                type: userConstants.createItineraryFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.createItineraryFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const contactUsCreate = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.contactUsCreateRequest,
        loading: true,
    });
    try {
        const response = await contactUsCreateApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.contactUsCreateSuccess,
                payload: response?.data,
                loading: false,
            });
            // alert("ok")
            // dispatch(getItineraryByDate(getData))
            // message.su("")
            message.success("Form Submitted")
            resetFunc();
        } else {
            dispatch({
                type: userConstants.contactUsCreateFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.contactUsCreateFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const updateItinerary = (values, resetFunc, refreshListing) => async (dispatch) => {
    dispatch({
        type: userConstants.updateItineraryRequest,
        loading: true,
    });
    try {
        const response = await updateItineraryApi(values);
        if (response?.data?.status_code == 200) {
            dispatch({
                type: userConstants.updateItinerarySuccess,
                payload: response?.data,
                loading: false,
            });
            // alert("ok")
            // dispatch(getItineraryByDate(getData))
            // message.su("")
            refreshListing();
            message.success("Place updated successfully")
            resetFunc();
        } else {
            dispatch({
                type: userConstants.updateItineraryFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.updateItineraryFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const editItinerary = (values, resetFunc, getData) => async (dispatch) => {
    dispatch({
        type: userConstants.editItineraryRequest,
        loading: true,
    });
    try {
        const response = await editItineraryApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.editItinerarySuccess,
                payload: response?.data,
                loading: false,
            });
            dispatch(getItineraryByDate(getData))
            resetFunc();
        } else {
            dispatch({
                type: userConstants.editItineraryFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.editItineraryFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const forgotPsw = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.forgotPswRequest,
        loading: true,
    });
    try {
        const response = await forgotPswApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.forgotPswSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
            message.success("if the specified email exist, you will get the password reset email");
        } else {
            dispatch({
                type: userConstants.forgotPswFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.forgotPswFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const resetPsw = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.resetPswRequest,
        loading: true,
    });
    try {
        const response = await resetPswApi(values);
        console.log(response.data.status_code);
        if (response.data.status_code === 200) {
        // if (response?.data?.Message) {
            dispatch({
                type: userConstants.resetPswSuccess,
                payload: response?.data,
                loading: false,
            });
            message.success("Password reset successfully ")

            resetFunc();
        } else {
            dispatch({
                type: userConstants.resetPswFailure,
                payload: null,
                loading: false,
            });
            // message.error(response?.data?.Message ? response.data.Message : response.data.Message);
            // message.error("Password has previously been used")
            message.error(response?.data?.Message)
        }
    } catch (error) {
        dispatch({
            type: userConstants.resetPswFailure,
            payload: null,
            loading: false,
        });
        message.error("Something Went Wrong")
    }
}

export const startTrip = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.startTripRequest,
        loading: true,
    });
    try {
        const response = await startTripApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.startTripSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.startTripFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.startTripFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}
export const visitTrip = (values, open, data) => async (dispatch) => {
    dispatch({
        type: userConstants.visitTripRequest,
        loading: true,
    });
    try {
        const response = await visitTripApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.visitTripSuccess,
                payload: response?.data,
                loading: false,
            });
            open(false);
            dispatch(getItineraryByDate(data))
            message.success("Place removed")
        } else {
            dispatch({
                type: userConstants.visitTripFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.visitTripFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const getTagsByCategoryId = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.getTagsByCategoryIdRequest,
        loading: true,
    });
    try {
        const response = await getTagsByCategoryIdApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getTagsByCategoryIdSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getTagsByCategoryIdFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.getTagsByCategoryIdFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const getSearchAll = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.getSearchAllRequest,
        loading: true,
    });
    try {
        const response = await getSearchAllApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getSearchAllSuccess,
                payload: response?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getSearchAllFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.getSearchAllFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const getRoutePlaces = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.getRoutePlacesRequest,
        loading: true,
    });
    try {
        const response = await getRoutePlacesApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getRoutePlacesSuccess,
                count: response.data?.Count,
                currentPageNumber: values?.currentPageNumber ? values?.currentPageNumber : false,
                payload: response?.data?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getRoutePlacesFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.getRoutePlacesFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const getPlaceLatLong = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.getPlaceLatLongRequest,
        loading: true,
    });
    try {
        const response = await getPlaceLatLongApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.getPlaceLatLongSuccess,
                payload: response?.data?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.getPlaceLatLongFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.getRoutePlacesFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}

export const placeRouteLanLong = (values, resetFunc) => async (dispatch) => {
    dispatch({
        type: userConstants.getPlaceLatLongRequest,
        loading: true,
    });
    try {
        const response = await placeRouteLatLongApi(values);
        if (response.data) {
            dispatch({
                type: userConstants.placeRouteLanLongSuccess,
                payload: response?.data?.data,
                loading: false,
            });
            resetFunc();
        } else {
            dispatch({
                type: userConstants.placeRouteLatLongFailure,
                payload: null,
                loading: false,
            });
            message.error(response?.data?.Message ? response.data.Message : response.data.Message);
        }
    } catch (error) {
        dispatch({
            type: userConstants.placeRouteLatLongFailure,
            payload: null,
            loading: false,
        });
        message.error(error)
    }
}