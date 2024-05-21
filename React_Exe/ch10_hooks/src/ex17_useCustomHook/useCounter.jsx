import {useState} from 'react';

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const addCount = () => setCount((count)=>count+1);
    // 0이하로는 더 이상 낮아지지 않음
    const subCount = () => setCount((count)=>Math.max(count-1, 0));

    return [count, addCount, subCount];
}

export default useCounter;