import React from "react";
export const imageUrl = process.env.REACT_APP_IMAGE_URL
export const baseUrl = process.env.REACT_APP_URL

// export const utcChange = (utcTime) =>{
        
//     // const utcTime = data?.OrignalPost ? data?.OrignalPost?.CreatedOn : data?.CreatedOn;
//     const dateInUTC = new Date(utcTime);
  
//     // Get the user's local time zone offset in minutes
//     const timeZoneOffset = dateInUTC.getTimezoneOffset();
  
//     // Calculate the local time by adding the offset
//     const localTime = new Date(dateInUTC.getTime() - timeZoneOffset * 60000);
  
//     // Format the local time as a string
//     const formattedLocalTime = localTime.toLocaleString();
//     return formattedLocalTime
// }


export const utcChange = (utcTime) => {
    // Add 'Z' to the end of the UTC time string to indicate UTC time
    utcTime = utcTime.endsWith("Z") ? utcTime : utcTime + "Z";
  
    // Create a new Date object from the UTC time string
    const dateInUTC = new Date(utcTime);
  
    // Format the local time as a string in a specific format
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    const formattedLocalTime = dateInUTC.toLocaleString('en-US', options);
  
    return formattedLocalTime;
  }
  