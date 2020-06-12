import React from 'react';
import "./Footer.css";

const Footer = () => {

    // const github = <FontAwsomeIcon github={fa-github-square} />
    // const linkedin = <FontAwsomeIcon linkedin={fa-linkedin-square} />
    // const code = <FontAwsomeIcon code={fa-code} />

    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>
                Practice social distancing during the pandemic. Cook at home
                while you stay at home! This app will help you find recipes
                based off food and ingredients you already have in your pantry.
              </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/jordanchu1995/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/idkjay">GitHub</a>
                </li>
                <li>
                  <a href="http://jordanchu.xyz/">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()}{" "}
              <a href="http://jordanchu.xyz/">Jordan Chu</a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;