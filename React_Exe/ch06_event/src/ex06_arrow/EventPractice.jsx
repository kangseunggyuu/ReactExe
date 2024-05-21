import { Component } from "react";

class EventPractice extends Component{

    state = {
        message: ''
    }

    /* Arrow함수(화살표 함수, 람다 함수)는 bind가 필요없다.
       그래서 constructor()를 사용하지 않아도 된다.
     */

    handleChange = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    handleClick = (e) => {
        alert(this.state.message);
        this.setState({
            message : ''
        })
    }

    render() {
        return (            
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;