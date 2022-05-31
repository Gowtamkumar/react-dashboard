import React, { useState } from 'react'
// import { login } from '../../service/auth/login';
import './login.css'


export default function Login() {

  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [bkupData, setBkupData] = useState({});
  const [loading, setLoading] = useState({});

  const handleChange = ({ target }) => {
    const newData = { ...data }
    const newError = { ...error };
    delete newError[target.name]
    newData[target.name] = target.value
    setData(newData);
    setError(newError);

  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(data);
  //     setTimeout(() => {
  //       window.location = "/dashboard"
  //     }, 1000);

  //   } catch (err) {
  //     if (err.response && err.response.data) {
  //       setError(err.response.data);
  //     }
  //   }
  // }

  // console.log(error.message);

  return (
    <div className="" style={{ backgroundColor: '#D5E2F9' }}>
      <div className="d-flex align-items-center justify-content-center login-bg">
        <div className="shadow-sm rounded card" style={{ padding: "50px" }}>
          <p className="text-center">Welcome!</p>
          <h4 className="text-center mb-4">Hello Login page</h4>
          <h5 className="text-center col-md-12 mt-4 fw-bold">Sign In</h5>
          <div className="col-md-12 mb-4 mt-4">
            <input
              placeholder="User Name"
              id="username"
              name="username"
              // onChange={handleChange}
              style={{ height: '40px' }}
            />
          </div>
          <div className="col-md-12 mb-4">
            <input
              placeholder="Password"
              id="password"
              name="password"
              // onChange={handleChange}
              style={{ height: '40px' }}
            />
          </div>
          {/* {error.message && <span className="text-danger">{error.message}</span>} */}
          <div className="col-md-12 text-center mt-3 d-grid mx-auto mb-4">
            <button type="primary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}
