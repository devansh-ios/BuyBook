import img from "../src/images/5a68f67001d15068bdfe87f8.png";
import wave from "../src/images/wave.png";

function Content() {
  return (
    <>
      {" "}
      <section id="home">
        <img className="stdiv" src={img} alt="heading " />
        <div className="home-container">
          <h1>
            " A <span>READER</span> lives <span>THOUSAND</span> lives before he{" "}
            <span>DIES</span> "
          </h1>
        </div>
        <img className="wave" src={wave} alt="" />
      </section>
    </>
  );
}
export default Content;
