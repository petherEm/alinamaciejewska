import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="kura_tm_section">
        <div className="kura_tm_copyright">
          <div className="container">
            <div
              className="copyright_inner wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="text">
                <p>
                  Copyright &copy; {new Date().getFullYear()}. Created by <a href="https://piotrmaciejewski.com" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Piotr.</a> 
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
