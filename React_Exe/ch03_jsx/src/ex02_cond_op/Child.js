function Child() {
  // const name = "리액트";
  const name = "리웩~트";
  return (
    <>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </>
  );
}

export default Child;
