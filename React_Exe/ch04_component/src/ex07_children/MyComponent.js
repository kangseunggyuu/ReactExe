
const MyComponent = (props) => {
    return (
    <div>
    <div>안녕하세요, 제 이름은 {props.name}입니다.</div>
    <div>포함된 값은 {props.children}입니다.</div>
    </div>
    )
};

MyComponent.defaultProps = {
    name: "기본 이름",
}

export default MyComponent;