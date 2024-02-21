import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import PostContext from '../Context/post/PostContext'

const Sidebar = () => {

    const context = useContext(PostContext);
    const { addPost, feedsData } = context;
    const [post, setPost] = useState({ title: "", body: "" })

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const handlePost = (e) => {
        e.preventDefault();
        if (post.title.length > 0 && post.body.length > 0) {
            addPost(post.title, post.body);
            setPost({ title: "", body: "" });
            feedsData()
        } else {
            alert("All field must be filled");
        }
    }

    const navigate = useNavigate();
    const handleLogout = (e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>

            {/* -----------------Modal Start------------- */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <textarea className="form-control" id="floatingTextarea" name='body' onChange={onChange} value={post.body} required></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handlePost}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------Modal End------------- */}


            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={
                {
                    width: "280px",
                    bottom: "0",
                    top: "0",
                    position: "fixed"
                }}>
                <NavLink href="/feeds" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><NavLink to="/feeds" /></svg>
                    <span className="fs-4">Sidebar</span>
                </NavLink>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="/feeds" className="nav-link active" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="nav-link text-white fn px-3 py-2" role='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Add Post
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <div role='button' className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li data-bs-toggle="modal" data-bs-target="#exampleModal" className="dropdown-item" role='button' href="/">New Post</li>
                        <li className="dropdown-item" role='button' >Settings</li>
                        <li className="dropdown-item" role='button' >Profile</li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="dropdown-item" href="/" onClick={handleLogout} role='button'>Sign out</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
