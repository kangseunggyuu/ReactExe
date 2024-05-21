import { Component } from "react";

/*
state는 Hook의 일종으로
컴포넌트의 상태를 컴포넌트 내부에 저장하기 위해
리액트가 지원해주는 문법이다.
내부에 저장하는 이유는 컴포넌트의 외부 의존도를 낮추고 독립성을 가지기 위함이다.

선언은 this.state = ( 변수명: 초기값 )으로 하고
this.state의 내부 변수값을 변경할 때는 반드시
this.setState = ({변수명: 변수명 + 변화값})으로 해야
리액트의 Virtual DOM이 이 요소의 변화를 감지하여 화면상에 반영(render)한다.
*/

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    render() {
        const { number } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => {
                    this.setState({ number: number + 1 });
                }}>
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;