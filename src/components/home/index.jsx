import React, { Component } from "react";
import hero from "../../images/hero_image.png";
import arrowRight1 from "../../images/arrow_right_1.png";
import arrowRight from "../../images/arrow_right.png";
import location from "../../images/location.png";
import phone from "../../images/phone.png";
import appStore from "../../images/app_store.png";
import playStore from "../../images/play_store.png";
class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="row headline section_padding">
          <div className="col">
            <h1 className="ta_center">
              Write your own story.
              <br />
              Join the <span className="beatrice_font">EPISODE</span> team.
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 no_padding hero_image">
            <img src={hero} alt="alt"/>
          </div>
          <div className="col-md-6 hero_image_text">
            <p>
              We're ushering in a new era of the hospitality industry with a
              fresh outlook and the latest technology. At EPISODE, we value
              indviduality, diversity, creative problem-solving and quick wits –
              and we're always seeking the right people to make the experience
              come to life. EPISODE team members provide warm and personalized
              service and can juggle many different tasks with ease. Does this
              sound like you? Then we'd love to hear from you.
            </p>

            <a href="/" className="white_button">
              View open positions <img src={arrowRight1} alt="alt"/>
            </a>
          </div>
        </div>

        <div className="row section_padding">
          <div className="col-12">
            <h1 className="section_heading ta_center beatrice_font">
              EPISODE Tbilisi
            </h1>
            <div className="spacer15"></div>
            <p className="job_location ta_center">
              <img src={location} alt="alt"/> Tbilisi, Georgia
            </p>
          </div>

          <div className="col-12 open_positions">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="row open_position">
                  <div className="job_position">
                    <p>
                      <b>General Manager (f/m/x)</b>
                    </p>
                    <p className="job_time hod">Full-time</p>
                  </div>
                  <div className="job_option align-self-center">
                    <p>
                      <span className="hom_inline">Full-time</span>
                      <img src={arrowRight} className="open_job" alt="alt"/>
                    </p>
                  </div>
                </div>
                <div className="row open_position">
                  <div className="job_position">
                    <p>
                      <b>General Manager (f/m/x)</b>
                    </p>
                    <p className="job_time hod">Full-time</p>
                  </div>
                  <div className="job_option align-self-center">
                    <p>
                      <span className="hom_inline">Full-time</span>
                      <img src={arrowRight} className="open_job" alt="alt"/>
                    </p>
                  </div>
                </div>
                <div className="row open_position">
                  <div className="job_position">
                    <p>
                      <b>General Manager (f/m/x)</b>
                    </p>
                    <p className="job_time hod">Full-time</p>
                  </div>
                  <div className="job_option align-self-center">
                    <p>
                      <span className="hom_inline">Full-time</span>
                      <img src={arrowRight} className="open_job" alt="alt"/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row section_padding">
          <div className="col-12">
            <h1 className="section_heading ta_center beatrice_font">
              EPISODE Riga
            </h1>
            <div className="spacer15"></div>
            <p className="job_location ta_center">
              <img src={location} alt="alt"/> Riga, Latvia
            </p>
          </div>

          <div className="col-12 open_positions">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="row open_position">
                  <div className="job_position">
                    <p>
                      <b>General Manager (f/m/x)</b>
                    </p>
                    <p className="job_time hod">Full-time</p>
                  </div>
                  <div className="job_option align-self-center">
                    <p>
                      <span className="hom_inline">Full-time</span>
                      <img src={arrowRight} className="open_job" alt="alt"/>
                    </p>
                  </div>
                </div>
                <div className="row open_position">
                  <div className="job_position">
                    <p>
                      <b>General Manager (f/m/x)</b>
                    </p>
                    <p className="job_time hod">Full-time</p>
                  </div>
                  <div className="job_option align-self-center">
                    <p>
                      <span className="hom_inline">Full-time</span>
                      <img src={arrowRight} className="open_job" alt="alt"/>
                    </p>
                  </div>
                </div>
                <div className="row open_position">
                  <div className="job_position">
                    <p>
                      <b>General Manager (f/m/x)</b>
                    </p>
                    <p className="job_time hod">Full-time</p>
                  </div>
                  <div className="job_option align-self-center">
                    <p>
                      <span className="hom_inline">Full-time</span>
                      <img src={arrowRight} className="open_job" alt="alt"/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 no_padding phone_image">
            <div className="overlay"></div>
            <p className="phone_text">
              Plan your trip and check in effortlessly with the EPISODE app
            </p>
            <img src={phone} className="phone_right" alt="alt"/>
            <div className="download_app">
              <div className="row">
                <img src={appStore} alt="alt"/>
                <img src={playStore} alt="alt"/>
              </div>
            </div>
          </div>
          <div className="col-md-6 hero_image_text subscribe_text">
            <div className="subscribe">
              <p>
                Get updates and special offers <br />
                delivered right into your inbox
              </p>
              <div className="row subscribe_form">
                <input type="text" name="" className="subscribe_input" />
                <button className="subscribe_button">
                  SIGN UP &nbsp;
                  <img src={arrowRight} alt="alt"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
