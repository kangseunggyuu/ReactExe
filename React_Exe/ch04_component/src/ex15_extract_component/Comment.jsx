function Avatar(props){
    return(
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    )
}

function Comment(props){
    function formatDate(date){
        <div>날짜: {date}</div>
    }

    return(
        <div className="comment">
            <div className="user-info">
                <Avatar user={props.author}/>
                <div className="user-info-name">{props.author.name}</div>
            </div>

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