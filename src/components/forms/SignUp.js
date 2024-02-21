import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <div class="mb-3">
        <label for="fullName" class="form-label">
          Email address
        </label>
        <input
          type="text"
          class="form-control"
          id="fullName"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <button type="button" class="btn btn-primary">Sign Up</button>

    </div>
  )
}

export default SignUp