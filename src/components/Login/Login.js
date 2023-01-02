import React, {useEffect, useState} from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState ()
  const [password, setPassword] = useState ()

  useEffect(() => {
  }, [email,password])

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const loginData = (e) => {
    e.preventDefault();
    const url =  'https://reqres.in/api/login'
    let dataLogin = {
      email: email,
      password: password
    }
    fetch(url, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataLogin)
  })
  .then((response) => {
    console.log('response', response);
    return response.json();
})

.then((responseJson) => {
  console.log('responseJson', responseJson);
  })

}

  return (
  <div className="login">
    <div className="form-signin w-100 m-auto">
      <form>
          <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>

          <div className="form-floating">
            <input onChange={(e) => emailHandler(e)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange= {(e) => passwordHandler (e)} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label class="text-muted">
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button onClick={(e) => loginData(e)} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  </div>
  );
}

export default Login;