function Avatar(props){
    return(
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    )
}

function UserInfo(props){
    return (
            <div className="user-info">
                <Avatar user={props.user}/>
                <div className="user-info-name">{props.user.name}</div>
            </div>        
    )
}

function CommentText(props){
    return(
        <div className="comment-text">
            {props.text}
        </div>
    )
}

function CommentDate(props){
    function formatDate(date){
        <div>날짜: {date}</div>
    }

    return(
        <div className="comment-date">
            {formatDate(props.date)}
        </div>
    )
}

// 컴포넌트 추출


function Comment(props){

    return(
        <div className="comment">

            <UserInfo user={props.author}/>

            <CommentText text={props.text}/>

            <CommentDate date={props.date}/>

        </div>
    )
}

export default Comment;