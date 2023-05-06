import React, { forwardRef, useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
//import InputOption from '../Feed/InputOption';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./css/post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { VerticalAlignTopOutlined } from '@mui/icons-material';
//import { useSelector } from 'react-redux';
//import Button from '@material-ui/core/Button'; 
//import { useState } from 'react';


   // const [likes, setLikes] = useState(0);
   // const [liked, setLiked] = useState(false);

const Post = forwardRef(({name, description, message, photoURL} , ref) => {
  const [like, setLike] = useState(0);
  useEffect(() => {
    const likecount = localStorage.getItem("inc");

    if(likecount) {
      setLike(parseInt(likecount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inc", like);
  }, [like]);


 const[comments, setComments] = useState([]);
  const[commentVisible, setCommentVisible] = useState(false);

  useEffect(() => {
    localStorage.getItem("com");
  });

  const handleLike = () => {
    //setLike(like + 1);
    alert("like");
    
  };

  const handleComment = () => {
    setCommentVisible(!commentVisible);
  };

  const handleAddComment = (e) => {
     if (e.key === "Enter" && e.target.value.trim()!== "") {
      setComments([...comments,e.target.value.trim()]);
      e.target.value = "";
     }
  };
  
  return (
    <div className="posts" ref={ref}>
        <div className="posts__header">
            <div className="post__headerLeft">
                <Avatar src={photoURL}/>
                <div className="post_profile_details">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>

            
            <MoreHorizIcon/>
            
        </div>

        <div className="post__body">
            <p>{message}
            </p>
        </div>
       
       <div className="post__footer">
        <div className="post__footer__option">
      <ThumbUpAltIcon onClick={handleLike} className = "post__likeButton"/>
      <span>{localStorage.getItem("likes") || 0 }</span>
    <span>Like</span>
       <VerticalAlignTopOutlined fontSize="small"/>
        </div>

        <div className="post__footer__option">
        <CommentIcon onClick = {handleComment} className="post__commentButton"/>
       
      <span>Comment</span>
      </div>
   
        <div className="post__footer__option">
        <ShareIcon/>
        <span>Share</span>
        </div>

        <div className="post__footer__option">
        <SendIcon/>
        <span>Send</span>
        </div>

        <div className={`commentSection $ {commentVisible ? "visible" : ""}`}>
     {comments.map((comment, index) => (
      <div key={index} className="comment-show">
        <h3>{comment}</h3>
        </div>
     ))}
     <input type="text" onKeyDown={handleAddComment} placeholder="Add a comment..."/>
     </div>
       </div>
    </div>
  );

}
);

export default Post
