import { useSyncExternalStore } from "react";
import { useState } from "react";

const EventPractice = () => {

    // [변수명, setter함수] = useState(초기값)
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    // 이벤트 핸들러 함수
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessge = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + " : " + message);
        setUsername('');
        setMessage('');
    }
    const onKeyDown = e => {
        if(e.key === 'Enter')
            onClick();
    }

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" placeholder="사용자명"
                    value={username} onChange={onChangeUsername}/>
            <input type="text" name="message" placeholder="아무거나 입력해 보세요"
                    value={message} onChange={onChangeMessge} onKeyDown={onKeyDown}/>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;