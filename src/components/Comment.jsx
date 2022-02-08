import React from 'react';
import Avatar from './Avatar';
import userImg  from '../images/user.jpg'

const Comment = (props) => {

    return (
        <div className="comment">

            <div className="userInfo">
                <Avatar avatar={userImg} name="Jhanker Mahbub" />
                <h5 className='user-name'>{props.name}</h5>
            </div>
            <div className="comment-text"> {props.text} </div>
            <div className="comment-date"> {props.date} </div>

        </div>
    )
}

export default Comment;