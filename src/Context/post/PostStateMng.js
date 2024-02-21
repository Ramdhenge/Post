import React from 'react'
import { useState } from 'react';
import PostContext from './PostContext';
import axios from 'axios';

const PostStateMng = (props) => {
    const [allData, setAllData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [postID, setPostID] = useState(101);

    //get all post 
    const feedsData = async () => {
        const response = await axios.get(`${url}`)
        setAllData(response.data);
    }

    // create a post
    const addPost = async (title, body) => {
        setPostID(postID + 1);
        const response = await axios.post(`${url}`, {
            userID: 1,
            id: postID,
            title: title,
            body: body
        })
        const newPost = response.data;
        newPost.id = postID;
        allData.unshift(newPost)
        setAllData(allData)
    }

    // update post
    const updatePost = async (userID, id, title, body) => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            userID: userID,
            id: id,
            title: title,
            body: body
        })

        const newPost = await response.data;
        const oldPost = allData.find((e) => e.id === id)
        oldPost.title = newPost.title
        oldPost.body = newPost.body

        setAllData(allData);
    }

    // delete post
    const handleDelete = async (id) => {
        await axios.delete(`${url}/${id}`)
        const newPostData = allData.filter((post) => { return post.id !== id })
        setAllData(newPostData);
    }

    return (
        <PostContext.Provider value={{ allData, feedsData, handleDelete, addPost, updatePost }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostStateMng
