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
                <a className="creator" href="https://www.linkedin.com/in/jordanchu1995/"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                <a class="creator "href="http://jordanchu.xyz"><i class="fa fa-code fa-2x"></i></a>
                <a class="creator "href="https://github.com/idkjay"><i class="fa fa-github-square fa-2x"></i></a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;
              <a className="name" href="http://jordanchu.xyz/">Jordan Chu</a> | {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;