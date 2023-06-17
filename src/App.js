import Img from "./assest/img/ALL.jpg"
import './App.css';
import Header from "./components/header";
import Category from "./components/category";
import Skills from "./components/skills";
import Commentes from "./components/comments"
import Contact from "./components/contact"
import Portifolio from "./components/portofilio";
function App() {

  return (
    <>
      <Header />
      <div className="mt-5 mx-5">

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }} className="res p-3">
          <div className="fs-3 fw-bolder mb-2">
            <h1 style={{ color: '#252E48', fontSize: '32px', fontWeight: 700 }} className="anmation rf-h1 hero-text-box ">All
              the tools
              <span> you need</span> in one <br />
              place <br />
            </h1>
            <div style={{ width: 'auto', fontWeight: 'normal', lineHeight: '1.3', margin: 0, padding: 0, fontSize: '16px', color: '#545F7E' }}
              className="mt-5 hero-text-box">
              <p>Free time-saving growth marketing tools to succeed: high quality
                videos,<br /> animations, mockups,
                logos, presentations, SMM graphics</p>
            </div>

            <div className="hero-text-box">
              <label style={{ marginTop: '20px', width: '360px' }} className="label show"><input className="form__input "
                aria-label="Your Email" id="signupEmail" name="email" type="email"
                placeholder="Enter your massage" />


                <div className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <g transform="translate(2 3)">
                    <path data-name="Message"
                      d="M14.939,18H5.06A5.061,5.061,0,0,1,0,12.95V5.05A5.061,5.061,0,0,1,5.06,0h9.879a5.091,5.091,0,0,1,3.58,1.481A5.012,5.012,0,0,1,20,5.05v7.9A5.061,5.061,0,0,1,14.939,18ZM4.034,5.246A.733.733,0,0,0,3.5,5.47a.764.764,0,0,0-.071,1l.131.13L8.11,10.15a3.129,3.129,0,0,0,1.95.68,3.18,3.18,0,0,0,1.958-.68L16.53,6.54l.08-.08a.774.774,0,0,0-.012-1,.831.831,0,0,0-.528-.26h-.042a.76.76,0,0,0-.519.2L11,9a1.565,1.565,0,0,1-1,.36A1.592,1.592,0,0,1,9,9L4.5,5.4A.778.778,0,0,0,4.034,5.246Z"
                      fill="#7683a8"></path>
                  </g>
                </svg>
                </div>
              </label>


              <br />
              <div style={{ backgroundColor: '#2470ff', borderRadius: '5px', color: '#FFF', fontSize: '18px' }} className=" btn  text-light p-2" onclick="getstart()">Get Started</div>


              <div style={{ display: 'none', position: 'fixed', bottom: 0, left: '15px', border: '3px solid #f1f1f1', zIndex: 9 }} className="chat-popup"
                id="myForm">
                <form style={{ maxWidth: '300px', padding: '10px', backgroundColor: 'white' }}
                  className="form-container">
                  <h1>send feedback</h1>
                  <label for="msg"><b>Message</b></label>

                  <textarea style={{ width: '100%', padding: '15px', margin: '5px 0 22px 0', border: 'none', background: '#f1f1f1', resize: 'none', minHeight: '200px' }} placeholder="Type message.."
                    name="msg" required />

                  <button sstyle={{ color: 'white', padding: '16px 20px', border: 'none', cursor: 'pointer', width: '100%', marginBottom: '10px', opacity: '0.8' }} className=" bg-primary btn">Send</button>
                  <button style={{ padding: '15px' }} type="button"
                    className="btn cancel bg-danger w-100 text-light" onclick="closeForm()">Close</button>
                </form>
              </div>

              <div style={{ marginTop: '30px' }} className="rates">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="121.031" height="19.665" viewBox="0 0 121.031 19.665">
                  <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1"
                      gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#ffd200" />
                      <stop offset="1" stop-color="#f7971e" />
                    </linearGradient>
                  </defs>
                  <path id="Stars"
                    d="M7505.463-6577.7a1.049,1.049,0,0,1-.449-1.061l.889-4.832a1.075,1.075,0,0,0-.319-.954l-3.739-3.477a1.057,1.057,0,0,1-.291-1.11,1.13,1.13,0,0,1,.91-.736l4.97-.708a1.108,1.108,0,0,0,.829-.6l2.22-4.391a1.114,1.114,0,0,1,.88-.589h.421l.17.068.109.04a.669.669,0,0,1,.161.128l.09.068a1,1,0,0,1,.2.266l2.192,4.41a1.115,1.115,0,0,0,.879.6l4.968.708a1.118,1.118,0,0,1,.889.736,1.05,1.05,0,0,1-.268,1.11l-3.611,3.439a1.087,1.087,0,0,0-.319.961l.889,4.833a1.092,1.092,0,0,1-.889,1.25,1.191,1.191,0,0,1-.709-.108l-4.429-2.282a.877.877,0,0,0-.27-.086h-.271a1.109,1.109,0,0,0-.5.128l-4.428,2.269a1.114,1.114,0,0,1-.521.128A1.116,1.116,0,0,1,7505.463-6577.7Zm-25,0a1.05,1.05,0,0,1-.449-1.061l.889-4.832a1.075,1.075,0,0,0-.319-.954l-3.74-3.477a1.052,1.052,0,0,1-.289-1.11,1.125,1.125,0,0,1,.908-.736l4.97-.708a1.108,1.108,0,0,0,.829-.6l2.22-4.391a1.117,1.117,0,0,1,.879-.589h.421l.17.068.11.04a.667.667,0,0,1,.16.128l.091.068a1.076,1.076,0,0,1,.2.266l2.189,4.41a1.118,1.118,0,0,0,.88.6l4.968.708a1.119,1.119,0,0,1,.889.736,1.051,1.051,0,0,1-.268,1.11l-3.611,3.439a1.087,1.087,0,0,0-.319.961l.891,4.833a1.1,1.1,0,0,1-.891,1.25,1.193,1.193,0,0,1-.71-.108l-4.428-2.282a.881.881,0,0,0-.27-.086h-.272a1.115,1.115,0,0,0-.5.128l-4.429,2.269a1.1,1.1,0,0,1-.521.128A1.118,1.118,0,0,1,7480.462-6577.7Zm-25,0a1.049,1.049,0,0,1-.451-1.061l.889-4.832a1.075,1.075,0,0,0-.319-.954l-3.739-3.477a1.053,1.053,0,0,1-.289-1.11,1.126,1.126,0,0,1,.91-.736l4.968-.708a1.115,1.115,0,0,0,.831-.6l2.218-4.391a1.117,1.117,0,0,1,.88-.589h.421l.17.068.109.04a.633.633,0,0,1,.161.128l.09.068a1.052,1.052,0,0,1,.2.266l2.19,4.41a1.117,1.117,0,0,0,.879.6l4.968.708a1.118,1.118,0,0,1,.889.736,1.046,1.046,0,0,1-.268,1.11l-3.611,3.439a1.086,1.086,0,0,0-.319.961l.891,4.833a1.1,1.1,0,0,1-.891,1.25,1.193,1.193,0,0,1-.709-.108l-4.429-2.282a.877.877,0,0,0-.27-.086h-.271a1.115,1.115,0,0,0-.5.128l-4.426,2.269a1.116,1.116,0,0,1-.523.128A1.106,1.106,0,0,1,7455.464-6577.7Zm-25,0a1.05,1.05,0,0,1-.451-1.061l.889-4.832a1.07,1.07,0,0,0-.319-.954l-3.74-3.477a1.052,1.052,0,0,1-.289-1.11,1.125,1.125,0,0,1,.91-.736l4.968-.708a1.113,1.113,0,0,0,.831-.6l2.218-4.391a1.116,1.116,0,0,1,.879-.589h.421l.17.068.11.04a.639.639,0,0,1,.16.128l.091.068a1.076,1.076,0,0,1,.2.266l2.189,4.41a1.118,1.118,0,0,0,.88.6l4.97.708a1.124,1.124,0,0,1,.889.736,1.047,1.047,0,0,1-.27,1.11l-3.611,3.439a1.086,1.086,0,0,0-.319.961l.891,4.833a1.094,1.094,0,0,1-.891,1.25,1.2,1.2,0,0,1-.71-.108l-4.428-2.282a.881.881,0,0,0-.27-.086h-.272a1.12,1.12,0,0,0-.5.128l-4.427,2.269a1.115,1.115,0,0,1-.523.128A1.111,1.111,0,0,1,7430.464-6577.7Zm-25,0a1.049,1.049,0,0,1-.45-1.061l.887-4.832a1.063,1.063,0,0,0-.319-.954l-3.739-3.477a1.052,1.052,0,0,1-.289-1.11,1.125,1.125,0,0,1,.91-.736l4.968-.708a1.115,1.115,0,0,0,.831-.6l2.218-4.391a1.117,1.117,0,0,1,.88-.589h.423l.17.068.107.04a.667.667,0,0,1,.162.128l.089.068a1.064,1.064,0,0,1,.2.266l2.189,4.41a1.119,1.119,0,0,0,.882.6l4.968.708a1.119,1.119,0,0,1,.889.736,1.047,1.047,0,0,1-.27,1.11l-3.611,3.439a1.092,1.092,0,0,0-.319.961l.891,4.833a1.1,1.1,0,0,1-.891,1.25,1.193,1.193,0,0,1-.709-.108l-4.429-2.282a.861.861,0,0,0-.27-.086h-.271a1.107,1.107,0,0,0-.5.128l-4.429,2.269a1.113,1.113,0,0,1-.522.128A1.111,1.111,0,0,1,7405.464-6577.7Z"
                    transform="translate(-7400.985 6596.656)" stroke="rgba(0,0,0,0)" stroke-width="1"
                    fill="url(#linear-gradient)" />
                </svg>
              </div>

            </div>
          </div>
          <div>
            <img className="rounded-3 img hero-img-box" style={{ width: '500px' }} src={Img} alt="" />
          </div>
        </div>
      </div>

      <div className="mb-5 mt-5 d-flex justify-content-center">
        <fieldset className="line"
          style={{ width: '90%', borderBottom: 'solid 2px transparent', borderLeft: 'solid 2px transparent', borderRight: 'solid 2px transparent' }}>
          <legend style={{
            justifyContent: 'center', display: 'flex', paddingLeft: '8px', paddingRight: '8px',
            color: '#545F7E', padding: '0 12px', textAlign: 'center',
            fontSize: '16px', fontFamily: 'Montserrat, "Open Sans", sans-serif !important', lineHeight: '1.3'
          }}>
            Trusted by <b style={{ padding: '0px 4px' }}>1k+</b> users and <b style={{ padding: '0px 4px' }}>100+</b>
            high-end companies
          </legend>
        </fieldset>
      </div>
      <Category />

      <Skills />
      <Commentes />
      <Portifolio />
      <Contact />
    </>
  );
}

export default App;
