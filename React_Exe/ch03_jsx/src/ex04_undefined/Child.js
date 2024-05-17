function Child() {
  const name = undefined;

  // return name;

  return <div>{name || "값이 undefined입니다."}</div>;
}

export default Child;
