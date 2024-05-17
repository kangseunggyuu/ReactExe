
/* 상위 컴포넌트에서 props로 묶어서 전달해도 되지만
아래처럼 가각 변수에 나눠서 할당하는 것도 가능하다.
이것을 비구조화 할ㄷㅇ(destructiong assignment)이라하고
'구조 분해 문법'이라고도 한다. */
const MyComponent = ({name, children}) => {
    return (
    <div>
    <div>안녕하세요, 제 이름은 {name}입니다.</div>
    <div>포함된 값은 {children}입니다.</div>
    </div>
    )
};

MyComponent.defaultProps = {
    name: "기본 이름",
}

export default MyComponent;