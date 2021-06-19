import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../../images/footer_logo.png";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
import intercom from "../../images/intercom.png";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="spacer15"></div>
        <div className="spacer15"></div>
        <div className="footer row">
          <div className="col-md-6 ">
            <img src={logo} className="footer_logo" alt="alt"/>
          </div>
          <div className="col-md-6 no_padding">
            <div className="row links">
              <div className="col-6">
                <p>
                  <b>EPISODE TBILISI</b>
                </p>
                <a href="">Overview</a>
                <a href="">Rooms</a>
                <a href="">Local Guide</a>
                <div className="spacer15"></div>
                <p>
                  <b>LANGUAGE</b>
                </p>
                <p>
                  <span className="selected_language">EN</span> · GE
                </p>
              </div>
              <div className="col-6">
                <p>
                  <b>ABOUT</b>
                </p>
                <a href="">EPISODE eperience</a>
                <a href="">Join the Team</a>
                <p className="light_topic">News</p>
                <a href="">Contact Us</a>
                <a href="">FAQ</a>
                <a href="">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer15"></div>

        <div className="row">
          <div className="col-md-12 ">
            <div className="row social_icons">
              <div className="align-self-center">
                <img src={fb} alt="alt"/>
              </div>
              <div className="align-self-center">
                <img src={insta} alt="alt"/>
              </div>
              <div className="align-self-center">
                <img src={twitter} alt="alt"/>
              </div>
              <div className="align-self-center">
                <img src={youtube} alt="alt"/>
              </div>
              <div className="ml-auto">
                <img src={intercom} alt="alt"/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
