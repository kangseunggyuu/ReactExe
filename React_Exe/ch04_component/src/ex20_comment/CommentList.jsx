
import Comment from "./Comment";

// 데이터를 서버에서 받아왔다고 가정하고, 배열에 저장
const comments = [
    {
        name:"Albert",
        comment:"나의 컴포넌트입니다."
    },
    {
        name:"Alex",
        comment:"우리의 컴포넌트입니다."
    },
    {
        name:"Mike",
        comment:"나의 핫도그입니다."
    },
    {
        name:"차돌바위",
        comment:"나의 Money입니다."
    },
    {
        name:"머털도사",
        comment:"모든 것은 마음에 달려있습니다."
    },
]

function CommentList(props){   

    return(
        <div>
            {
                comments.map((comment)=>{
                    return(
                        <Comment name={comment.name} comment={comment.comment}/>
                    )
                })
            }
        </div>
    )
}

export default CommentList;