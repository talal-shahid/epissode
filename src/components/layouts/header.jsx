import React, { Component } from "react";
import { connect } from "react-redux";
import close from "../../images/close.png";
import logo from "../../images/logo.png";
import face from "../../images/face-unlock.svg";
import info from "../../images/info.svg";
import language from "../../images/language.svg";
import hamburger from "../../images/hamburger.png";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="row header">
          <div className="col-md-12">
            <div className="row">
              <img className="logo" src={logo} alt="alt"/>
              <div className="col">
                <div className="row header_border">
                  <div className="align-self-center header_filter">
                    <p>
                      Careers{" "}
                      <img src={close} className="clear_filter" alt="alt"/>
                    </p>
                  </div>
                  <div className="align-self-center header_icons">
                    <span className="hom">
                      <img src={face} alt="alt"/>
                      <img src={info} alt="alt"/>
                      <img src={language} alt="alt"/>
                    </span>
                    <span className="hod">
                      <img src={hamburger} alt="alt"/>
                    </span>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
