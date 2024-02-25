import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Nav from './Nav';
import FeedCard from './FeedCard';
import PostContext from '../Context/post/PostContext';

const Feeds = () => {
  const context = useContext(PostContext);
  const { allData, feedsData, updatePost } = context
  const [post, setPost] = useState({ id: "", title: "", body: "" });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home | Feeds"
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      feedsData()
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);


  const currentPost = (current) => {
    setPost({ id: current.id, title: current.title, body: current.body })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!post.title.length > 0 && !post.body.length > 0) {
      alert("All fields must be filled")
    } else {
      updatePost(post.useID, post.id, post.title, post.body)
      feedsData()
    }
  }

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  return (
    <div>
      {/* -----------------Modal Start------------- */}
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Post</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" name='title' id="title" onChange={onChange} value={post.title} required />
              </div>
              <div className="mb-3">
                <label htmlFor="body" className="form-label">Description</label>
                <textarea className="form-control" id="floatingTextarea" onChange={onChange} name='body' value={post.body}></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------Modal End------------- */}

      <Nav />
      <div className='d-flex'>
        <Sidebar />
        <div className='d-flex justify-content-center w-100' style={{ marginTop: "5%" }}>
          <div>
            {
              allData.map((post) => {
                return <div key={post.id}>
                  <FeedCard post={post} currentPost={currentPost} />
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feeds
