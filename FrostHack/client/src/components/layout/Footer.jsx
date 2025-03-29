// import from libraries
import React from 'react'
import { Link } from 'react-router-dom';


// import from files
import './Footer.css'


// footer component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <ul>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/test">Test</Link></li>
                    </ul>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-right">
                    <h5>Contact Us</h5>
                    <p>
                        Project Name Pvt. Ltd. <br/>
                        Innovation Tower, Block C,<br/>
                        Tech Park Central, Outer Ring Road,<br/> 
                        Kadubeesanahalli, Bengaluru, <br/>
                        Karnataka, India - 560103.
                    </p>
                    <p>
                        (+91) 80456 17000 / 80674 15800
                    </p>
                    <p>
                        contact@projectname.com
                    </p>
                    <div className="social-links">
                        <i className="social-icon bi bi-instagram"></i>
                        <i className="social-icon bi bi-facebook"></i>
                        <i className="social-icon bi bi-twitter-x"></i>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Manopriya Mondal</p>
            </div>
        </footer>
    )
}

export default Footer