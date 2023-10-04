import axiosInstance from './axios';
import { useSelector } from 'react-redux';

export const registerUserApi = (user) => {
    return axiosInstance({
        method: "post",
        url: "User/register",
        data: user
    })
}
export const FollowUserApi = (user) => {
    return axiosInstance({
        method: "post",
        url: "Follower/create",
        data: user
    })
}

export const loginUserApi = (user) => {
    return axiosInstance({
        method: "post",
        url: "User/token",
        data: user
    })
}
// export const RefreshtokenApi = (user) => {
//     return axiosInstance({
//         method: "get",
//         url: "User/refresh-token?token=" + user.toString(),
//     })
// }
export const RefreshtokenApi = (user) => {
    return axiosInstance.get("User/refresh-token",{
      params:{
        token:user
        }
    }
    )
}
export const RefreshApi = (user) => {
    return axiosInstance({
        method: "get",
        url: "User/get-user-by-id?uid=" + user,
    })
}
export const getAllPlaceCategoriesApi = () => {
    return axiosInstance({
        method: "get",
        url: "PlaceCategory/get-all",
    })
}
export const getAllPlacesApi = (place) => {
    if (place && Object.keys(place)?.length) {
        // return axiosInstance.get(`Place/get-all`, { params: place })
        return axiosInstance({
            method: "post",
            url: "Place/get-all",
            data: localStorage?.getItem("country") ? { ...place, country: localStorage?.getItem("country"), city: localStorage?.getItem("city") } : place
            // data: place
        })
    }
    else if (place?.UserId)
        return axiosInstance({
            method: "post",
            // url: "Place/get-all?UserId=" + place?.UserId,
            url: "Place/get-all",
            data: { UserId: place?.UserId }
        })
    else return axiosInstance({
        method: "post",
        url: "Place/get-all",
    })
}
export const getplacebyidApi = (id, userid) => {
    return axiosInstance({
        method: "get",
        url: "Place/get-by-id?placeid=" + id + "&userId=" + userid
    })
}
export const getAllServicesApi = (body) => {
    if (body && Object.keys(body)?.length) {
        return axiosInstance({
            method: "post",
            url: "Service/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
        })
    } else {
        return axiosInstance({
            method: "post",
            url: "Service/get-all"
        })
    }
}
export const getAllProductsApi = (body) => {
    if (body && Object.keys(body)?.length) {
        return axiosInstance({
            method: "post",
            url: "Product/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
        })
    } else {
        return axiosInstance({
            method: "post",
            url: "Product/get-all"
        })
    }
}
// export const getFeedsApi = async (Id, pgno, pgz) => {
//     try {
//          const response = await axiosInstance.get(`Timeline/user-newsfeed`, {
//              params: {
//                  FollowerId: Id,
//                  currentPageNumber: pgno,
//                  pageSize: pgz
//              },
//          });
//          return response;
//     } catch (error) {
//         let token = localStorage.getItem("Token")
        
//          // Handle the error here
//          console.error('An error occurred while fetching data:', error?.response?.status);
//          if(error?.response?.status == 401 && localStorage.getItem("Token")){
//             console.log("echala")
//             localStorage.removeItem('RefreshToken');
//             localStorage.removeItem('Token');
//             localStorage.removeItem('Id');
//             window.location.reload()
//          }
 
//          // You can also throw the error again if you want to handle it in a different part of your code
//          throw error;
//     }
//  } 
export const getFeedsApi = (Id, pgno, pgz) => {
   
    return axiosInstance.get(`Timeline/user-newsfeed`, {
        params: {
            FollowerId: Id,
            currentPageNumber: pgno,
            pageSize: pgz
        },

    })
   
}

export const getPostByIdApi = (data) => {
    return axiosInstance.get(`Post/get-by-id`, { params: data })
}

export const getTimelineApi = (data, pgcount, pagsize) => {
    // return axiosInstance.post(`Service/get-all`, {
    //     // params: {
    //         CategoryId: cat,
    //         startprice: minp,
    //         endprice: maxp
    //     // },

    // })
    return axiosInstance.get(`Timeline/user-timeline`, {
        params: {
            UserId: data?.UserId,
            LoggedInUserId: data?.LoggedInUserId,
            currentPageNumber: pgcount,
            pageSize: pagsize,
        },

    })
    // return axiosInstance({
    //     method: "post",
    //     url: "Timeline/user-newsfeed",
    //     data: {
    //     FollowerId:Id
    // }
    // })
}

export const getAllJobsApi = (body) => {
    if (body && Object.keys(body)?.length)
        return axiosInstance({
            method: "post",
            url: "Job/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: body
        })
    else
        return axiosInstance({
            method: "post",
            url: "Job/get-all"
        })
}
export const getAllEventsApi = (body = {}) => {
    // if (body && Object.keys(body)?.length) return axiosInstance.get(`Event/get-all`, { params: body })
    if (body && Object.keys(body)?.length)
        return axiosInstance({
            method: "post",
            url: "Event/get-all",
            data: localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...body, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: localStorage?.getItem("country") ? { ...body, Country: localStorage?.getItem("country") } : body
            // data: body
        })
}

export const eventCreateApi = (user) => {
    return axiosInstance({
        method: "post",
        url: "Event/create",
        data: user
    })
}

export const eventUpdateApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Event/update",
        data: data
    })
}

export const tripCreateApi = (value) => {
    return axiosInstance({
        method: "post",
        url: "UserTrips/create",
        data: value
    })
}

export const getProductCategoriesApi = () => {
    return axiosInstance({
        method: "get",
        url: "ProductCategory/get-all"
    })
}
export const getTripApi = (id) => {
    return axiosInstance({
        method: "get",
        url: "UserTrips/get-by-userid?userid=" + id
    })
}
export const getTimelineTripApi = (id, date) => {
    return axiosInstance({
        method: "get",
        url: "UserTrips/trip-timeline?userid=" + id + "&date=" + date
    })
}
export const getTimelineTripdetailApi = (id, date) => {
    return axiosInstance({
        method: "get",
        url: "UserTrips/trip-timeline-details?tripId=" + id
    })
}
export const getTimelinecategorydetailApi = (id, cat) => {
    return axiosInstance({
        method: "get",
        url: "UserTrips/trip-timeline-details-category?tripId=" + id + "&categoryName=" + cat
    })
}
export const getTripbyidApi = (id) => {
    return axiosInstance({
        method: "get",
        url: "UserTrips/get-by-id?id=" + id
    })
}

export const getServiceCategoriesApi = () => {
    return axiosInstance({
        method: "get",
        url: "ServiceCategory/get-all"
    })
}

export const createProductApi = (product) => {
    return axiosInstance({
        method: "post",
        url: "Product/create",
        data: product
    })
}

export const updateProductApi = (product) => {
    return axiosInstance({
        method: "post",
        url: "Product/update",
        data: product
    })
}

export const updateServiceApi = (service) => {
    return axiosInstance({
        method: "post",
        url: "Service/update",
        data: service
    })
}

export const updateJobApi = (Job) => {
    return axiosInstance({
        method: "post",
        url: "Job/update",
        data: Job
    })
}

export const createServiceApi = (service) => {
    return axiosInstance({
        method: "post",
        url: "Service/create",
        data: service
    })
}

export const createPlaceApi = (service) => {
    return axiosInstance({
        method: "post",
        url: "Place/create",
        data: service
    })
}

export const updatePlaceApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Place/update",
        data: data
    })
}

export const createJobApi = (service) => {
    return axiosInstance({
        method: "post",
        url: "Job/create",
        data: service
    })
}

export const createPostApi = (service) => {
    return axiosInstance({
        method: "post",
        url: "Post/create",
        data: service
    })
}

export const updatePostApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Post/update",
        data: data
    })
}

export const SharePostApi = (service) => {
    return axiosInstance({
        method: "post",
        url: "Share/create",
        data: service
    })
}

export const deletePostApi = (post) => {
    return axiosInstance({
        method: "delete",
        url: "Post/delete?Postid=" + post?.Postid,
    })
}
export const getPostbyIdApi = (id) => {
    return axiosInstance.get("Post/get-user-post-by-userId",{
        params:{
          id:id,
          userid:localStorage.getItem("Id")
          }
      })
    // return axiosInstance({
        // method: "get",
        // url: `Post/get-user-post-by-userId?id=${id}&userId`,
        // url: "Post/get-by-id?id=" + id,
    // })
}

export const makeFavouriteApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "UserFavourite/create",
        data: data
    })
}

export const getPlaceCategoryListApi = (data) => {
    // return axiosInstance({
    //     method: "get",
    //     url: "Listing/get-all?Status=" + data.Status + "&Category=" + data.Category + "&Userid=" + data.UserId
    // })
    return axiosInstance.get(`Listing/get-all`, { params: data })
}

