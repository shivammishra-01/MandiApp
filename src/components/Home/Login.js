import React from 'react'

const Login = () => {
  return (
    <div>
      <>
     
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form class="professional-form border border-success p-4 rounded">
            <h1 class="text-center mb-4">Create Interview Room</h1>
            <div class="form-group">
              <label for="conferenceType">Conference System Type:</label>
              <input
                type="text"
                class="form-control"
                id="conferenceType"
                name="conferenceType"
                placeholder="Enter conference system type"
                required
              />
            </div>

            <div class="form-group">
              <label for="interviewLink">Interview Link Room:</label>
              <input
                type="text"
                class="form-control"
                id="interviewLink"
                name="interviewLink"
                placeholder="Enter interview link room"
                required
              />
            </div>

            <button type="submit" class="btn btn-success btn-lg btn-block">
              Create Room
            </button>
          </form>
        </div>
      </div>
    </div>
  
      </>
    </div>
  )
}

export default Login
