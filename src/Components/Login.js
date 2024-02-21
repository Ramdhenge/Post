import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Loin() {

  const [credentials, setCredentials] = useState({ email: "", password: ""})
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email===localStorage.getItem("email") && credentials.password===localStorage.getItem("password")) {
      navigate('/feeds');
    }else{
      alert("Invalid Eamil and Password")
    }
  }

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    document.title = "Login";
  },[]);

  return (
    <div className="my-5 container w-25 p-5 shadow-lg">
      <h1>Login</h1>
      <hr className='my-4' />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="exampleInputEmail1" onChange={handleOnChange} aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' id="exampleInputPassword1" onChange={handleOnChange} required />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
        <div className='mt-3'>
            <p>Already have an account? <NavLink to="/signup">Signup</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default Loin;