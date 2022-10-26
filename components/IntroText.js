import Link from 'next/link';

function IntroText() {
	return (
		<div className='intro-text'>
			{/* <p>I am in first year B.E CSE at Chitkara University, Punjab. I know<b> Python</b>, <b>Java</b> and <b>MERN Stack</b>. I create awesome Websites and Web Apps. If you are looking for a partner for any project based on this, the feel free to contact me.</p> */}
			<p>
				<b>Grounded</b> and <b>Solution-Oriented</b> 3rd year CSE
				undergrad having a deep passion of tech.
			</p>
			<br></br>
			<p>
				<b>Vice Chair</b>, GeeksForGeeks Student Chapter,{' '}
				<b>Web Head</b>, IEI Society, <b>Web Lead</b> &{' '}
				<b>Core Member</b>, Google DSC.
			</p>
			<p style={{ textAlign: 'center' }}>
				<button id='btn'>
					<Link href='/contact'>
						<a>Contact Me</a>
					</Link>
				</button>
			</p>
		</div>
	);
}

export default IntroText;
