import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="map-info">
          <h3>RESTAURANT LOCATION</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.956328410884!2d-119.55971992361494!3d37.31986213823352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80942902a82f5b33%3A0xafb6a9a315c41467!2s54354%20Rd%20432%2C%20Bass%20Lake%2C%20CA%2093604!5e0!3m2!1sen!2sus!4v1691187418715!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p>54354 Rd 432, Bass Lake, CA 93604</p>
        </div>
        <div className="footer-links-container">
          <div>
            <h3>FOLLOW US</h3>
            <div className="socials-container">
              <a
                target="_blank"
                href="https://www.instagram.com/nurturebasslake/"
              >
                <i className="fa-brands fa-instagram"></i>
                <p>
                  Instagram <br /> @nurturebasslake
                </p>
              </a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100095190627640">
                <i className="fa-brands fa-facebook"></i>
                <p>Facebook <br /> @nurturebasslake</p>
              </a>
              {/* <a target="_blank" href="https://www.youtube.com/">
            <i class="fa-brands fa-youtube"></i>
            Youtube
          </a> */}
            </div>
          </div>
          <div>
            <h3>LEAVE A REVIEW</h3>
            <div className="socials-container">
              <a target="_blank" href="https://www.yelp.com/">
                <i className="fa-brands fa-yelp"></i>
                <p>Yelp</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
