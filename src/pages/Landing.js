import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to reach their goals. Set time
            aside to learn and get reminders using your learning scheduler.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="main Logo" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
