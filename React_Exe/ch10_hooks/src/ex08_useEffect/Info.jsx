import { useState, useEffect } from "react";

/*
 클래스 컴포넌트 : Life Cycle
 함수 컴포넌트 : Life Cycle -> useEffect

 [클래스]
 componentDidMount(마운트)        
 componentDidUpdate(업데이트)    
 componentWillUnmount(언마운트)

 [함수]
 useEffect(()=>{});     업데이트시마다 등록된 함수가 매번 호출된다
 useEffect(()=>{}, []);  마운트시 1번만 호출된다.
 useEffect(()=>{}, [name]);  name state가 변화되었을 때 호출된다.
 useEffect(()=>{ 
    name state가 변화되었을 때 호출되는 부분
    return() => {
        업데이트 직전/언마운트 되기 전
    };
 }, [name]);
*/

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;