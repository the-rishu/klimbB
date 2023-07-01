import React from 'react'
import './Form.css'
import LinkComp from './LinkComp'
import linkedin from '../images/linkedin.svg'
import google from '../images/google.svg'
import discord from '../images/discord.svg'
import github from '../images/github.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'

function Form() {
  return (
   <>
     <div className='main-section'>
        <form action="">
            <div className='section-1'>
                <div className='login-text'>Login</div>
                <div className='inp'>
                    <label htmlFor="Email">Email</label><br />
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='inp'>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" required  />
                </div>
                
                    <button className='submit-btn' >Login</button>
                
                <div >
                   <a href="/" className='fp'> Forgot Password?</a>
                </div>
            </div>

            {/* Section 2 */}
            <div className="section2">

                <LinkComp data="https://accounts.google.com/v3/signin/identifier?dsh=S638556030%3A1688138443202501&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AeDOFXgLwJ_Nels1ozSeh11_iI0H3o7vGRCACsWWATyrElJvh8t7igUD4k1UgYWzmV_UGibsHWO0&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin" name="Continue with Google" x="#f97316" pic={google}/>

                <LinkComp data="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F" name="Continue with LinkedIn" x="#3b82f6" pic={linkedin}/>
                <LinkComp data="https://github.com/login" name="Continue with Github" x="#3f3f46" pic={github}/>
                <LinkComp data="https://discord.com/login" name="Continue with Discord" x="#2563eb" pic={discord}/>
            </div>
        </form>
    </div>
    <div className="footer">
        <div className='icon-part'>
            <a href="https://discord.com/login" name="Continue with Discord"><img src={discord} alt="" /></a>
            <a href="https://web.telegram.org/k/"><img src={telegram} alt="" /></a>
            <a href="https://web.whatsapp.com/"><img src={whatsapp} alt="" /></a>
            <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"><img src={linkedin} alt="" /></a>
        </div>
        <div className='legal-text'>
            <a href="/">Legal</a>
        </div>
        <div className='license'>Copyright 2023 -  klimbB</div>
    </div>
   </>
  )
}

export default Form