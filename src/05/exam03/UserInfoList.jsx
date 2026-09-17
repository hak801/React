import React from "react";
import UserInfo from "./UserInfo";
import "./UserInfoList.css";

const users = [
    {
        name: "Karina",
        avatarUrl: "https://cdn.pixabay.com/photo/2016/06/14/00/12/cat-1455463_1280.jpg",
        comment: "Positive mindset, Lucky vibe"
    },
    {
        name: "Cha0",
        avatarUrl: "https://cdn.pixabay.com/photo/2016/06/14/00/12/cat-1455463_1280.jpg",
        comment: "I think likes me"
    },
    {
        name: "Liz",
        avatarUrl: "https://cdn.pixabay.com/photo/2016/06/14/00/12/cat-1455463_1280.jpg",
        comment: "Sleep is Bestchoice"
    }
];

function UserInfoList() {
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                   return(
                       <div className={"comment"}>
                           <UserInfo user={user}/>
                           <div className={"comment-text"}>
                               {user.comment}
                           </div>
                           <div className={"comment-date"}>
                               {currentDate.toDateString()}
                           </div>
                       </div>
                   );
                })
            }
        </div>
    );
}

export default UserInfoList;