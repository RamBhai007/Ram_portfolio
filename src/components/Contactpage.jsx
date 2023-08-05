import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a front-end developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/rammohan-rockz-84622a232/");
          }}
        >
          Say Hello
        </button>
        <br></br>
        <button
          className="contactbtn"
          onClick={() => {
            window.location.href = "mailto:rammohanrockz007@gmail.com";
          }}
        >
          Contact Me
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>Rammohan.</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;