import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <div className="row">
                    INFERNO Copyright © 2021 Inferno - All rights reserved || Developed by Vatsal
                </div>
            </div>
        </footer>
    )
}

export default Footer