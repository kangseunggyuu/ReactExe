import { useReducer } from "react";

function reducer(state, action){
    return {
        ...state,
        [action.name] : action.value
    };
}

/*
 Custom Hook
 1) 이름이 use로 시작되고, 내부에서 다른 Hook을 호출하는 js함수
    => 그래야 React가 Hook위반여부 감지 확인할 수 있다.
 2) 중복되는 로직을 Custom Hook으로 추출해서 재사용성 높이는 용도
*/

export default function useInputs(initialForm){
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = e => {
        dispatch(e.target);
    };

    return [state, onChange];
}

// export default useInputs;
