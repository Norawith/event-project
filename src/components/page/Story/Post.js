import React, { Component } from 'react'
import propTypes from 'prop-types';

function Post({ id, title, deletePost }){
    return (
        <div className='Post'>
            <button className='Post__delete' onClick={() => deletePost(id)}>X</button>
            <div className='Post__title'>{title}</div>
            <img className='Post__image' src={`https://source.unsplash.com/random?sig=${id}`}/>
        </div>
    )
}

Post.prototype = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    deletePost: propTypes.func.isRequired
};

export default Post;
