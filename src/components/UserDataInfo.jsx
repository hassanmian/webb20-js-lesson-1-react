import React from 'react'
function UserDataInfo(props) {
    /* 
    props = {
        userData: "Hassan"
    }
    */
    return(
    <p onClick={() => alert(props.userData)}>{props.userData}</p>
    )
}

export default UserDataInfo;