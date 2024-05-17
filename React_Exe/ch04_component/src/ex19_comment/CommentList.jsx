
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name={"Albert"} comment={"나의 컴포넌트입니다."}/>
            <Comment name={"차돌바위"} comment={"우리의 컴포넌트입니다."}/>
        </div>
    )
}

export default CommentList;