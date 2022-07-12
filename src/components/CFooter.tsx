import React from 'react';

const CFooter = () => {
  return (
    <footer>
      <div className="footer_infor">
        <div className="footer_logo">
          <img src="/logo_light.png" alt="logo" />
        </div>

        <div className="footer_grid">
          <div className="footer_cell">
            <h5>DIGI-CONNECT</h5>
            <a>
              <img src="/home/footer/place.svg" alt="place" />
              2nd Floor, ANNA Bldg, Quang Trung Software City, District 12,
              HCMC, Vietnam
            </a>
            <a href="tel:+8437155325">
              <img src="/home/footer/phone.svg" alt="phone" />
              +84 3715 5325
            </a>
            <a href="mailto:infor@digi-connect.vn">
              <img src="/home/footer/mail.svg" alt="mail" />
              infor@digi-connect.vn
            </a>
          </div>
          <div className="footer_cell">
            <h5>Abous</h5>
            <a>About Us</a>
            <a>Recruiting</a>
            <a>News</a>
          </div>
          <div className="footer_cell">
            <h5>Legal</h5>
            <a>Term of Services</a>
            <a>Privacy Policy</a>
            <a>Site Map</a>
          </div>
          <div className="footer_cell">
            <h5>Connect</h5>
            <a>Digi-Care</a>
            <a>Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>Copyrights 2020 DIGI-CONNECT. All rights reserved</p>

        <div className="social">
          <p>Follow us</p>
          <img src="/home/footer/facebook.svg" alt="facebook" />
          <img src="/home/footer/twitter.svg" alt="twitter" />
          <img src="/home/footer/youtube.svg" alt="youtube" />
          <img src="/home/footer/linkedin.svg" alt="linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default CFooter;
