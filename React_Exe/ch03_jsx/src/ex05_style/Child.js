function Child() {
  const name = "리액트";

  // camel 표기법으로 바뀜
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다.
  }

  return <div style={style}>{name}</div>
}

export default Child;
