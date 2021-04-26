import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {

  componentDidMount () {
    const script = document.createElement('script');
    script.src = "https://cdn.3cx.com/livechat/v1/callus.js"
    script.async = true;
    document.body.appendChild(script);
  }

  render () {
    return (
      <div className={"footer"}>
        <call-us style={{position: 'fixed', right: 20, bottom: 20, fontFamily: 'Arial', zIndex: 99999, callUsFormHeaderBackground: '#373737', callUsMainButtonBackground: '#0596d4', callUsClientTextColor: '#d4d4d4', callUsAgentTextColor: '#eeeeee', callUsFormHeight: 330}} id="wp-live-chat-by-3CX" channel-url="https://vallus.il.3cx.us:5001" files-url="https://vallus.il.3cx.us:5001" minimized="true" animation-style="none" party="sinkhole" minimized-style="BubbleRight" allow-call="false" allow-video="false" allow-soundnotifications="true" enable-onmobile="true" offline-enabled="true" enable="true" ignore-queueownership="false" authentication="both" operator-name="Support" show-operator-actual-name="true" channel="phone" aknowledge-received="true" gdpr-enabled="false" gdpr-message="I agree that my personal data to be processed and for the use of cookies in order to engage in a chat processed by COMPANY, for the purpose of Chat/Support for the time of  30 day(s) as per the GDPR." message-userinfo-format="both" message-dateformat="both" start-chat-button-text="Chat" window-title="Live Chat & Talk" button-icon-type="Default" invite-message="Hello! How can we help you today?" authentication-message="Could we have your name and email?" unavailable-message="We are away, leave us a message!" offline-finish-message="We received your message and we'll contact you soon." ending-message="Your session is over. Please feel free to contact us again!" greeting-visibility="none" greeting-offline-visibility="none" chat-delay={2000} offline-name-message="Could we have your name?" offline-email-message="Could we have your email?" offline-form-invalid-name="I'm sorry, the provided name is not valid." offline-form-maximum-characters-reached="Maximum characters reached" offline-form-invalid-email="I'm sorry, that doesn't look like an email address. Can you try again?"></call-us>
  
        <Container fluid>
          <Row>
            <Col md={{span: 2, offset: 4}}>
              <div className={"footerCol"}>
                <h4>Contact:</h4>
                <hr className={"divider"} />
                <ul className={"footerContact"}>
                  <li><a href="tel:3126051420">312.605.1420</a></li>
                  <li><a href="email:hello@valle.us">hello@valle.us</a></li>
                  <li>20 N Wacker Drive <br/> Chicago IL, 60623</li>
                  <li><iframe className={"map"} width="100%" style={{border:0}} loading={"lazy"} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqXVj87gsDogR37-Ye0kAWko&key=AIzaSyDUaXrl57L0CwX-mzfHfvSt8XPL9G0acVY"></iframe></li>
                </ul>
              </div>
            </Col>
            <Col md="2">
              <div className={"footerCol"}>
                <h4>Sitemap</h4>
                <hr className={"divider"} />
                <ul className={"footerContact"}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <script defer src="https://cdn.3cx.com/livechat/v1/callus.js" id="tcx-callus-js"></script> */}
      </div>
    )
  }
}


// function Footer() {
//   return (
//     <div className={"footer"}>
//       <call-us style={{position: 'fixed', right: 20, bottom: 20, fontFamily: 'Arial', zIndex: 99999, callUsFormHeaderBackground: '#373737', callUsMainButtonBackground: '#0596d4', callUsClientTextColor: '#d4d4d4', callUsAgentTextColor: '#eeeeee', callUsFormHeight: 330}} id="wp-live-chat-by-3CX" channel-url="https://vallus.il.3cx.us:5001" files-url="https://vallus.il.3cx.us:5001" minimized="true" animation-style="none" party="sinkhole" minimized-style="BubbleRight" allow-call="false" allow-video="false" allow-soundnotifications="true" enable-onmobile="true" offline-enabled="true" enable="true" ignore-queueownership="false" authentication="both" operator-name="Support" show-operator-actual-name="true" channel="phone" aknowledge-received="true" gdpr-enabled="false" gdpr-message="I agree that my personal data to be processed and for the use of cookies in order to engage in a chat processed by COMPANY, for the purpose of Chat/Support for the time of  30 day(s) as per the GDPR." message-userinfo-format="both" message-dateformat="both" start-chat-button-text="Chat" window-title="Live Chat & Talk" button-icon-type="Default" invite-message="Hello! How can we help you today?" authentication-message="Could we have your name and email?" unavailable-message="We are away, leave us a message!" offline-finish-message="We received your message and we'll contact you soon." ending-message="Your session is over. Please feel free to contact us again!" greeting-visibility="none" greeting-offline-visibility="none" chat-delay={2000} offline-name-message="Could we have your name?" offline-email-message="Could we have your email?" offline-form-invalid-name="I'm sorry, the provided name is not valid." offline-form-maximum-characters-reached="Maximum characters reached" offline-form-invalid-email="I'm sorry, that doesn't look like an email address. Can you try again?"></call-us>

//       <Container fluid>
//         <Row>
//           <Col md={{span: 2, offset: 4}}>
//             <div className={"footerCol"}>
//               <h4>Contact:</h4>
//               <hr className={"divider"} />
//               <ul className={"footerContact"}>
//                 <li><a href="tel:3126051420">312.605.1420</a></li>
//                 <li><a href="email:hello@valle.us">hello@valle.us</a></li>
//                 <li>20 N Wacker Drive <br/> Chicago IL, 60623</li>
//                 <li><iframe className={"map"} width="100%" style={{border:0}} loading={"lazy"} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqXVj87gsDogR37-Ye0kAWko&key=AIzaSyDUaXrl57L0CwX-mzfHfvSt8XPL9G0acVY"></iframe></li>
//               </ul>
//             </div>
//           </Col>
//           <Col md="2">
//             <div className={"footerCol"}>
//               <h4>Sitemap</h4>
//               <hr className={"divider"} />
//               <ul className={"footerContact"}>
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#services">Services</a></li>
//                 <li><a href="#about">About</a></li>
//               </ul>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <script defer src="https://cdn.3cx.com/livechat/v1/callus.js" id="tcx-callus-js"></script>
//     </div>
//   )
// }

// export default Footer;