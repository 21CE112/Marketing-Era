import React from 'react'
import herosec from './herosec.css'
import {Link} from 'react-router-dom';
const Herosec = () => {
  return (
    <div className="hero">
      <div className="welcome">
        <div className="up-wel">
          <div className='first line'>Welcome</div>
          <div className='second line'><span className='M'>M</span>arketing<span className='E'>E</span>ra</div>
          <div className='third line'>to grow Business</div>
        </div>
        <div className="low-wel">
            Ensuring the best return on investment for your <br/>
            bespoke SEO campaign requirement   
        </div>
        <div className='logsign'>
          <div className='login comm' ><Link style={{textDecoration: 'none',color:'black'}} to='/login'>Login</Link></div>
          <div className='signup comm'><Link style={{textDecoration: 'none',color:'black'}} to='/sign'>Signup</Link></div>
        </div>
      </div>
      <div className="pic">
        <img src="vecteezy_isometric-illustration-concept-digital-marketing-strategy_5638545-removebg.png"></img>
      </div>
    </div>
  )
}

export default Herosec