export const getFavCategoryListApi = (data) => {
    if (data.RecordCategoryId)
        return axiosInstance({
            method: "get",
            url: "UserFavourite/get-all?RecordCategoryId=" + data.RecordCategoryId + "&Category=" + data.Category + "&UserId=" + data.UserId
        })
    else
        return axiosInstance({
            method: "get",
            url: "UserFavourite/get-all?Category=" + data.Category + "&UserId=" + data.UserId
        })
}

export const getEventsListApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "Listing/get-all?Category=" + data.Category + "&UserId=" + data.UserId
    })
}

export const getJobsListApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "Listing/get-all?Category=" + data.Category + "&UserId=" + data.UserId
    })
}

export const getFavouriteCheckApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "UserFavourite/user-favourite-check?RecordId=" + data.RecordId + "&UserId=" + data.UserId
    })
}

export const makeUnFavouriteApi = (data) => {
    return axiosInstance({
        method: "delete",
        url: "UserFavourite/delete?RecordId=" + data.RecordId + "&UserId=" + data.UserId
    })
}

export const createReviewApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Review/create",
        data: data
    })
}

export const getReviewsByRecordApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "Review/get-by-recordId?recordId=" + data.RecordId,
    })
}

export const getCommentsFeedApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "PostComment/get-comment-by-postId?postId=" + data.RecordId,
    })
}

export const getServiceApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "Service/get-by-id?id=" + data.Id + "&userid=" + data.userid,
    })
}

export const getProductApi = (data) => {
    return axiosInstance({
        method: "get",
        url: `Product/get-by-id?id=${data.Id}&userid=${data.userid}`,
    })
}

export const getPlaceApi = (data) => {
    return axiosInstance({
        method: "get",
        url: `Place/get-by-id?placeid=${data.placeid}&userid=${data.userid}`,
    })
}

export const getEventApi = (data) => {
    return axiosInstance({
        method: "get",
        url: `Event/get-by-id?id=${data.Id}&userid=${localStorage.getItem("Id") ? localStorage.getItem("Id") : null}`,
    })
}

export const getJobApi = (data) => {
    return axiosInstance({
        method: "get",
        url: `Job/get-by-id?id=${data.Id}&userid=${localStorage.getItem("Id") ? localStorage.getItem("Id") : null}`,
    })
}

export const getUserProfileApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "User/get-user-profile-by-id?username=" + data.UserId + "&LoggedInUserId=" + data.LoggedInUserId,
    })
}
export const chatMarkAsReadApi = (data, userid) => {
    return axiosInstance({
        method: "post",
        url: "Chat/mark-as-read?channel=" + data + "&UserId=" + userid,
    })
}

export const notificationMarkAsReadApi = (userid) => {
    return axiosInstance({
        method: "post",
        url: "Notification/mark-as-read?userid="+userid,
    })
}

export const getUserPostImagesApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "User/get-user-post-images?id=" + data.Id,
    })
}

export const dislikeFeedApi = (data) => {
    return axiosInstance.post(`PostLike/delete?RecordId=${data?.RecordId}&UserId=${data?.UserId}`)
    // return axiosInstance({
    //     method: "post",
    //     url: "PostLike/delete",
    //     data: data
    // })
}

export const likeFeedApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "PostLike/create",
        data: data
    })
}

export const commentFeedApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "PostComment/create",
        data: data
    })
}

export const editCommentFeedApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "PostComment/update",
        data: data
    })
}

export const deleteCommentFeedApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "PostComment/delete?id=" + data?.Id,
    })
}

export const updateUserProfileApi = (data,remove,removecover) => {
    console.log("data",data)
    console.log("remc",removecover)
    console.log("rem",remove)
    return axiosInstance({
        method: "post",
        url: "User/update-user",
        data: {...data,Image: remove == true ? "" : data.Image ? data.Image : null ,Cover: removecover == true ? "" : data.Cover ? data.Cover : null }
    })
}

export const getNewComersApi = (country, userId) => {
    return axiosInstance({
        method: "get",
        url: `User/get-new-users-by-country?country=${country}&UserId=${userId}`,
    })
}

export const getConnectedUsersApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "Chat/get-user-chat-by-userid?senderOrReceiverId=" + data.UserId,
    })
}

export const getUserChatApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "Chat/getChat?channel=" + data.Channel + "&id=" + data.Id,
    })
}

export const getAllUsersApi = (data) => {


    if (data && Object.keys(data)?.length) return axiosInstance.get(`User/get-users`, { params: data })
    else return axiosInstance({ method: "get", url: `User/get-users` })
}
export const getAllUsersUnPageApi = (data) => {


    if (data && Object.keys(data)?.length) return axiosInstance.get(`User/get-users-unpaginated`, { params: data })
    else return axiosInstance({ method: "get", url: `User/get-users-unpaginated` })
}

