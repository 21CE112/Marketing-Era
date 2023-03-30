import React from 'react'
import  './footer.css'
// import "http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
// import "http://fonts.googleapis.com/css?family=Cookie"
const Footer = () => {
  return (
    <footer className="footer-distributed">

        <div className="footer-left">
            <h3> <span>M</span>arketing  <span>E</span>ra</h3>

            <p className="footer-links">
                <a href="/">Home</a>
                |
                <a href="/">Service</a>
                |
                <a href="/">About</a>
                |
                <a href="/">Contact</a>
            </p>

            <p className="footer-company-name">Copyright © 2023 <strong>Marketing Era </strong> All rights reserved</p>
        </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span><strong>Anand , Gujarat</strong></span> </p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+91 1234567890</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="/">xyz@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span>
                <strong>Marketing Era</strong> is a Digital Marketing website where you can grow your buisness using our service. 
            </p>
            <div className="footer-icons">
                <a href="/"><i className="fa fa-facebook"></i></a>
                <a href="/"><i className="fa fa-instagram"></i></a>
                <a href="/"><i className="fa fa-linkedin"></i></a>
                <a href="/"><i className="fa fa-twitter"></i></a>
                <a href="/"><i className="fa fa-youtube"></i></a>
            </div>
        </div>
    </footer>

  )
}

export default Footer