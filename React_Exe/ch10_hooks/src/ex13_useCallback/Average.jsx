import { useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    /* useCallback을 통해 변화된 값을 사용할 때만
      다시 함수 객체를 생성하므로 
      최적화를 할 수 있다.
     */

    // 처음 마운트시(렌더링될 때) 함수 생성
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    // number or list의 state가 변화되었을 때 함수 생성
    const onInsert = useCallback(() => {
        // number나 list값을 변화된 값을 가져와서 사용하므로 [number, list]를 해줘야 한다.
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);

    // useMemo는 최적화시 사용한다(연산량 감소)
    // list가 Hook에 의해 변화가 감지되었을 때만 
    // getAverage(list)를 호출해서 결과를 avg에 저장하라
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    )
}

export default Average;