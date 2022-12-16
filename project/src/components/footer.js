import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to="/" className="navbar-logo" onClick="{closeMobileMenu}">
              Glasgow Film Festival
            </Link>

          </div>
          <small class='copyright'>GFF - (This is a fictitious site) © 2022</small>
          <div class='social-icons'>

            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/glasgowfilmfestival"
              target='_blank'
              rel="noopener"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>

            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/glasgowfilmfest/?hl=en"
              target='_blank'
              rel="noopener"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>

            <a
              class='social-icon-link twitter'
              href="https://twitter.com/glasgowfilmfest?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target='_blank'
              rel="noopener"
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
