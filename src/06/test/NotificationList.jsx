import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요 저는 000입니다 만나서 반갑습니다."
    },
    {
        id: 2,
        message: "오늘은 10월의 첫째주 첫째날."
    },
    {
        id: 3,
        message: "슬슬 시험 준비해야한다."
    },
    {
        id: 4,
        message: "시험 준비를 해야하는 기분이 어떠신가요."
    },
    {
        id: 5,
        message: "기분이 안 좋다면 사이다 한잔."
    }
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    render() {
        return(
            <div className="notification-list">
                {
                    this.state.notifications.map((notification) =>{
                        return <Notification key={notification.id} id={notification.id} message={notification.message}/>
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() =>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            }else{
                clearInterval(timer);
            }
        },3000)
    }

    componentWillUnmount() {
        if (timer){
            clearInterval(timer);
        }
    }
}

export default  NotificationList;