import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "", cpassword: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email.length > 0 && credentials.password.length > 0 && credentials.cpassword.length > 0 ) {
      if (credentials.password !== credentials.cpassword) {
        alert("Password and Confirm Password does not match");
      } else {
        localStorage.setItem("email", credentials.email);
        localStorage.setItem("password", credentials.password);
        navigate('/login');
      }
    }else{
      alert("All fields must be filled");
    }

  }

  useEffect(() => {
    document.title = "SignUp";
  }, []);

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div className="my-5 container w-25 p-5 shadow-lg">
      <h1>SignUp</h1>
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
        <div className="mb-3">
          <label htmlFor="exampleInputCPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name='cpassword' id="exampleInputCPassword1" onChange={handleOnChange} required />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>SignUp</button>
        <div className='mt-3'>
          <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default Signup;