export const createReportApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Reports/create",
        data: data
    })
}

export const createViewApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Views/create",
        data: data
    })
}

export const insertChatMessageApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Chat/insert",
        data: data
    })
}

export const activeDeactiveApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Listing/update",
        data: data
    })
}

export const getUserNotifications = (userId) => {
    return axiosInstance({
        method: "get",
        url: "Notification/user-notifications?userId=" + userId,
    })
}

export const markAsReadApi = (notId) => {
    return axiosInstance({
        method: "post",
        url: "Notification/read-by-id?notificationId=" + notId,
    })
}

export const createItineraryApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "UserTripItinerary/create",
        data: data
    })
}

export const confirmEmailApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "User/confirm-email",
        data: data
    })
}
export const confirmResettokenApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "User/Verify_user_token",
        data: data
    })
}

export const resendEmailApi = (data) => {
    return axiosInstance({
        method: "post",
        url: `User/resend-email?email=${data.email}&webUrl=${data.webUrl}`,
        // data: data
    })
}


export const contactUsCreateApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "ContactUs/contact",
        data: data
    })
}

export const updateItineraryApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "UserTripItinerary/update",
        data: data
    })
}

export const editItineraryApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "UserTripItinerary/update",
        data: data
    })
}

export const forgotPswApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "User/forgot-password",
        data: data
    })
}

export const resetPswApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "User/reset-password",
        data: data
    })
}

export const getCountryApi = () => {
    return axiosInstance({
        method: "get",
        url: "Country/get-all",
    })
}

export const getRecentlyAddedApi = () => {
    return axiosInstance({
        method: "get",
        url: "RecentlyAdded/get-all",
    })
}

export const getCitiesApi = () => {
    return axiosInstance({
        method: "get",
        url: "City/get-all",
    })
}


export const getItineraryByDateApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "UserTripItinerary/get-by-date?Tripid=" + data?.TripId + "&date=" + data?.date,
    })
}

export const getSuggestedplaceApi = (long, lat, id) => {
    return axiosInstance({
        method: "get",
        url: "Place/suggested-places?longitude=" + long + "&latitude=" + lat + "&placeCategoryId=" + id,
    })
}

export const deleteItineraryApi = (id) => {
    return axiosInstance({
        method: "post",
        url: "UserTripItinerary/delete?id=" + id,
    })
}

export const startTripApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "UserTrips/isStart",
        data: data
    })
}

export const visitTripApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "UserTripItinerary/trip-isvisit",
        data: data
    })
}

export const getTagsByCategoryIdApi = (data) => {
    return axiosInstance({
        method: "get",
        url: "CategoryTags/get-by-category-id?Categoryid=" + data?.Categoryid,
    })
}

export const getSearchAllApi = (data) => {
    if (data && Object.keys(data)?.length) {
        // let ndata = localStorage?.getItem("country") ? { ...data, Country: localStorage?.getItem("country") } : data
        let ndata = localStorage?.getItem("country") && localStorage?.getItem("city") ? { ...data, Country: localStorage?.getItem("country"), City: localStorage?.getItem("city") } : localStorage?.getItem("country") ? { ...data, Country: localStorage?.getItem("country") } : data

        return axiosInstance.get(`Search/all`, { params: ndata })
    }
    else return axiosInstance({
        method: "get",
        url: "Search/all?LoggedInUserId=" + data?.LoggedInUserId
    })
}

export const getAllSearchPostsApi = (data) => {
    if (data && Object.keys(data)?.length) return axiosInstance.get(`Post/get-all`, { params: data })
    else return axiosInstance({ method: "get", url: "Post/get-all" })
}

export const getRoutePlacesApi = (data) => {
    return axiosInstance({
        method: "post",
        url: "Place/route-places",
        data: data
    })
}

export const getPlaceLatLongApi = (data) => {
    // return axiosInstance({
    //     method: "post",
    //     url: `Place/get-place-lat-long?Category=${data.Category}&Country=${data.country}&City=${data.city}`,
    //     data: data

    // })
    return axiosInstance.get("Place/get-place-lat-long",{
        params:{
            Category : data.Category,
            Country : data.country,
            City : data.city
          }
      })
}

export const placeRouteLatLongApi = (data) => {
    return axiosInstance({
        method: "post",
        url: `Place/get-place-lat-long?Category=${data.Category}&Country=${data.country}&City=${data.city}`,
        data: data
    })
}