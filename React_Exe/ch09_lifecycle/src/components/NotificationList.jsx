import React, { Component } from 'react';
import Notification from './Notification';

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요. 오늘 일정 알려드립니다."
    },
    {
        id: 2,
        message: "점심 식사 시간입니다."
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다."
    }
]

let timer;

class NotificationList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        }
    }

    // 컴포넌트 시작 시 호출
    componentDidMount() {
        const { notifications } = this.state;
        // 컴포넌트가 시작되면 타이머가 1초 단위로 반복한다.
        // 1초에 1번씩 reservedNotifications에 있는 데이터를 sn==notifications에 저장한다.
        // 모두 저장했으면 타이머를 종료
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            } else {
                this.setState({
                    notifications: []
                })
                clearInterval(timer);
            }
        }, 1000);
    }
    // 컴포넌트 종료 시 호출
    componentWillUnmount() {
        if (timer)
            clearInterval(timer);
    }
    // 화면에 그릴 때 호출
    render() {
        return (
            <div>
                {this.state.notifications.map((notifications) => {
                    return <Notification
                        key={Notification.id}
                        id={Notification.id}
                        message={notifications.message} />
                })}
            </div>
        )
    }

}

export default NotificationList;