import axios from './axios';
import { useSelector } from 'react-redux';

export const registerUserApi = (user) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "User/register",
        data: user
    })
}
export const FollowUserApi = (user) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Follower/create",
        data: user
    })
}

export const loginUserApi = (user) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "User/token",
        data: user
    })
}
export const RefreshApi = (user) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "User/get-user-by-id?uid=" + user,
    })
}
export const getAllPlaceCategoriesApi = () => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "PlaceCategory/get-all",
    })
}
export const getAllPlacesApi = (place) => {
    if (place && Object.keys(place)?.length) {
        // return axios.get(`${process.env.REACT_APP_URL}Place/get-all`, { params: place })
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Place/get-all",
            data: localStorage?.getItem("country") ? { ...place, country: localStorage?.getItem("country"), city: localStorage?.getItem("city") } : place
            // data: place
        })
    }
    else if (place?.UserId)
        return axios({
            method: "post",
            // url: process.env.REACT_APP_URL + "Place/get-all?UserId=" + place?.UserId,
            url: process.env.REACT_APP_URL + "Place/get-all",
            data: { UserId: place?.UserId }
        })
    else return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Place/get-all",
    })
}
export const getplacebyidApi = (id, userid) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Place/get-by-id?placeid=" + id + "&userId=" + userid
    })
}
export const getAllServicesApi = (body) => {
    if (body && Object.keys(body)?.length) {
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Service/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
        })
    } else {
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Service/get-all"
        })
    }
}
export const getAllProductsApi = (body) => {
    if (body && Object.keys(body)?.length) {
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Product/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
        })
    } else {
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Product/get-all"
        })
    }
}
export const getFeedsApi = (Id, pgno, pgz) => {
    // return axios.post(`${process.env.REACT_APP_URL}Service/get-all`, {
    //     // params: {
    //         CategoryId: cat,
    //         startprice: minp,
    //         endprice: maxp
    //     // },

    // })
    return axios.get(`${process.env.REACT_APP_URL}Timeline/user-newsfeed`, {
        params: {
            FollowerId: Id,
            currentPageNumber: pgno,
            pageSize: pgz
        },

    })
    // return axios({
    //     method: "post",
    //     url: process.env.REACT_APP_URL + "Timeline/user-newsfeed",
    //     data: {
    //     FollowerId:Id
    // }
    // })
}

export const getPostByIdApi = (data) => {
    return axios.get(`${process.env.REACT_APP_URL}Post/get-by-id`, { params: data })
}

export const getTimelineApi = (data, pgcount, pagsize) => {
    // return axios.post(`${process.env.REACT_APP_URL}Service/get-all`, {
    //     // params: {
    //         CategoryId: cat,
    //         startprice: minp,
    //         endprice: maxp
    //     // },

    // })
    return axios.get(`${process.env.REACT_APP_URL}Timeline/user-timeline`, {
        params: {
            UserId: data?.UserId,
            LoggedInUserId: data?.LoggedInUserId,
            currentPageNumber: pgcount,
            pageSize: pagsize,
        },

    })
    // return axios({
    //     method: "post",
    //     url: process.env.REACT_APP_URL + "Timeline/user-newsfeed",
    //     data: {
    //     FollowerId:Id
    // }
    // })
}

export const getAllJobsApi = (body) => {
    if (body && Object.keys(body)?.length)
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Job/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: body
        })
    else
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Job/get-all"
        })
}
export const getAllEventsApi = (body = {}) => {
    // if (body && Object.keys(body)?.length) return axios.get(`${process.env.REACT_APP_URL}Event/get-all`, { params: body })
    if (body && Object.keys(body)?.length)
        return axios({
            method: "post",
            url: process.env.REACT_APP_URL + "Event/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: body
        })
}

export const eventCreateApi = (user) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Event/create",
        data: user
    })
}

export const eventUpdateApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Event/update",
        data: data
    })
}

export const tripCreateApi = (value) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserTrips/create",
        data: value
    })
}

export const getProductCategoriesApi = () => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "ProductCategory/get-all"
    })
}
export const getTripApi = (id) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "UserTrips/get-by-userid?userid=" + id
    })
}
export const getTimelineTripApi = (id, date) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "UserTrips/trip-timeline?userid=" + id + "&date=" + date
    })
}
export const getTimelineTripdetailApi = (id, date) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "UserTrips/trip-timeline-details?tripId=" + id
    })
}
export const getTimelinecategorydetailApi = (id, cat) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "UserTrips/trip-timeline-details-category?tripId=" + id + "&categoryName=" + cat
    })
}
export const getTripbyidApi = (id) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "UserTrips/get-by-id?id=" + id
    })
}

