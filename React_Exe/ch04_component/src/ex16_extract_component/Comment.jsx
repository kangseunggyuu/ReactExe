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

function Comment(props){
    function formatDate(date){
        <div>날짜: {date}</div>
    }

    return(
        <div className="comment">

            <UserInfo user={props.author}/>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

export default Comment;