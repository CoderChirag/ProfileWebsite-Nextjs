import Link from "next/link";

function IntroText(){
    return (
        <div className="intro-text">
              <p>I am in first year B.E CSE at Chitkara University, Punjab. I know<b> Python</b>, <b>Java</b> and <b>MERN Stack</b>. I create awesome Websites and Web Apps. If you are looking for a partner for any project based on this, the feel free to contact me.</p>
              <button id="btn"><Link href="/contact"><a>Contact Me</a></Link></button>
        </div>
    );
}

export default IntroText;