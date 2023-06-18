import wave from "../src/images/wave.svg";
function Contact() {
  return (
    <>
      <footer id="contact">
        <h1 className="logo"> BuyBooks </h1>
        <div className="iconFile">
          <a
            href="https://www.linkedin.com/in/devansh-kumar-9798b21ba/"
            rel="norefrerral"
          >
            <i class="fa-brands fa-linkedin-in fa-2xl"></i>
          </a>
          <a href="mailto:devansh.dev2592002@gmail.com">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
          <a href="https://www.instagram.com/hasnaved_ramuk/?hl=en">
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </a>
        </div>
        <h3>
          {" "}
          Made With <>❤</> <>😉</>
        </h3>
        <img src={wave} alt="footer" />
      </footer>
    </>
  );
}
export default Contact;
