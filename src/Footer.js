import React from 'react';
import "./Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>pls work</h4>
                        <ul className="list-unstyled">
                            <li>dsadsad</li>
                            <li>dsadsad</li>
                            <li>dsadsad</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>pls work 2</h4>
                        <ul className="list-unstyled">
                            <li>dsadsad</li>
                            <li>dsadsad</li>
                            <li>dsadsad</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>pls work 3</h4>
                        <ul className="list-unstyled">
                            <li>dsadsad</li>
                            <li>dsadsad</li>
                            <li>dsadsad</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Jordan Chu
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;