import React, {useState} from 'react';


import './Event_Story.css';
import Input from './Input';
import Post from './Post';


let id = 1;

function Event_Story() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = {id, title};
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <div className="bg-event">
        <Input addPost={addPost}/>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost}/>
        ))}
    </div>
  );

}

export default Event_Story;
