import { useContext } from 'react';
import PostContext from '../Context/post/PostContext';

const FeedCard = (props) => {
    const { post, currentPost } = props;
    const context = useContext(PostContext)
    const { handleDelete } = context

    return (
        <div>
            <div className="card my-4 shadow" style={{ width: "30rem" }}>
                <div className="p-4 card-body">
                    <div className='d-flex justify-content-end' >
                        <div type="button" className='btn-group dropend' role='button' data-bs-toggle="dropdown" aria-expanded="false">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </div>
                        <ul className="dropdown-menu">
                            <li className='fn px-3 py-2' role='button' data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={()=>{currentPost(post)}}>Edit</li>

                            <li className='fn px-3 py-2' role='button' onClick={() => {
                                if (window.confirm("Do you want to delete this post?")) {
                                    handleDelete(post.id)
                                }
                            }}>Delete</li>
                        </ul>
                    </div>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
