
// 1) 리액트는 '사용자 정의 태그를 만드는 기술이다'
// 2) 사용자 정의 태그 === 컴포넌트 === jsx객체
// 3) 프론트 App을 컴포넌트의 조립형태로 구조화

function Header(props) {
  // 헤더 부분을 가져온다.
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  )
}

function Nav(props) {
  // 네이게이션 부분을 가져온다.
  // props로부터 받은 데이터를 <li></li>로 가져온다.
  const lis = [];
  for (let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={"/read/"+t.id}> {t.title}</a></li>);
  }
  
    return (
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    )
}

function Article(props) {
  // 아티클 부분을 가져온다.
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

export default function SubApp() {

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 1, title: 'css', body: 'css is ...' },
    { id: 1, title: 'javascript', body: 'javascript is ...' },
  ]

  return (
    <div>
      <Header title='WEB' />
      <Nav topics={topics} />
      <Article title='Welcome' body='Hello, web' />
    </div>
  );
}