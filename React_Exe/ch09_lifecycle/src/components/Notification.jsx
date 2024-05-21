import React, {Component} from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDrection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    }
}

class Notification extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() iscalled.`);
    }
    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        )
    }
}

export default Notification