export const getServiceCategoriesApi = () => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "ServiceCategory/get-all"
    })
}

export const createProductApi = (product) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Product/create",
        data: product
    })
}

export const updateProductApi = (product) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Product/update",
        data: product
    })
}

export const updateServiceApi = (service) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Service/update",
        data: service
    })
}

export const updateJobApi = (Job) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Job/update",
        data: Job
    })
}

export const createServiceApi = (service) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Service/create",
        data: service
    })
}

export const createPlaceApi = (service) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Place/create",
        data: service
    })
}

export const updatePlaceApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Place/update",
        data: data
    })
}

export const createJobApi = (service) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Job/create",
        data: service
    })
}

export const createPostApi = (service) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Post/create",
        data: service
    })
}

export const updatePostApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Post/update",
        data: data
    })
}

export const SharePostApi = (service) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Share/create",
        data: service
    })
}

export const deletePostApi = (post) => {
    return axios({
        method: "delete",
        url: process.env.REACT_APP_URL + "Post/delete?Postid=" + post?.Postid,
    })
}
export const getPostbyIdApi = (id) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Post/get-by-id?id=" + id,
    })
}

export const makeFavouriteApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserFavourite/create",
        data: data
    })
}

export const getPlaceCategoryListApi = (data) => {
    // return axios({
    //     method: "get",
    //     url: process.env.REACT_APP_URL + "Listing/get-all?Status=" + data.Status + "&Category=" + data.Category + "&Userid=" + data.UserId
    // })
    return axios.get(`${process.env.REACT_APP_URL}Listing/get-all`, { params: data })
}

export const getFavCategoryListApi = (data) => {
    if (data.RecordCategoryId)
        return axios({
            method: "get",
            url: process.env.REACT_APP_URL + "UserFavourite/get-all?RecordCategoryId=" + data.RecordCategoryId + "&Category=" + data.Category + "&UserId=" + data.UserId
        })
    else
        return axios({
            method: "get",
            url: process.env.REACT_APP_URL + "UserFavourite/get-all?Category=" + data.Category + "&UserId=" + data.UserId
        })
}

export const getEventsListApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Listing/get-all?Category=" + data.Category + "&UserId=" + data.UserId
    })
}

export const getJobsListApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Listing/get-all?Category=" + data.Category + "&UserId=" + data.UserId
    })
}

export const getFavouriteCheckApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "UserFavourite/user-favourite-check?RecordId=" + data.RecordId + "&UserId=" + data.UserId
    })
}

export const makeUnFavouriteApi = (data) => {
    return axios({
        method: "delete",
        url: process.env.REACT_APP_URL + "UserFavourite/delete?RecordId=" + data.RecordId + "&UserId=" + data.UserId
    })
}

export const createReviewApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Review/create",
        data: data
    })
}

export const getReviewsByRecordApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Review/get-by-recordId?recordId=" + data.RecordId,
    })
}

export const getCommentsFeedApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "PostComment/get-comment-by-postId?postId=" + data.RecordId,
    })
}

export const getServiceApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Service/get-by-id?id=" + data.Id + "&userid=" + data.userid,
    })
}

export const getProductApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + `Product/get-by-id?id=${data.Id}&userid=${data.userid}`,
    })
}

export const getPlaceApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + `Place/get-by-id?placeid=${data.placeid}&userid=${data.userid}`,
    })
}

export const getEventApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + `Event/get-by-id?id=${data.Id}&userid=${localStorage.getItem("Id") ? localStorage.getItem("Id") : null}`,
    })
}

export const getJobApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + `Job/get-by-id?id=${data.Id}&userid=${localStorage.getItem("Id") ? localStorage.getItem("Id") : null}`,
    })
}

export const getUserProfileApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "User/get-user-profile-by-id?username=" + data.UserId + "&LoggedInUserId=" + data.LoggedInUserId,
    })
}
export const chatMarkAsReadApi = (data, userid) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Chat/mark-as-read?channel=" + data + "&UserId=" + userid,
    })
}

export const getUserPostImagesApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "User/get-user-post-images?id=" + data.Id,
    })
}

export const dislikeFeedApi = (data) => {
    return axios.post(`${process.env.REACT_APP_URL}PostLike/delete?RecordId=${data?.RecordId}&UserId=${data?.UserId}`)
    // return axios({
    //     method: "post",
    //     url: process.env.REACT_APP_URL + "PostLike/delete",
    //     data: data
    // })
}

export const likeFeedApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "PostLike/create",
        data: data
    })
}

export const commentFeedApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "PostComment/create",
        data: data
    })
}

