import useInputs from "./useInputs";

const Spec = () => {
    const [state, onChange] = useInputs({
        kor : '',
        eng : '',
        math : ''
    });
    const { kor, eng, math} = state;

    return (
        <div>
            <div>
                <input name="kor" value={kor} onChange={onChange}/>
                <input name="eng" value={eng} onChange={onChange}/>
                <input name="math" value={math} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>국어:</b> {kor}
                </div>
                <div>
                    <b>영어: </b> {eng}
                </div>
                <div>
                    <b>수학: </b> {math}
                </div>
            </div>
        </div>
    )
}

export default Spec;