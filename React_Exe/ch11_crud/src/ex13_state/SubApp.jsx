
// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용한다.
function Header(props){

  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  )
  
}

function Nav(props){
  // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
  const lis = [];
  for(let i=0;i<props.topics.length;i++){
    let t = props.topics[i];    // 부모로부터 전달된 객체를 1개씩 추출
    // onChageMode에 어떤 list가 호출되었는지 전달하기 위해서, '사용자 정의 속성'인 id를 저장한다
    lis.push(<li key={t.id}>
              <a id={t.id} href={"/read/" + t.id}
                onClick={event=>{
                  event.preventDefault();   // <a>태그의 기본 동작 막기
                  props.onChangeMode(event.target.id);     // props내의 onChangeMode에 전달된 함수 호출
                }}>
                {t.title}
              </a>
            </li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

export default function SubApp(){

  let mode = 'WELCOME';   // 요소 클릭시 변경할 값
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]
  // html 요소 클릭시 mode에 저장된 값에 따라서 content가 바뀌어서 보여진다.
  let content = null;
  
  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, Web'></Article>
  }else if(mode === 'READ'){
    content = <Article title='Welcome' body='Hello, Read'></Article>
  }

    return (
        <div>
          <Header title='WEB' onChangeMode={()=>{
            mode = 'WELCOME';
          }} />
          <Nav topics={topics} onChangeMode={(id)=>{
            mode = 'READ';
          }} />
          {content}
        </div>
      );
}
