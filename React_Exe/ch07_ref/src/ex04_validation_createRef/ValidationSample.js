import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

    input = React.createRef();

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        // 바로 다시 입력할 수 있도록 <input>에 포커스를 준다.
        this.input.current.focus();
    };

    render() {
        // <input></input> 요소를 this.input을 가리키게 된다.
        return (
            <div>
                <input
                    ref={this.input}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
