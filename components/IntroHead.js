import Typewriter from 'typewriter-effect';

function IntroHead(props){
    return <h1 id="intro-head"><Typewriter
    options={{
      strings: ['Hi👋', "I'm Chirag Jain", "a B.E CSE Student"],
      autoStart: true,
      loop: true,
    }}
  /></h1>;
}

export default IntroHead;