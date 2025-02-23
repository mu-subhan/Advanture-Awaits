import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-contianer'>
      <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our best vacation deals
    </p>
    <p className='footer-subscription-text'>
        You can unsubscribe at any time.
    </p>
    <div className='input-areas'>
        <form>
            <input 
            type='email' name='email'placeholder='Your Emai' className='footer-input'/>
            <Button
            buttonStyle='btn--outline'>Subscribe</Button>
        </form>
    </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <div className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/'className='social-logo'>
        TRVL <i className='fab fa-typo3'/> </Link> 
                  </div>
            <small className='website-rights'>TRVL © 2024</small>
            <div className='social-icons'>
                <Link className='social-icon-link facebook'
                   to='/'
                   target='blank'
                   aria-label='Facebook'
                   >
                    <i className='fab fa-facebook-f'></i>
                </Link>
                <Link className='social-icon-link instagram'
                   to='/'
                   target='blank'
                   aria-label='Instagram'
                   >
                    <i className='fab fa-instagram'></i>
                </Link>
                <Link className='social-icon-link youtube'
                   to='/'
                   target='blank'
                   aria-label='Youtube'
                   >
                    <i className='fab fa-youtube'></i>
                </Link>
                <Link className='social-icon-link twitter'
                   to='/'
                   target='blank'
                   aria-label='Twitter'
                   >
                    <i className='fab fa-twitter'></i>
                </Link>
                <Link className='social-icon-link linkedin'
                   to='/'
                   target='blank'
                   aria-label='LinkedIn'
                   >
                    <i className='fab fa-linkdein'></i>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