export const editCommentFeedApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "PostComment/update",
        data: data
    })
}

export const deleteCommentFeedApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "PostComment/delete?id=" + data?.Id,
    })
}

export const updateUserProfileApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "User/update-user",
        data: data
    })
}

export const getNewComersApi = (country, userId) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + `User/get-new-users-by-country?country=${country}&UserId=${userId}`,
    })
}

export const getConnectedUsersApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Chat/get-user-chat-by-userid?senderOrReceiverId=" + data.UserId,
    })
}

export const getUserChatApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Chat/getChat?channel=" + data.Channel + "&id=" + data.Id,
    })
}

export const getAllUsersApi = (data) => {


    if (data && Object.keys(data)?.length) return axios.get(`${process.env.REACT_APP_URL}User/get-users`, { params: data })
    else return axios({ method: "get", url: process.env.REACT_APP_URL + `User/get-users` })
}
export const getAllUsersUnPageApi = (data) => {


    if (data && Object.keys(data)?.length) return axios.get(`${process.env.REACT_APP_URL}User/get-users-unpaginated`, { params: data })
    else return axios({ method: "get", url: process.env.REACT_APP_URL + `User/get-users-unpaginated` })
}

export const createReportApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Reports/create",
        data: data
    })
}

export const createViewApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Views/create",
        data: data
    })
}

export const insertChatMessageApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Chat/insert",
        data: data
    })
}

export const activeDeactiveApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Listing/update",
        data: data
    })
}

export const getUserNotifications = (userId) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Notification/user-notifications?userId=" + userId,
    })
}

export const markAsReadApi = (notId) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Notification/read-by-id?notificationId=" + notId,
    })
}

export const createItineraryApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserTripItinerary/create",
        data: data
    })
}

export const confirmEmailApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "User/confirm-email",
        data: data
    })
}

export const resendEmailApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + `User/resend-email?email=${data.email}&webUrl=${data.webUrl}`,
        // data: data
    })
}


export const contactUsCreateApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "ContactUs/contact",
        data: data
    })
}

export const updateItineraryApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserTripItinerary/update",
        data: data
    })
}

export const editItineraryApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserTripItinerary/update",
        data: data
    })
}

export const forgotPswApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "User/forgot-password",
        data: data
    })
}

export const resetPswApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "User/reset-password",
        data: data
    })
}

export const getCountryApi = () => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Country/get-all",
    })
}

export const getRecentlyAddedApi = () => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "RecentlyAdded/get-all",
    })
}

export const getCitiesApi = () => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "City/get-all",
    })
}


export const getItineraryByDateApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "UserTripItinerary/get-by-date?Tripid=" + data?.TripId + "&date=" + data?.date,
    })
}

export const getSuggestedplaceApi = (long, lat, id) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Place/suggested-places?longitude=" + long + "&latitude=" + lat + "&placeCategoryId=" + id,
    })
}

export const deleteItineraryApi = (id) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserTripItinerary/delete?id=" + id,
    })
}

export const startTripApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserTrips/isStart",
        data: data
    })
}

export const visitTripApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "UserTripItinerary/trip-isvisit",
        data: data
    })
}

export const getTagsByCategoryIdApi = (data) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "CategoryTags/get-by-category-id?Categoryid=" + data?.Categoryid,
    })
}

export const getSearchAllApi = (data) => {
    if (data && Object.keys(data)?.length) {
        // let ndata = localStorage?.getItem("country") ? { ...data, Country: localStorage?.getItem("country") } : data
        let ndata = localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...data, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...data, Country: localStorage?.getItem("country") } : data

        return axios.get(`${process.env.REACT_APP_URL}Search/all`, { params: ndata })
    }
    else return axios({
        method: "get",
        url: process.env.REACT_APP_URL + "Search/all?LoggedInUserId=" + data?.LoggedInUserId
    })
}

export const getAllSearchPostsApi = (data) => {
    if (data && Object.keys(data)?.length) return axios.get(`${process.env.REACT_APP_URL}Post/get-all`, { params: data })
    else return axios({ method: "get", url: process.env.REACT_APP_URL + "Post/get-all" })
}

export const getRoutePlacesApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + "Place/route-places",
        data: data
    })
}

export const getPlaceLatLongApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + `Place/get-place-lat-long?Category=${data.Category}&Country=${data.country}&City=${data.city}`,
        data: data
    })
}

export const placeRouteLatLongApi = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_URL + `Place/get-place-lat-long?Category=${data.Category}&Country=${data.country}&City=${data.city}`,
        data: data
    })
}