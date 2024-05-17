import logo from "./logo.svg";
import "./App.css";

// import MyComponent from "./ex06_default_props copy/MyComponent";
// import Child from "./ex01_function/Child";
// import Child from "./ex02_class/Child";
// import MyComponent from "./ex03_props/MyComponent";
// import Library from "./ex04_props/Library";
// import MyComponent from "./ex05_props/MyComponent";
// import MyComponent from "./ex06_default_props/MyComponent";
// import MyComponent from "./ex07_children/MyComponent";
// import MyComponent from "./ex08_destructing/MyComponent";
// import MyComponent from "./ex09_prop_types/MyComponent";
// import MyComponnt from "./ex10_prop_required/MyComponent";
// import MyComponent from "./ex11_prop_class/MyComponent";
// import MyComponent from "./ex12_prop_class/MyComponent";
// import Team from "./ex13_compose_component/Team";
// import CommentList from "./ex18_comment/CommentList";
// import CommentList from "./ex19_comment/CommentList";

import CommentList from "./ex20_comment/CommentList";

function App() {
  return (
    // <Library title="조선 선비들의" />

    // <>
    //   <MyComponent />
    //   <MyComponent name="리액트" />
    // </>

    // <MyComponent name="Happy Happy">리액트 프로그래밍</MyComponent>

    // <MyComponent name="행운">리액트</MyComponent>
    // <MyComponent name={3}>리액트</MyComponent>

    // <MyComponent name="React_Programming">리액트</MyComponent>
    // <MyComponent name="리액트_뷰_앵귤러_노드_넥스트" favoriteNumber={3}>
    //   리액트
    // </MyComponent>

    // <Team title="재능 기부 교류 서비스" />

    <CommentList />
  );
}

export default App;