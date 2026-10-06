import React from 'react'
import gimg from '../assets/githubLogo.png'
import limg from '../assets/linkedinLogo.png'

const Navbar = () => {

    window.onscroll = function(){scroll()}

    function scroll() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("nav").className = "nav filled";
        } else {
          document.getElementById("nav").className = "nav";
        }
      }

    return (
    <header id='nav' className='nav'>
        <nav className='navbar dropdown-items'>
            <a className="dropdown-links borderRight imgAnime" href='#home'>Home</a>
            <a className="dropdown-links borderRight imgAnime" href='#aboutWork'>About</a>
            <a className="dropdown-links borderRight imgAnime" href='#projects'>Projects</a>
            <a className="dropdown-links imgAnime" href='#contact'>Contact</a>
            {/* <a className="dropdown-links" href='#more'>More</a> */}
        </nav>
        <div className='socials'>
            <a className='imgAnime' href='https://github.com/Ryan-Wisniewski' target="_blank" rel="noopener noreferrer"><img src={gimg} alt='Github logo'/></a>
            <a className='imgAnime' href='http://www.linkedin.com/in/ryan-wisniewski' target="_blank" rel="noopener noreferrer"><img src={limg} alt='LinkedIn logo'/></a>
        </div>
    </header>
    )
}

export default Navbar