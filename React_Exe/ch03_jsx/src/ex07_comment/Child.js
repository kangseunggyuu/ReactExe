import './Child.css';

function Child() {
  const name = "리액트";

  // js 주석은 이렇게 작성합니다.
  /* js 여러줄 주석 */

  return <>
    {/* 주석은 이렇게 작성합니다. */}
    <div className="react">
      {name}
    </div>
  // 이런 주석은 보입니다.
  /* 이것도 보입니다. */
  </>;
}

export default Child;
