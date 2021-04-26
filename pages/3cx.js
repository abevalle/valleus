import Head from 'next/head'

function Tcx() {
  return (<div>
    <call-us style={{position: 'fixed', right: '20px', bottom: '20px', fontFamily: 'Arial', zIndex: 99999, callUsFormHeaderBackground: '#373737', callUsMainButtonBackground: '#0596d4', callUsClientTextColor: '#d4d4d4', callUsAgentTextColor: '#eeeeee', callUsFormHeight: '330px'}} id={"wp-live-chat-by-3CX"} channel-url={"https://vallus.il.3cx.us:5001"} files-url="https://vallus.il.3cx.us:5001" minimized="true" animation-style="none" party="abe" minimized-style="BubbleRight" allow-call="false" allow-video="false" allow-soundnotifications="true" enable-onmobile="true" offline-enabled="true" enable="true" ignore-queueownership="false" authentication="both" operator-name="Support" show-operator-actual-name="true" channel="phone" aknowledge-received="true" gdpr-enabled="false" gdpr-message="I agree that my personal data to be processed and for the use of cookies in order to engage in a chat processed by COMPANY, for the purpose of Chat/Support for the time of  30 day(s) as per the GDPR." message-userinfo-format="both" message-dateformat="both" start-chat-button-text="Chat" window-title="Live Chat & Talk" button-icon-type="Default" invite-message="Hello! How can we help you today?" authentication-message="Could we have your name and email?" unavailable-message="We are away, leave us a message!" offline-finish-message="We received your message and we'll contact you soon." ending-message="Your session is over. Please feel free to contact us again!" greeting-visibility="none" greeting-offline-visibility="none" chat-delay={2000} offline-name-message="Could we have your name?" offline-email-message="Could we have your email?" offline-form-invalid-name="I'm sorry, the provided name is not valid." offline-form-maximum-characters-reached="Maximum characters reached" offline-form-invalid-email="I'm sorry, that doesn't look like an email address. Can you try again?"/>
  </div>)
}

export default Tcx;